import React, {useState} from 'react';
import { useParams } from 'react-router-dom'

const ContentProduct = () => {
    
 let {id} = useParams();
 let url = 'http://localhost:3001/api/apiProducts/'+id;
 let imageURL = url+'/image';
 

    const [listProd, setListProd] = useState([]);


    if (listProd.length == 0) {
        fetch(url)
            .then(response => response.json())
            .then(function (data) {


                setListProd([
                    data,

                ]);
            })
    }
        
    let prueba = Object.values(listProd);

  
    return (
            
            <div className="card shadow mb-4">
                <div className="card-body">
	  	 <h1>El Producto solicitado</h1>
            		
                <p><b>La url es: </b> <a href={url}> {url} </a> </p>
                <p><b>Nombre del producto: </b> {prueba[0].name} </p>
                <p><b>Descripcion: </b> {prueba[0].description} </p>
                <p><b>Tamaño: </b> {prueba[0].size} </p>
                <p><b>Precio: </b> {prueba[0].price} </p>
                <p><b>Descuento: </b> {prueba[0].disc} </p>
                <p><b>Categoria: </b>  {prueba[0].idCategory} </p>
                <p><b>Tipo: </b>  {prueba[0].idType}</p>
                <p><b>la url de la imagen es: </b> <a href={imageURL} > {imageURL}  </a> </p>
            	 
		</div>
	</div>
           )
    }
export default ContentProduct