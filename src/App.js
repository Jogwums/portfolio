import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
 

//pages
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import DataPage from './pages/DataPortfolio';
import DesignPage from './pages/DesignPortfolio';
import ErrorPage from './pages/ErrorPage';
import Da from './pages/Da';
import Py from './pages/Py';
import Looker from './pages/looker';
import Certs from './pages/certifications';

// import FormComponent from './components/Signup Form'

// styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/data">
          <DataPage />
        </Route>
        <Route path="/design">
          <DesignPage />
        </Route>
        <Route path="/pbi">
          <Da />
        </Route>
        <Route path="/python">
          <Py />
        </Route>
        <Route path="/looker">
          <Looker />
        </Route>
        <Route path="/certs">
          <Certs />
        </Route>
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
