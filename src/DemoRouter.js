import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useHistory, useParams, useLocation, Redirect } from 'react-router-dom';
import CrudDemo, { PersonDetails } from './CrudDemo';

const DemoRouter = () => {
    return (
        <div className='container'>
            <Router>
                <Header/>
            <Switch>
            <Route exact path="/" component={Welcome}/>;
            <Route path="/home" component={Home}/>;
            <Route path="/person" component={Person}/>;
            <Route path="/about" component={About}/>;
            <Route path="/crud" component={CrudDemo}/>;
            <Route path="/details/:id" component={PersonDetails} />



            <Route component={NotFound}/>
            </Switch>
            </Router>
        </div>
    );
};
const Welcome = ()=> {
    return (
        <div className='container'>
            <h4>Welcome Component!</h4>
        </div>

    );
}
const About = ()=> {
    return (
        <div className='container'>
            <h4>About Component!</h4>
        </div>

    );
}
const Home = ()=> {
    return (
        <div className='container'>
            <h4>Home Component!</h4>
        </div>

    );
}
const Person = ()=> {
    return (
        <div className='container'>
            <h4>Person Component!</h4>
        </div>

    );
}
const NotFound = ()=> {
    return (
        <div className='container'>
            <h4>NotFound Component!</h4>
        </div>

    );
}
const Header = ()=> {

    return (
        <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
            <div className="container-fluid">
            <Link  className="navbar-brand" to="/">React</Link>

        <ul className='navbar-nav me-auto'>
            <li className='nav-item'>
                <Link className='nav-link' to="/home">Home</Link>  
            </li>

            <li className='nav-item'>
                <Link className='nav-link' to="/person">Person</Link>  
            </li>

            <li className='nav-item'>
                <Link className='nav-link' to="/about">About us</Link>    
            </li>
            <li className='nav-item'>
                <Link className='nav-link' to="/crud">Crud</Link>    
            </li>
            <form className="d-flex">
              //<Link className="btn btn-primary" to="/person">Sign Up</Link>
            //</form>
    
        </ul>
        </div>
        </nav>

    );
}

export default DemoRouter;