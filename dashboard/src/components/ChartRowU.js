
import {Link} from 'react-router-dom';
import './EstilosdeProduct-User.css'

function ChartRowU(props){

    let contenidoUrl = "http://localhost:3001/api/apiUsers/"+props.id;
    const img = "http://localhost:3001" + props.avatarIMG
    return (

                <tr>
                    <td>{props.id}</td>
                      <td>
                         <div>
                           <Link to={'/user/' + props.id}>
                               <div >
                                  <img className="imgTablaAllUsers zoom" src={img} />
                              </div>
                          </Link>
                </div>
            </td>
                    <td>{props.firstName}</td>
                    <td>{props.lastName}</td>
		    <td>{props.email}</td>
                    <td>
                        <Link to={'/user/'+props.id}>
				{contenidoUrl}
			</Link>
                    </td>
                </tr>
            )
    }
    
        

export default ChartRowU;