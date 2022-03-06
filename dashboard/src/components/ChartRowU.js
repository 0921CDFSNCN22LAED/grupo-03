

function ChartRowU(props){




    let contenidoUrl = "http://localhost:3001/api/apiUsers/"+props.id;



    
    return (
                <tr>
                    <td>{props.id}</td>
                    <td>{props.firstName}</td>
                    <td>{props.lastName}</td>
		    <td>{props.email}</td>
                    <td>
                        <a href={contenidoUrl}>{contenidoUrl}</a>
                    </td>
                </tr>
            )
    }
    
        

export default ChartRowU;