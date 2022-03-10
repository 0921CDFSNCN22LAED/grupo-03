import ChartRowLp from './ChartRowLp';
import React, { useState , useEffect} from 'react';


function ContentLastProductCreate()  {

<<<<<<< HEAD
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
        <ChartRowLp key={lastProd.id} {...lastProd}/>   
    }
    
   
 
    return ( 
        <div className="card shadow mb-4">
        <div className="card-body">
            <div className="table-responsive">
                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Nombre del producto</th>
                            <th>Descripcion</th>
                            <th>Categoria</th>
                            <th>Tipo</th>
                            <th>URL</th>
                        
                        </tr>
                    </thead>
 
                      <tbody>
                            {contenido}

                    </tbody>     
                </table>
            </div>
=======
        const [lastProd,setLastProd] = useState([]);

        if(lastProd.length == 0){   
            fetch("http://localhost:3001/api/apiProducts/findLastId")
            .then(response => response.json())
            .then(function (data){
                setLastProd([ 
                    data,
                ]);  
                console.log(lastProd) 
            })
        }

return ( 
    <div className="card shadow mb-4">
    <div className="card-body">
        <div className="table-responsive">
            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Nombre del producto</th>
                        <th>Descripcion</th>
                        <th>Categoria</th>
                        <th>Tipo</th>
                        <th>URL</th>
                    </tr>
                </thead>
                <tbody>
                <ChartRowP key={lastProd[0].data.id} /> {lastProd[0]} <ChartRowP/>
                </tbody>
            </table>
>>>>>>> ed11d09579c9b9fdc7b20c8a8f9c7db48cff401a
        </div>
    </div>
        );
                

    
}

export default ContentLastProductCreate;