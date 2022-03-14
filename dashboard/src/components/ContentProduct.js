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
        return contenido = <div>
    <div className="d-sm-flex aligns-items-center justify-content-between mb-4">
        <h2 className="h3 mb-0 text-blue-800">El producto consultado</h2>
     </div>                
    <p><b>La url es: </b>  </p>
    <p><b>Nombre del producto: </b>  </p>
    <p><b>Descripcion: </b>  </p>
    <p><b>Tamaño: </b>  </p>
    <p><b>Precio: </b>  </p>
    <p><b>Descuento: </b>  </p>
    <p><b>Categoria: </b>   </p>
    <p><b>Tipo: </b> </p>
    <p><b>la url de la imagen es: </b> </p>
     
</div>
        
    }
    else{
        return contenido = <div>
            <div className="d-sm-flex aligns-items-center justify-content-between mb-4">
                <h2 className="h3 mb-0 text-blue-800">El producto consultado</h2>
            </div>  
        <p><b>La url es: </b> <a href={url}> {url} </a> </p>
        <p><b>Nombre del producto: </b> {listProd.name} </p>
        <p><b>Descripcion: </b> {listProd.description} </p>
        <p><b>Tamaño: </b> {listProd.size} </p>
        <p><b>Precio: </b> {listProd.price} </p>
        <p><b>Descuento: </b> {listProd.disc} </p>
        <p><b>Categoria: </b>  {listProd.idCategory} </p>
        <p><b>Tipo: </b>  {listProd.idType}</p>
        <p><b>la url de la imagen es: </b> <a href={imageURL} > {imageURL}  </a> </p>
         
    </div>
        
          
    }

 

    return (
            
            <div className="card shadow mb-4">
                <div className="card-body">
	  	 <h1>El Producto solicitado</h1>
            		
                {contenido}
            	 
		</div>
	</div>
           )
    }
export default ContentProduct