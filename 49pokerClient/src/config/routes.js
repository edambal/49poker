import React from 'react';
import {Link,Switch,Route} from 'react-router-dom';
import Home from '../pages/Home'
import RoomShow from '../components/RoomShow';
import Protables from '../components/Protables';
import Tournaments from '../components/Tournament';
import Table from '../components/Table';
import Profile from '../pages/Profile';
import Admin from '../pages/Admin';

export default (
  <Switch>
  
    <Route exact path="/" component={Home}/>
    <Route exact path="/rooms" component={RoomShow}/>
    <Route exact path="/protables" component={Protables}/>
    <Route exact path="/tables" component={Table}/>
    <Route exact path="/tournaments" component={Tournaments}/>
    <Route exact path="/profile" component={Profile}/>
    <Route exact path="/admin" component={Admin}/>


  
  </Switch>
)
  
