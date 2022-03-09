import ChartRowP from './ChartRowP';
import React, { useState } from 'react';


function ContentLastProductCreate()  {

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
        const [oneProd,setOneProd] = useState([]);
  
        if(lastProd.length > 0){   
            fetch("http://localhost:3001/api/apiProducts/"+ {lastProd})
            .then(response => response.json())
            .then(function (data){
                setOneProd([ 
                    data,
                ]);   
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
                    {
                        lastProd.map( ( row , i) => {
                            return <ChartRowP { ...row} key={i}/>
                        })
                    }
                </tbody>
            </table>
        </div>
    </div>
</div>
    );
            

    
}

export default ContentLastProductCreate;