import axios from 'axios'
import Header from './header/Header'
import LandingPage from './landing-page/LandingPage'
import React, { useState, useEffect } from 'react'

function App() {

  useEffect(() => {
    fetchValues()
  });

  const fetchValues = async () => {
    const { data: { msg } } = await axios.get('/api')
    console.log(msg)
  }

  return (
    <div className="">
      <Header></Header>
      <LandingPage> </LandingPage>
    </div>
  );
}

export default App;
