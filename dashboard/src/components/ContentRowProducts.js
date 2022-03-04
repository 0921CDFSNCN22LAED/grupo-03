import React from 'react';
import ChartRow from './ChartRow';

let tableRowsData = [
    {
        Title: 'prod 1 ',
        Length: 'rrr',
        Rating: '5',
        Categories: ['Drama','Comedia'],
        Awards: 2
    },
    {
        Title: 'prod 2',
        Length: 's',
        Rating: '4800',
        Categories: ['4'],
        Awards: 3
    },
    
]
function ContentRowProducts(){
    return (
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>producto</th>
                                <th>Detalle</th>
                                <th>Precio</th>
                                <th>descuento</th>
                                <th>tipo</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>producto</th>
                                <th>Detalle</th>
                                <th>Precio</th>
                                <th>descuento</th>
                                <th>tipo</th>
                            </tr>
                        </tfoot>
                        <tbody>
                            {
                            tableRowsData.map( ( row , i) => {
                                return <ChartRow { ...row} key={i}/>
                            })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default ContentRowProducts;