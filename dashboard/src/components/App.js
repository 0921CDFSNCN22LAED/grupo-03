import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import SideBar from './SideBar';
import ContentWrapper from './ContentWrapper';
import ContentWrapperP from './ContentWrapperP';
import ContentWrapperU from './ContentWrapperU';
import ContentWrapperLC from './ContentWrapperLC';
import NotFound from './NotFound';
import ContentWrapperOP from './ContentWrapperOP';
import ContentWrapperOU from './ContentWrapperOU';
import ContentWrapperC from './ContentWrapperC';
import ContentWrapperT from './ContentWrapperT';

function App() {
  return (
	  <Router >
      	<div id="wrapper">
          
          <Switch>
    <Route path="/product/:id" >
	    <SideBar />
	    <ContentWrapperOP />
	  </Route>

	 <Route path="/user/:id" >
		 <SideBar />
		 <ContentWrapperOU />
	  </Route>

    <Route path="/" exact>
	    <SideBar />
	    <ContentWrapper />
	  </Route>

	 <Route path="/user/">
	    <SideBar />
	  <ContentWrapperU/>
	 </Route>

	 <Route path="/product/">
	    <SideBar />
	    <ContentWrapperP/>
	 </Route>

	 <Route path="/lastProduct/">
	    <SideBar />
	    <ContentWrapperLC/>
	 </Route>

	  <Route path="/totals">
			  <SideBar />
			 <ContentWrapperT />
	  </Route>

	 <Route path="/category">
		 <SideBar />
		  <ContentWrapperC />
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
