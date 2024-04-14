export function Table({ table_data, setTableData }) {

    // ERROR: unable fetch data from api because of cors error
    // useEffect(() => {
    //   ddog.get_monitor_list()
    //     .then(data => setTableData(data))

    // }, [setTableData])

    return (
        <> {
            table_data.length ? (
                <table className='table'>
                    <thead>
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">Name</th>
                            <th scope="col">Query</th>
                            <th scope="col">Message</th>
                            <th scope="col">Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {table_data.map(({ name, id, message, query, type }, index) => {
                            return <tr key={id}>
                                <td>{index + 1}</td>
                                <td>{name}</td>
                                <td>{query}</td>
                                <td>{message}</td>
                                <td>{type}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            ) : (<></>)
        }
        </>
    )
}