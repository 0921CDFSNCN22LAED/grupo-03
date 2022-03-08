import React from 'react';
import SideBar from './SideBar';
import ContentWrapper from './ContentWrapper';
import ContentRowUsers from './ContentRowUsers';
import ContentRowProducts from './ContentRowProducts';
import NotFound from './NotFound';

import {Route,Routes, Switch} from 'react-router-dom';

function App() {
  return (
    <div>

      	<div id="wrapper">
          
          <Switch>
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
   <Route>
        <SideBar />
        <NotFound/>
  </Route>

      </Switch>

        </div>

    </div>
  );
}
export default App;
