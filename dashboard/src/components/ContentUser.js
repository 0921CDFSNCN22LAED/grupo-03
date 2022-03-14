import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

const ContentUser = () => {

    let {id} = useParams();
    let url = 'http://localhost:3001/api/apiUsers/'+id;
    let imagenUrl = 'http://localhost:3001/api/apiUsers/'+id+"/avatar";

    const [listUser, setListUser] = useState([]);


    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(function (data) {
                setListUser(data.data);
            })
    }, [])

    let contenido;
    if (listUser == null) {
        return contenido = <div>
            <div className="d-sm-flex aligns-items-center justify-content-between mb-4">
                <h2 className="h3 mb-0 text-blue-800">El usuario consultado</h2>
            </div>  
            <p><b>La url es: </b>   </p>
            <p><b>Nombre: </b>   </p>
            <p><b>Apellido: </b>   </p>
            <p><b>Email: </b>  </p>
            <p><b>Telefono: </b>   </p>
            <p><b>Direccion: </b>   </p>
            <p><b>Localidad: </b>   </p>
            <p><b>Pais: </b> </p>
            <p><b>La url de avatar es: </b>  </p> 

        </div>
    }
    else {
        return contenido = <div>
            <div className="d-sm-flex aligns-items-center justify-content-between mb-4">
                <h2 className="h3 mb-0 text-blue-800">El usuario consultado</h2>
            </div>  
            <p><b>La url es: </b> {url} </p>
            <p><b>Nombre: </b> {listUser.firstName} </p>
            <p><b>Apellido: </b> {listUser.lastName} </p>
            <p><b>Email: </b> {listUser.email} </p>
            <p><b>Telefono: </b> {listUser.phone} </p>
            <p><b>Direccion: </b> {listUser.adress} </p>
            <p><b>Localidad: </b> {listUser.location} </p>
            <p><b>Pais: </b> {listUser.state} </p>
            <p><b>La url de avatar es: </b> {imagenUrl} </p> 
        </div>
    }



    return (

        <div className="card shadow mb-4">
            <div className="card-body">
                <h1>El usuario solicitado es</h1>

                {contenido}

            </div>
        </div>
    )
}



export default ContentUser