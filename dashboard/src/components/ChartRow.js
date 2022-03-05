
import React, { useState } from 'react';




function ChartRow(props){

    // const [listCategory,setListCategory] = useState([]);

    
    //  fetch("http://localhost:3001/api/apiProducts/allCategory")
    //     .then(response => response.json())
    //     .then(function (data){

    //         console.log(data)

    //         setListCategory([ 
    //             ...data
                
    //         ]);

    //     })

    //     console.log(listCategory);
    


    let contenidoUrl = "http://localhost:3001/api/apiProducts/"+props.id;



    
    return (
                <tr>
                    <td>{props.id}</td>
                    <td>{props.name}</td>
                    <td>{props.description}</td>
                    <td>
                        
                        {/* <ul>
                            {listCategory.map( (category,i) => 
                                    
                                <li key={category.id}>{category.name}</li>
                                
                            )}
                        </ul> */}
                        
                    </td>
                    <td>
                        <a href={contenidoUrl}>{contenidoUrl}</a>
                    </td>
                </tr>
            )
    }
    
        

export default ChartRow;