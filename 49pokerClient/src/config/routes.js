import React from 'react';
import {Link,Switch,Route} from 'react-router-dom';
import Home from '../pages/Home'
import RoomShow from '../components/RoomShow';
import Protables from '../components/Protables';
import Tournaments from '../components/Tournament'

export default (
  <Switch>
  
    <Route exact path="/" component={Home}/>
    <Route exact path="/rooms" component={RoomShow}/>
    <Route exact path="/protables" component={Protables}/>
    <Route exact path="/tournaments" component={Tournaments}/>

  
  </Switch>
)
  
