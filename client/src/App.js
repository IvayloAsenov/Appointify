import axios from 'axios'
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
    <div className="App">
      <LandingPage> </LandingPage>
    </div>
  );
}

export default App;
