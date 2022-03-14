import ChartRowU from './ChartRowU';
import React, { useState } from 'react';
import {Link} from 'react-router-dom';

function ContentRowUsers()  {

    const [listUsers,setListUsers] = useState([]);

    
    if(listUsers.length == 0){

        fetch("http://localhost:3001/api/apiUsers")
        .then(response => response.json())
        .then(function (data){
            setListUsers([ 
                ...data.data,
                
           ]);
	console.log(listUsers);
        })
    
    }
    
     


    return (
        <div>
            <div className="d-sm-flex aligns-items-center justify-content-between mb-4">
                <h2 className="h3 mb-0 text-blue-800">Nuestros usuarios</h2>
            </div>
            <div className="card shadow mb-4">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Nombre del Usuario</th>
                                    <th>Apellido del Usuario</th>
                                    <th>Email</th>
                                    <th>URL</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>Id</th>
                                    <th>Nombre del Usuario</th>
                                    <th>Apellido del Usuario</th>
                                    <th>Email</th>
                                    <th>URL</th>
                                </tr>
                            </tfoot>
                            <tbody>

                                {
                                    listUsers.map( ( row , i) => {
                                        return <ChartRowU { ...row} key={i}/>
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

export default ContentRowUsers;