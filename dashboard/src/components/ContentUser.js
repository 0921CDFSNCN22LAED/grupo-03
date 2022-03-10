import React, { useState } from 'react';
import { useParams } from 'react-router-dom'

const ContentUser = () => {

    let {id} = useParams();
    let url = 'http://localhost:3001/api/apiUsers/'+id;
    let imagenUrl = 'http://localhost:3001/api/apiUsers/'+id+"/avatar";

    const [listUser, setListUser] = useState([]);


    if (listUser.length == 0) {
        fetch(url)
            .then(response => response.json())
            .then(function (data) {
                setListUser([
                    data,
                ]);
            })
    }

    let us = Object.values(listUser)
    return (

        <div className="card shadow mb-4">
            <div className="card-body">
                <h1>El usuario solicitado es</h1>

                 <p><b>La url es: </b> {url} </p>
                <p><b>Nombre: </b> {us[0].firstName} </p>
                <p><b>Apellido: </b> {us[0].lastName} </p>
                <p><b>Email: </b> {us[0].email} </p>
                <p><b>Telefono: </b> {us[0].phone} </p>
                <p><b>Direccion: </b> {us[0].adress} </p>
                <p><b>Localidad: </b> {us[0].location} </p>
                <p><b>Pais: </b> {us[0].state} </p>
                <p><b>La url de avatar es: </b> {imagenUrl} </p> 


            </div>
        </div>
    )
}



export default ContentUser