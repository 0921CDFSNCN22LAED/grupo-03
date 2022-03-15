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
        const img = "http://localhost:3001" + lastProd.image
        return contenido =
            <div>
               
                    <div className="d-sm-flex aligns-items-center justify-content-between mb-4">
                        <h2 className="h3 mb-0 text-blue-800">Nuestros último producto creado</h2>
                    </div>
                
                <p><b>Nombre del producto: </b> {lastProd.name} </p>
                <div className="img-prod">
                    <img src={img} />
                </div> 
                <p><b>Descripcion: </b> {lastProd.description} </p>
                <p><b>Id: </b> {lastProd.id} </p>
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