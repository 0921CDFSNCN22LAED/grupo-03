import ChartRowLp from './ChartRowLp';
import React, { useState , useEffect} from 'react';


function ContentLastProductCreate()  {

    const [lastProd,setLastProd] = useState(null);


    useEffect(() => {
        fetch("http://localhost:3001/api/apiProducts/findLastId")
        .then(response => response.json())
        .then((data) =>{
            console.log(data)
            setLastProd(data.data)
            
            } )
        
      },[])

    
    let contenido ; 
    if(lastProd == null){
        return contenido = <p>cargando</p>;
    }
    else{
        return contenido =
            <div>

                <p><b>Id: </b> {lastProd.id} </p>
                <p><b>Nombre del producto: </b> {lastProd.name} </p>
                <p><b>Descripcion: </b> {lastProd.description} </p>
                <p><b>ID_Category: </b> {lastProd.idCategory} </p>
                <p><b>ID_Tipe </b> {lastProd.idType} </p>
                <p><b>Descuento: </b> {lastProd.disc} </p>
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