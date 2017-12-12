import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import HomePage from '../components/HomePage.js';
import PortfolioPage from '../components/PortfolioPage.js';
import ContactPage from '../components/ContactPage.js';
import Header from '../components/Header.js';
import NotFoundPage from '../components/NotFoundPage.js';


//switch statement used to handle 404, cannot have div inside.
const AppRouter= (
    <BrowserRouter>
    <div>
    <Header />
    <Switch>  
        <Route path="/" component={HomePage} exact={true}/>
        <Route path="/portfolio" component={PortfolioPage} /> 
        <Route path="/contact" component={ContactPage} />
        <Route component={NotFoundPage} /> 
    </Switch>
    </div>
    </BrowserRouter>
);

export default AppRouter;