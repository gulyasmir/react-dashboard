import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import Menulayout from './components/Menulayout.js';
import Page from './components/Page.js';

function App() {
  return (
    <div className="App">

        <Menulayout />
        <Page />

    </div>
  );
}

export default App;
