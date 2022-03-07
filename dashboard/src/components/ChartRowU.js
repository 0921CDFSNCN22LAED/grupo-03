import {Link} from 'react-router-dom';

function ChartRowU(props){




    let contenidoUrl = "http://localhost:3001/api/apiUsers/"+props.id;

    let dir='/usuario/'+parseInt(props.id);
    console.log(dir);
    
    return (
                <tr>
                    <td>{props.id}</td>
                    <td>{props.firstName}</td>
                    <td>{props.lastName}</td>
		    <td>{props.email}</td>
                    <td>
                        <Link to={'/usuario/'+props.id}>
				{contenidoUrl}
			</Link>
                    </td>
                </tr>
            )
    }
    
        

export default ChartRowU;