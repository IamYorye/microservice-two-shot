import { NavLink, useParams, Link } from "react-router-dom"

function ShoesList({ shoes }) {
    const deleteShoe = async (id) => {
        const shoesUrl = `http://localhost:8080/api/shoes/${id}`
        const fetchConfig = {
            method: 'delete',
            headers: {
                'Content-Type': 'application/json',
            },
        }
        const response = await fetch(shoesUrl, fetchConfig)
        if (response.ok) {
            window.location.reload()
        }
    }


    return (
        <table className="table table-dark table-hover">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Bin</th>
                    <th>Manufacturer</th>
                    <th>Color</th>
                    <th>Picture</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {shoes && shoes.map(shoe => {
                    return (
                        <tr key={shoe.id}>
                            <td>{shoe.name}</td>
                            <td>{shoe.bin}</td>
                            <td>{shoe.manufacturer}</td>
                            <td>{shoe.color}</td>
                            <td>
                                <img src={shoe.picture_url} className="img-thumbnail" width={300} height={250} alt="shoe" />
                            </td>
                            <td>
                                <button onClick={(e) => deleteShoe(shoe.id)} className="btn btn-secondary">Delete</button>
                            </td>
                            <td>
                                <Link to={`edit/${shoe.id}`}>Edit Shoe</Link>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default ShoesList
