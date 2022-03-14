import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ChartRowC(props) {

    let contenidoUrl = "http://localhost:3001/api/apiProducts/" + props.id;
    console.log(props)
    return (
        <tr>
            <td>{props.products_categories.name}</td>
            <td>{props.products_categories.name}
            </td>
        </tr>
    )
}



export default ChartRowC;