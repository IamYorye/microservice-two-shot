import React, { useEffect, useState } from 'react';

function ShoesForm(props) {

    const [bins, setBins] = useState([])

    const [formData, setFormData] = useState({
        manufacturer: "",
        name: "",
        color: "",
        picture_url: "",
        bin: "",
    })

    const fetchData = async () => {
        const binUrl = "http://localhost:8100/api/bins/"
        const response = await fetch(binUrl)
        if (response.ok) {
            const data = await response.json()
            setBins(data.bins)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault()

        const shoesUrl = "http://localhost:8080/api/shoes/"
        const fetchConfig = {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json"
            }

        }
        const response = await fetch(shoesUrl, fetchConfig)
        if (response.ok) {
            setFormData({
                manufacturer: "",
                name: "",
                color: "",
                picture_url: "",
                bin: "",
            })
        }
    }

    const handleFormChange = (event) => {
        const value = event.target.value
        const inputName = event.target.value

        setFormData({
            ...formData,
            [inputName]: value
        })
    }

    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Create a Shoe</h1>
                    <form onSubmit={handleSubmit} id="create-shoes-form">

                        <div className="form-floating mb-3">
                            <input onChange={handleFormChange} placeholder="Manufacturer" required type="text" name="manufacturer" id="manufacturer" className="form-control" />
                            <label htmlFor="manufacturer">Manufacturer</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input onChange={handleFormChange} placeholder="Name" required type="text" name="name" id="name" className="form-control" />
                            <label htmlFor="name">Name</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input onChange={handleFormChange} placeholder="Color" required type="text" name="color" id="color" className="form-control" />
                            <label htmlFor="ends">Color</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input onChange={handleFormChange} placeholder="PictureUrl" required type="url" name="picture_url" id="picture_url" className="form-control" />
                            <label htmlFor="picture_url">Picture Url</label>
                            <select onChange={handleFormChange} required name="bin" id="bin" className="form-select">
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
