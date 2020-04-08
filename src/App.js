import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Content from './components/Profile/Profile';

function App() {
  return (
    <div className="page-wrapper">
      <Header />
      <div className="container">
        <NavBar />
        <Content />
      </div>
    </div>
  );
}

export default App;
