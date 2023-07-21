# Wardrobify

Team:

* Kelly - Hats microservice
* Jaspreet - Shoes microservice

## Design

## Shoes microservice

Created a shoes model with certain attributes in the shoes microservice.  Created view functions and paths for those functions to handle certain methods such as as a "GET, POST, DELETE, and PUT".  Integrated a polling service that polls for data from the wardrobe API every 60 seconds that grabs data from that database to be used for the shoes microservice.  Integrated React for the front end that uses the shoes api, and the wardrobe api, particularly the bins api from the wardrobe api to create a SPA that handles shoes creating and storing those shoes in the shoes list database to be populated to the screen right after creation.  Integrated a delete button to delete a created shoe, using that shoes unique id as apart of the fetched url.

## Hats microservice

Jaspreet and I determined from the beginning of our project that we would first go through git commands and master the process of merging, pulling, and pushing our changes. Once we felt comfortable with this, we then agreed to start with the back end prior to moving over to the front end.

I created a hats model, which contains the attributes described in the project specifications: fabric, style name, color, picture url, and location in wardrobe. I then created the functions views that coorespond with the model, and view paths for handling of GET, POST, DELETE, and PUT. During each component, I went into Insomnia and checked each element, and error handled as necessary. I created encoders, and then moved over to integration of polling to fetch data from the database communicating with the hats and wardrobe APIs, running every 15 seconds. Additionally, I went in the browser, created a superuserer, and added locations and hats as desired.

Both Jaspreet and I communicated effectively each time we got through different elements of our code, and worked together to integrate our changes and save our work in a consistent fashion. We moved over to front end utilizing React for the visual interface. I created a hat form for adding a hat, a delete button to remove a hat, and displayed the list of hats that were added. Once all functionality was complete, Jaspreet and I integrated all of our work, checked each component seperately, and verbally shook hands on the results(we met the specs that were outlined for our practice project).
