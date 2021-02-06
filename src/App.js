import { Container, Grid} from '@material-ui/core';
import { BrowserRouter, Route, Link } from "react-router-dom";

import React from 'react'
import Profile from './componenets/Profile/Profile'
import Footer from './componenets/Footer/Footer'
import Header from './componenets/Header/Header'
import Portfolio from './Pages/Portfilio/Portfolio'
import Resume from './Pages/Resume/Resume'
import './App.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


function App() {
  return (
    <Container className={'top_60'}>
      <Grid container spacing={7}>
        <Grid  item xs={12} sm={12} md={4} lg={3} style={{backgroundColor: '#e0f7fa'}} className="profile">
          <Profile className="profile" />
        </Grid>
        <Grid item xs >
          <Router>
          <Header />
          <div className="main-content container_shadow">

            <Switch>
            <Route path='/portfolio'>
            <Portfolio />
            </Route> 
            <Route>
            <Resume path ='/' />
            </Route>

            </Switch>
          </div>
          </Router>
              
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
