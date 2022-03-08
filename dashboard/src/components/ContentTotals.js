import React, { useState } from 'react';

function ContentTotals(){

let [totUsers,setTotUsers] = useState([]);
    
    if(totUsers.length == 0){

        fetch('http://localhost:3001/api/apiUsers/')
        .then(response => response.json())
        .then(function (data){
	console.log(data);
            setTotUsers([ 
                data.data,
                
           ]);
        })
   
    }
        
            
let [totProd,setTotProd] = useState([]);
    
    if(totProd.length == 0){

        fetch('http://localhost:3001/api/apiProducts/')
        .then(response => response.json())
        .then(function (data){
	console.log(data);
            setTotProd([ 
                data.data,
                
           ]);
        })
   
    }

return (
            <React.Fragment>
            <div className="card shadow mb-4">
                <div className="card-body">
	  	 <h1>Los totales son</h1>
            	  <p><b>Total de productos: </b> </p>
		  <p><b>Total de usuarios: </b>  </p>
		  <p><b>Total de catedorias de productos: </b>  </p>
		  <p><b>Total de catedorias de usuarios: </b>  </p>
	       	</div>
	    </div>
</React.Fragment>
)

}
export default ContentTotals;