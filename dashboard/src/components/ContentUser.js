import React, { useState } from 'react';


function ContenUser(props)  {

 const [listUser,setListUser] = useState([]);
    
    if(listUser.length == 0){

        fetch(prop)
        .then(response => response.json())
        .then(function (data){
            setListUser([ 
                ...data.data,
                
           ]);
	console.log(listUser);
        })
    
    }
    
    let imagenUrl = props+"/avatar";


    return (
            
            <div className="card shadow mb-4">
                <div className="card-body">
	  	 <h1>El usuario solicitado</h1>
            		<article>
	       		<h2>la url es: </h2>+ prop
	       		<h2>id: </h2>+ listUser.id
               		<h2>Nombre: </h2>+ listUser.firstName
               		<h2>Apellido: </h2>+ listUser.lastName
               		<h2>Email: </h2>+ listUser.email
               		<h2>Telefono: </h2>+ listUser.phone
               		<h2>Direccion: </h2>+ listUser.adress
               		<h2>Localidad: </h2>+ listUser.location
               		<h2>Pais: </h2>+ listUser.state
	       		<h2>Avatar: </h2>+ imaageURL
			<h2>Categoria: </h2>+

            		</article>
		</div>
	</div>
           )
    }
    
        

export default ContentUser;