
    import React, { useState } from 'react';
    import {Link} from 'react-router-dom';

    function ChartRowP(props){

        let contenidoUrl = "http://localhost:3001/api/apiProducts/"+props.id;

<<<<<<< HEAD
    

    return (
                <tr>
                    <td>{props.id}</td>
                    <td>{props.name}</td>
                    <td>{props.description}</td>
                    <td>{props.products_categories.name}</td> 
                    <td>{props.products_type.name}</td> 
                    <td>
                        <Link to={'/product/'+props.id}>
				{contenidoUrl}
			</Link>
                    </td>
                </tr>
            )
    }
    
=======
        return (
                    <tr>
                        <td>{props.id}</td>
                        <td>{props.name}</td>
                        <td>{props.description}</td>
                        <td>{props.products_categories.name}</td> 
                        <td>{props.products_type.name}</td> 
                        <td>
                            <Link to={'/product/'+props.id}>
                                {contenidoUrl}
                            </Link>
                        </td>
                    </tr>
                )
        }
>>>>>>> ed11d09579c9b9fdc7b20c8a8f9c7db48cff401a
        
            

    export default ChartRowP;