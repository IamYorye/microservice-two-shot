import React, { useEffect, useState } from 'react';

function HatsForm(props) {
    const [style_name, setStyleName] = useState('');
    const [fabric, setFabric] = useState('');
    const [color, setColor] = useState('');
    const [location, setLocation] = useState('');
    const [picture_url, setPicture] = useState('');
    const [locations, setLocations] = useState([])


    const handleStyleNameChange = (event) => {
        const value = event.target.value;
        setStyleName(value);
    }
    const handleFabricChange = (event) => {
        const value = event.target.value;
        setFabric(value);
    }
    const handleColorChange = (event) => {
        const value = event.target.value;
        setColor(value);
    }
    const handleLocationChange = (event) => {
        const value = event.target.value;
        setLocation(value);
    }
    const handlePictureURLChange = (event) => {
        const value = event.target.value;
        setPicture(value);
    }
    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {};
        data.style_name = style_name;
        data.fabric = fabric;
        data.color = color;
        data.location = location;
        data.picture_url = picture_url;
        console.log(data);

        const HatUrl = 'http://localhost:8090/api/hats/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(HatUrl, fetchConfig);
        if (response.ok) {
            const newHat = await response.json();
            console.log(newHat);

            setStyleName('');
            setFabric('');
            setColor('');
            setLocation('');
            setPicture('');

            props.getHats();
        }
    }

    const fetchData = async () => {
        const url = 'http://localhost:8100/api/locations/';

        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            setLocations(data.locations);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Create a new hat</h1>
                    <form onSubmit={handleSubmit} id="create-hat-form">
                        <div className="form-floating mb-3">
                            <input onChange={handleStyleNameChange} placeholder="Style Name" required type="text" name="style_name" id="style_name" value={style_name} className="form-control" />
                            <label htmlFor="style_name">Style Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleFabricChange} placeholder="Fabric" required type="fabric" name="name" id="fabric" value={fabric} className="form-control" />
                            <label htmlFor="fabric">Fabric</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleColorChange} placeholder="Color" required type="color" name="name" id="color" value={color} className="form-control" />
                            <label htmlFor="color">Color</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handlePictureURLChange} placeholder="Picture URL" required type="picture_url" name="name" id="picture_url" value={picture_url} className="form-control" />
                            <label htmlFor="picture_url">Picture</label>
                        </div>
                        <div className="mb-3">
                            <select onChange={handleLocationChange} required name="location" id="location" value={location} className="form-select">
                                <option value="">Choose a location</option>
                                {locations.map(location => {
                                    return (
                                        <option key={location.href} value={location.href}>
                                            {location.href}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                        <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default HatsForm;
