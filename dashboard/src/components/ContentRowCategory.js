import ChartRowC from './ChartRowC';
import React, { useState } from 'react';


function ContentRowCategory() {

    const [listProd, setListProd] = useState([]);


    if (listProd.length == 0) {

        fetch("http://localhost:3001/api/apiProducts/productTotalCategory")
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
        <div>
            <div className="d-sm-flex aligns-items-center justify-content-between mb-4">
                <h2 className="h3 mb-0 text-blue-800">Nuestros Catedorias de productos</h2>
            </div>
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Categoria</th>
                                <th>Cant. total del producto</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>Categoria</th>
                                <th>Cant. total del producto</th>
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
        </div>

    );

}

export default ContentRowCategory;