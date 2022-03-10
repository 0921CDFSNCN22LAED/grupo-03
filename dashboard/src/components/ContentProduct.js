import React, {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom'

const ContentProduct = () => {
    
 let {id} = useParams();
 let url = 'http://localhost:3001/api/apiProducts/'+id;
 let imageURL = url+'/image';

 const [listProd, setListProd] = useState(null);

    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then((data) =>{
            
            setListProd(data.data)
            
            } )
        
    },[])


    let contenido ; 
    if(listProd == null){
        return contenido = null;
        
    }
    else{
        return contenido = listProd
        
          
    }

 

    return (
            
            <div className="card shadow mb-4">
                <div className="card-body">
	  	 <h1>El Producto solicitado</h1>
            		
                <p><b>La url es: </b> <a href={url}> {url} </a> </p>
                <p><b>Nombre del producto: </b> {contenido.name} </p>
                <p><b>Descripcion: </b> {contenido.description} </p>
                <p><b>Tamaño: </b> {contenido.size} </p>
                <p><b>Precio: </b> {contenido.price} </p>
                <p><b>Descuento: </b> {contenido.disc} </p>
                <p><b>Categoria: </b>  {contenido.idCategory} </p>
                <p><b>Tipo: </b>  {contenido.idType}</p>
                <p><b>la url de la imagen es: </b> <a href={imageURL} > {imageURL}  </a> </p>
            	 
		</div>
	</div>
           )
    }
export default ContentProduct