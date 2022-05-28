import React from 'react';
import './Styles/App.css';
import {BrowserRouter} from 'react-router-dom';
import AppRouter from './Components/AppRouter';
import Header from './Components/UI/Header/Header';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <AppRouter/>
      </BrowserRouter>
    </div>
  );
}

export default App;
