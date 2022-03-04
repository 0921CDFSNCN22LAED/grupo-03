import React from 'react';
import ChartRow from './ChartRow';

let tableRowsData = [
    {
        Title: 'Billy usuario 2 ',
        Length: '123',
        Rating: '5',
        Categories: ['algo'],
        Awards: 2
    },
    {
        Title: 'nombre usiario 1',
        Length: 'apellido usiario 1',
        Rating: 'mail usiario 1',
        Categories: ['otro', 'algo', 'mas'],
        Awards: 'direccion'
    },
    
]

function ContentRowUsers(){
    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>nombre</th>
                                <th>apellido</th>
                                <th>mail</th>
                                <th>otra cosa</th>
                                <th>direccion</th>
                            </tr>
                        </thead>

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

export default ContentRowUsers;