import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useHistory, useParams, useLocation, Redirect } from 'react-router-dom';

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
        <ul className='nav nav-pills nav-fill bg-dark text-white'>
            <li className='nav-item nav-home'>
                <Link className='nav-link active' to="/">Welcome</Link>
            </li>

            <li className='nav-item'>
                <Link className='nav-link' to="/home">Home</Link>  
            </li>

            <li className='nav-item'>
                <Link className='nav-link' to="/person">Person</Link>  
            </li>

            <li className='nav-item'>
                <Link className='nav-link' to="/about">About</Link>    
            </li>
        </ul>

    );
}

export default DemoRouter;