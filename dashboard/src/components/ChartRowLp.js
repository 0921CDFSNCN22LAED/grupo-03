
import React, { useState } from 'react';
import {Link} from 'react-router-dom';

function ChartRowLp(props){

    let contenidoUrl = "http://localhost:3001/api/apiProducts/"+props.id;

    

    return (
                <tr>
                    <td>{props.id}</td>
                    <td>{props.name}</td>
                    <td>{props.description}</td>
                    <td>
                        <Link to={'/product/'+props.id}>
				{contenidoUrl}
			</Link>
                    </td>
                </tr>
            )
    }
    
        

export default ChartRowLp;