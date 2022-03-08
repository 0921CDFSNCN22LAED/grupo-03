import React, { useState } from 'react';
mport { useParams } from 'react-router-dom'

function ContenProduct(props)  {
 let {id} = useParams();
 let url = 'http://localhost:3001/api/apiProducts/'+id;
 let imageUrl = url+'/image';

 const [listProd,setListProd] = useState([]);
    
    if(listProd.length == 0){

        fetch(url)
        .then(response => response.json())
        .then(function (data){
            setListProd([ 
                ...data.data,
                
           ]);
	
        })
    
    }

    return (
            
            <div className="card shadow mb-4">
                <div className="card-body">
	  	 <h1>El Producto solicitado</h1>
            		
	       		<p><b>La url es: </b> {url} </p>
	       		<p><b>Nombre del producto: </b> {listProd.name} </p>
               		<p><b>Descripcion: </b> {listProd.description} </p>
               		<p><b>Tamaño: </b> {listProd.size} </p>
               		<p><b>Precio: </b> {listProd.price} </p>
               		<p><b>Descuento: </b> {listProd.disc} </p>
	       		<p><b>la url de la imagen es: </b> {imageURL} </p>
			<p><b>Categoria: </b> </p>
			<p><b>Tipo: </b> </p>
            	
		</div>
	</div>
           )
    }
    
        

export default ContentProduct;