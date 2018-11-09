import React, {Component} from 'react';
import  { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './login';
import Home from './admin';
import Requesitor from './requesitor';
import Storeman from './storeman';


class App extends Component {
  render() {
    return(
      <BrowserRouter>
      <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/admin" component={Home} />
      <Route path="/requesitor" component={Requesitor} />
      <Route path="/storeman" component={Storeman} />
      </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
