import ChartRowP from './ChartRowP';
import React, { useState } from 'react';


function ContentRowProducts()  {

    const [listProd,setListProd] = useState([]);

    
    if(listProd.length == 0){

        fetch("http://localhost:3001/api/apiProducts/productCategory")
        .then(response => response.json())
        .then(function (data){
            

            setListProd([ 
                ...data.data,
                
            ]);

           

        })
    
    }

    console.log("La lista es:");
    console.log(listProd);
    
     


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
                            <tfoot>
                                <tr>
                                    <th>id</th>
                                    <th>Nombre del producto</th>
                                    <th>Descripcion</th>
                                    <th>Categoria</th>
                                    <th>Tipo</th>
                                    <th>URL</th>
                                </tr>
                            </tfoot>
                            <tbody>

                                {
                                    listProd.map( ( row , i) => {
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

export default ContentRowProducts;