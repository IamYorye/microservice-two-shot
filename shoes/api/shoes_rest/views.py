from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json
from common.json import ModelEncoder
from .models import Shoes, BinVO

class BinVoDetailEncoder(ModelEncoder):
    model = BinVO
    properties = ["id", "import_href", "closet_name", "bin_number", "bin_size"]

class ShoesListEnconder(ModelEncoder):
    model = Shoes
    properties = ["name", "id"]

class ShoesDetailEncoder(ModelEncoder):
    model = Shoes
    properties = [
        "id",
        "manufacturer",
        "name",
        "color",
        "picture_url",
        "wardrobe_bin"
    ]
    encoders = {
        "wardrboe_bin": BinVoDetailEncoder
    }


@require_http_methods(["GET", "POST"])
def api_list_shoes(request, bin_vo_id=None):
    if request.method == "GET":
        if bin_vo_id is not None:
            shoes = Shoes.objects.filter(bin_vo_id=bin_vo_id)
        else:
            shoes = Shoes.objects.all()
        return JsonResponse(
            {"shoes": shoes},
            encoder=ShoesListEnconder
        )
    else:
        content = json.loads(request.body)

        try:
            bin_href = content["wardrobe_bin"]
            wardrobe_bin = BinVO.objects.get(import_href=bin_href)
            content["wardrobe_bin"] = wardrobe_bin
        except BinVO.DoesNotExist:
            return JsonResponse(
                {"message": "Bin does not exist"},
                status = 400
            )

        shoes = Shoes.objects.create(**content)
        return JsonResponse(
            shoes,
            encoder=ShoesDetailEncoder,
            safe=False
        )

@require_http_methods(["DELETE", "GET", "PUT"])
def api_show_shoes(request, pk):
    if request.method == "GET":
        try:
            shoes = Shoes.objects.get(id=pk)
            return JsonResponse(
                shoes,
                encoder=ShoesDetailEncoder,
                safe=False
            )
        except Shoes.DoesNotExist:
            response = JsonResponse({"message": "Shoe does not exist"})
            response.status_code = 404
            return response
    elif request.method == "DELETE":
        try:
            count, _ = Shoes.objects.filter(id=pk).delete()
            return JsonResponse({"deleted": count > 0})
        except Shoes.DoesNotExist:
            return JsonResponse({"message": "Does not exist"})
    else:
        try:
            content = json.loads(request.body)
            shoes = Shoes.objects.get(id=pk)

            props = ["id", "manufacturer", "name", "color", "picture_url", "wardrobe_bin"]
            for prop in props:
                if prop in content:
                    setattr(shoes, prop, content[prop])
            shoes.save()
            return JsonResponse(
                shoes,
                encoder=ShoesDetailEncoder,
                safe=False,
            )
        except Shoes.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return JsonResponse
