import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import SideBar from './SideBar';
import ContentWrapper from './ContentWrapper';
import ContentRowUsers from './ContentRowUsers';
import ContentRowProducts from './ContentRowProducts';
import ContentLastProductCreate from './ContentLastProductCreate';
import NotFound from './NotFound';
import ContentProduct from './ContentProduct';
import ContentUser from './ContentUser';
import ContentTotals from './ContentTotals';
import ContentRowCategory from './ContentRowCategory';



function App() {
  return (
	  <Router >
      	<div id="wrapper">
          
          <Switch>
    <Route path="/product/:id" >
	    <SideBar />
	    <ContentProduct />

	  </Route>
	 <Route path="/user/:id" >
		 <SideBar />
		  <ContentUser />

	  </Route>



    <Route path="/" exact>
	    <SideBar />
	    <ContentWrapper />
	  </Route>

	 <Route path="/user/">
	    <SideBar />
	    <ContentRowUsers/>
	 </Route>

	 <Route path="/product/">
	    <SideBar />
	    <ContentRowProducts/>
	 </Route>

	 <Route path="/lastProduct/">
	    <SideBar />
	    <ContentLastProductCreate/>
	 </Route>
	  <Route path="/totals">
			  <SideBar />
			  <ContentTotals />
	  </Route>
	 <Route path="/category">
		 <SideBar />
		  <ContentRowCategory />
	  </Route>


   <Route>
        <SideBar />
        <NotFound/>
  </Route>

      </Switch>

        </div>
	  </Router>
  );
}
export default App;
