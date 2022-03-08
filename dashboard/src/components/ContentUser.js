import React, { useState } from 'react';
import { useParams } from 'react-router-dom'

function ContentUser()  {
 let {id} = useParams();
 let url = 'http://localhost:3001/api/apiUsers/'+id;
 let imagenUrl = url+"/avatar";


 const [listUser,setListUser] = useState([]);
    
    if(listUser.length == 0){

        fetch(url)
        .then(response => response.json())
        .then(function (data){
            setListUser([ 
                ...data.data,
                
           ]);
	console.log(listUser);
        })
    
    }
    
    return (
            
            <div className="card shadow mb-4">
                <div className="card-body">
	  	 <h1>El usuario solicitado</h1>
            		<article>
	       		<p><b>La url es: </b> {url} </p>
               		<p><b>Nombre: </b> {listUser.firstName} </p>
               		<p><b>Apellido: </b> {listUser.lastName} </p>
               		<p><b>Email: </b> {listUser.email} </p>
               		<p><b>Telefono: </b> {listUser.phone} </p>
               		<p><b>Direccion: </b> {listUser.adress} </p>
               		<p><b>Localidad: </b> {listUser.location} </p>
               		<p><b>Pais: </b> {listUser.state} </p>
	       		<p><b>La url de avatar es: </b> {imagenUrl} </p>

            		</article>
		</div>
	</div>
           )
    }
    
        

export default ContentUser;