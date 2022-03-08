import React, {Component} from 'react';
import ContentRowProducts from './ContentRowProducts';
import ContentRowUsers from './ContentRowUsers';
import ContentTotals from './ContentTotals';

function ContentRowTop(){
    return(
        <React.Fragment>
			<div className="container-fluid">

			<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
			<h1 className="h3 mb-0 text-gray-800">Dashbord QMC</h1>
			</div>
			<ContentRowProducts />
			<ContentRowUsers />
			<ContentTotals />
			</div>
        </React.Fragment>
    )

}
export default ContentRowTop;