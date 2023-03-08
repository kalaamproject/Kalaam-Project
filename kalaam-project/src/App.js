import React from 'react';
// import { News,About,Sponser,Contact,Donate } from './pages';
import { NavBar } from './layout';
import Background from './components/Background/Background'
import './App.css';
// import "./layout/NavBar";
// import Main from './layout/main/Main';


function App() {
  return (
    <div className='app'>
      <NavBar />
      <Background />
    </div>
  );
}

export default App;
