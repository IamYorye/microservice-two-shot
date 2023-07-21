import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ShoesForm(props, isEditForm) {
    const [manufacturer, setManufacturer] = useState("")
    const [name, setName] = useState("")
    const [color, setColor] = useState("")
    const [picture_url, setPictureUrl] = useState("")
    const [bin, setBin] = useState("")
    const [bins, setBins] = useState([])
    const { shoeId } = useParams('')


    const handleManufacturerChange = (event) => {
        const value = event.target.value
        setManufacturer(value)
    }

    const handleNameChange = (event) => {
        const value = event.target.value
        setName(value)
    }

    const handleColorChange = (event) => {
        const value = event.target.value
        setColor(value)
    }

    const handlePictureUrlChange = (event) => {
        const value = event.target.value
        setPictureUrl(value)
    }

    const hanldeBinChange = (event) => {
        const value = event.target.value
        setBin(value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        const data = {}
        data.manufacturer = manufacturer
        data.name = name
        data.color = color
        data.picture_url = picture_url
        data.bin = bin
        console.log(data)

        const shoesUrl = "http://localhost:8080/api/shoes/"
        const fetchConfig = {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const response = await fetch(shoesUrl, fetchConfig)
        if (response.ok) {
            const newShoe = await response.json()
            console.log(newShoe)

            setManufacturer("")
            setName("")
            setColor("")
            setPictureUrl("")
            setBin("")
            props.getShoes()

        }
    }

    const fetchData = async () => {
        const url = "http://localhost:8100/api/bins/"

        const response = await fetch(url)

        if (response.ok) {
            const data = await response.json()
            setBins(data.bins)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Create a Shoe</h1>
                    <form onSubmit={handleSubmit} id="create-shoes-form">
                        <div className="form-floating mb-3">
                            <input onChange={handleManufacturerChange} value={manufacturer} placeholder="Manufacturer" required type="text" name="manufacturer" id="manufacturer" className="form-control" />
                            <label htmlFor="manufacturer">Manufacturer</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input onChange={handleNameChange} value={name} placeholder="Name" required type="text" name="name" id="name" className="form-control" />
                            <label htmlFor="name">Name</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input onChange={handleColorChange} value={color} placeholder="Color" required type="text" name="color" id="color" className="form-control" />
                            <label htmlFor="ends">Color</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input onChange={handlePictureUrlChange} value={picture_url} placeholder="PictureUrl" required type="url" name="picture_url" id="picture_url" className="form-control" />
                            <label htmlFor="picture_url">Picture Url</label>
                            <select onChange={hanldeBinChange} value={bin} required name="bin" id="bin" className="form-select">
                                <option value="">Choose a Bin</option>
                                {bins.map(bin => {
                                    return (
                                        <option key={bin.href} value={bin.href}>{bin.href}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
    )

}

export default ShoesForm
