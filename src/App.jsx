import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import NavBar from "./NavBar";
import About from './About';
import Contact from './Contact';
import Home from "./Home";
import Service from './Service';
import Login from './Login';
import Signup from './Signup';
import Dashboard from './Dashboard';
import Forgetpassword from './Forgetpassword'

const App = () =>{
    return (
        <>
        <BrowserRouter>
        <NavBar/>   
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/About" component={About} />
            <Route exact path="/Service" component={Service} />
            <Route exact path="/Contact" component={Contact} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/Signup" component={Signup} />
            <Route exact path="/Forgetpassword" component={Forgetpassword} />
            <Route exact path="/Dashboard" component={Dashboard}/>
            <Redirect to="/" />
            </Switch>
            </BrowserRouter>
        </>
    );
};
export default App;