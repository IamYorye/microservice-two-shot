function HatsList({ hats }) {
    const deleteItem = async (id) => {
        const hatUrl = `http://localhost:8090/api/hats/${id}`
        const fetchConfig = {
            method: "delete",
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await fetch(hatUrl, fetchConfig)
        if (response.ok) {
            window.location.reload()
        }
    }
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Style Name</th>
                    <th scope="col">Fabric</th>
                    <th scope="col">Color</th>
                    <th scope="col">Picture</th>
                    <th scope="col">Location</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                {hats && hats.map(hat => {
                    return (
                        <tr key={hat.id}>
                            <td>{hat.style_name}</td>
                            <td>{hat.fabric}</td>
                            <td>{hat.color}</td>
                            <td>
                                <img src={hat.picture_url} className="img-thumbnail" width={300} height={250}
                                    alt="hat" />
                            </td>
                            <td>{hat.location}</td>
                            <td>
                                <button onClick={() => deleteItem(hat.id)}>Delete</button>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    )
}
export default HatsList;
