import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

//Views
import Home from './views/Home';
import Header from './components/Header';
import SingleHero from './views/SingleHero'
import NotFound from './views/NotFound';

//Styles
import "./styles/App.css"
import "./styles/responsive.css"

function App() {
  return (
    <Router>
        <Switch>
            <Route exact path="/">
                <Header />
                <Home />
            </Route>
            <Route exact path="/hero/:id">
                <Header />
                <SingleHero />
            </Route>
            <Route path="*">
                <Header />
                <NotFound />
            </Route>
        </Switch>
    </Router>
  );
}

export default App;
