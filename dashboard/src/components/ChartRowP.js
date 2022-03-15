
import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './EstilosdeProduct-User.css'

    function ChartRowP(props){
        let contenidoUrl = "http://localhost:3001/api/apiProducts/"+props.id;
        const img = "http://localhost:3001" + props.image

        return (
                    <tr>              
                        <td>{props.id}</td>
                        <td>
                            <div>   
                            <Link to={'/product/' + props.id}>
                               <div className="">
                                <img  className="ImgTablaAllProducts zoom" src={img} />
                                </div>
                            </Link>
                            </div> 
                        </td>
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
        
            

    export default ChartRowP;