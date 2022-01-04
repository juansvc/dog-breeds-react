import React from 'react'

import Header from './containers/Header'
import MainSection from './containers/MainSection'

import './App.css';

function App() {

  return (
    <div className='App'>
      <div>
        <Header />
        <div className='flex relative'>
          <MainSection />
        </div>
      </div>
    </div>
  );
}

export default App;