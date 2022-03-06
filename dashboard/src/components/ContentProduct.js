import React, { useState } from 'react';


function ContenProduct(props)  {

 const [listProd,setListProd] = useState([]);
    
    if(listProd.length == 0){

        fetch(prop)
        .then(response => response.json())
        .then(function (data){
            setListProd([ 
                ...data.data,
                
           ]);
	
        })
    
    }
    
    let imageUrl = props+"/avatar";


    return (
            
            <div className="card shadow mb-4">
                <div className="card-body">
	  	 <h1>El Producto solicitado</h1>
            		<article>
	       		<h2>la url es: </h2>+ prop
	       		<h2>id: </h2>+ listUser.id
               		<h2>Nombre del producto: </h2>+ listProd.name
               		<h2>Descripcion: </h2>+ listProd.description
               		<h2>Tamaño: </h2>+ listProd.size
               		<h2>Precio: </h2>+ listProd.price
               		<h2>Descuento: </h2>+ listProd.disc
	       		<h2>Avatar: </h2>+ imageURL
			<h2>Categoria: </h2>
			<h2>Tipo: </h2>

            		</article>
		</div>
	</div>
           )
    }
    
        

export default ContentProduct;