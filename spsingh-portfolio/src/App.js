import React from 'react';
import 'antd/dist/antd.css';
import './App.scss';
import HeaderComponent from './components/HeaderComponent';
import HomeComponent from './components/HomeComponent';

function App() {
  return (
    <div className="app">
      <HeaderComponent />
      <HomeComponent />
    </div>
  );
}

export default App;
