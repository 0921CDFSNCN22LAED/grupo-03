import React from 'react';
import SideBar from './SideBar';
import ContentWrapper from './ContentWrapper';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
function App() {
  return (
    <React.Fragment>
      	<div id="wrapper">
       	<Switch>
	 <Route path="/user/:id">
	    <SideBar />
	    <ContentUser/>
	 </Route>
	 <Route path="/product/:id">
	    <SideBar />
	    <ContentUser/>
	 </Route>

	 <Route path="/" exact>
	    <SideBar />
	    <ContentWrapper />
	 </Route>



	 <Route path="/" exact>
	    <SideBar />
	    <ContentWrapper />
	 </Route>

	</Switch>
        </div>
    </React.Fragment>
  );
}

export default App;
