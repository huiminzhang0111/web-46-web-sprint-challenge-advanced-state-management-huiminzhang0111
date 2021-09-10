import React, { Component, useEffect } from "react";
import { connect } from 'react-redux';
import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';

import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
// import { fetchStart, fetchSuccess } from "./actions/index";
import { fetchSmurfs } from "./actions/index";

function App(props) {
  useEffect(()=>{
    props.fetchSmurfs()})
  //   props.fetchStart()
  //   axios.get('http://localhost:3333/smurfs')
  //     .then(res=>{
  //       props.fetchSuccess(res.data)
  //     }).catch(err=>{console.log(err)})
  // },[])

    return (
      <div className="App">
        <Header />

        <main>
          <SmurfList/>
          <AddForm/>
        </main>
      </div>
    );
  }

export default connect(null, {fetchSmurfs})(App);

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component first loads.