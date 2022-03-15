
import React, { useState, useEffect } from 'react';


function ContentLastProductCreate() {

    const [lastUser, setLastUser] = useState(null);


    useEffect(() => {
        fetch("http://localhost:3001/api/apiUsers/findLastId")
            .then(response => response.json())
            .then((data) => {
                console.log(data)
                setLastUser(data.data)

            })

    }, [])


    let contenido;
    if (lastUser == null) {
        return contenido = <p>cargando</p>;
    }
    else {
        const img = "http://localhost:3001" + lastUser.avatarIMG
        return contenido =
            <div>

                <div className="d-sm-flex aligns-items-center justify-content-between mb-4">
                    <h2 className="h3 mb-0 text-blue-800">Nuestros último usuario creado</h2>
                </div>
                
                <p><b>Nombre: </b> {lastUser.firstName} </p>
                <p><b>Apellido: </b> {lastUser.lastName} </p>
                <div >
                    <img className="lastUserCreate zoom" src={img} />
                </div>
                <p><b>Id: </b> {lastUser.id} </p>
                <p><b>Email: </b> {lastUser.email} </p>
                <p><b>Telefono: </b> {lastUser.phone} </p>
                <p><b>Direccion: </b> {lastUser.adress} </p>
                <p><b>Localidad: </b> {lastUser.location} </p>
                <p><b>Pais: </b> {lastUser.state} </p>
            </div>

    }

    return (
        <div className="card shadow mb-4">
            <div className="card-body">
                <h1>El Utimo Producto solicitado</h1>

                {contenido}

            </div>
        </div>
    );



}

export default ContentLastProductCreate;