import React from 'react';
import logo from './logo.svg';
import './App.css';
import tableDaftarBuah from './Tugas-9/tugas9';
import TableHargaDaftarBuah from './Tugas-10/tugas10';
import Clocker from './Tugas-11/tugas11';

function App() {
  return (  
    <div className="main">
      <tableDaftarBuah/>
      <br/>
      <TableHargaDaftarBuah />
      <br/>
      <Clocker/>
    </div>
   );
}

export default App;
