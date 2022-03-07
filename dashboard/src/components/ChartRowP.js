
import React, { useState } from 'react';




function ChartRow(props){

    let contenidoUrl = "http://localhost:3001/api/apiProducts/"+props.id;



    
    return (
                <tr>
                    <td>{props.id}</td>
                    <td>{props.name}</td>
                    <td>{props.description}</td>
{/*                     
                    <td>  {
                                    props.products_categories_prod.map( (p) => {
                                        return p.name
                                    })
                          }
                    </td> */}
                    <td>
                        <a href={contenidoUrl}>{contenidoUrl}</a>
                    </td>
                </tr>
            )
    }
    
        

export default ChartRow;