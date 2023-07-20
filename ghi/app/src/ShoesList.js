function ShoesList({ shoes }) {
    return (
        <table className="table table-dark table-hover">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Bin</th>
                    <th>Manufacturer</th>
                    <th>Color</th>
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
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default ShoesList
