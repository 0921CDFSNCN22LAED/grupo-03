import ChartRowC from './ChartRowC';
import React, { useState } from 'react';


function ContentRowCategory() {

    const [listProd, setListProd] = useState([]);


    if (listProd.length == 0) {

        fetch("http://localhost:3001/api/apiProducts/productCategory")
            .then(response => response.json())
            .then(function (data) {


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
                                <th>Categoria</th>
                                <th>Nombre del producto</th>
                                <th>Descripcion</th>
                                <th>Tipo</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>id</th>
                                <th>Categoria</th>
                                <th>Nombre del producto</th>
                                <th>Descripcion</th>
                                <th>Tipo</th>
                            </tr>
                        </tfoot>
                        <tbody>

                            {
                                listProd.map((row, i) => {
                                    return <ChartRowC {...row} key={i} />
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>


    );

}

export default ContentRowCategory;