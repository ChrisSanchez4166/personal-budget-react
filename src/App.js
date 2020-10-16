import React from 'react';
import './App.css';
import axios from 'axios';
import { Chart } from 'chart.js';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Menu from './Menu/Menu';
import Hero from './Hero/Hero';
import HomePage from './HomePage/HomePage';
import Footer from './Footer/Footer';
import AboutPage from './AboutPage/AboutPage';
import LoginPage from './LoginPage/LoginPage';


const api = axios.create({
  baseURL: 'http://localhost:4000/budget'
})

const dataSource = {
  datasets: [
      {
          data: [],
          backgroundColor: [
              '#ffcd56',
              '#ff6384',
              '#36a2eb',
              '#006400',
              '#7FFFD4',
              '#8A2BE2',
              '#DC143C',
              '#fd6b19'
          ],
      }
  ],
  labels: []
};


function App() {


    api.get('/').then(res =>{
      // console.log(res.data[3].budget)
      for (var i = 0; i < res.data.length; i++){
        // console.log(res.data.length)
        dataSource.datasets[0].data[i] = res.data[i].budget;
        dataSource.labels[i] = res.data[i].title;
        console.log(dataSource.datasets[0].data[i])
        createChart();
      }})


  return (
    <Router>
      <Menu/>
      <Hero/>
      <div className="mainContainer">
        <Switch>
          
          <Route path="/about">
            <AboutPage/>
          </Route>

          <Route path="/login">
            <LoginPage/>
          </Route>

          <Route path="/">
            <HomePage/>
          </Route>

        </Switch>
      </div>
      <Footer/>
    </Router>
  );
}


function createChart() {
  var ctx = document.getElementById('myChart');
  var myPieChart = new Chart(ctx, {
      type: 'pie',
      data: dataSource
  });
}

export default App;
