import React  from 'react';

import './App.css';
import { Sample } from './components/Sample';

const App =() => {
  return (
    <div className="App">
     <Sample name='Ribin' age={24}  email="r@gmail.com "/>
    </div>
  );
}

export default App;
