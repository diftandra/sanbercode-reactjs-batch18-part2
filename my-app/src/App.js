import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Form Pembelian Buah</h1>
      <table className="tblAtt" cellspacing="5px">
        <tr>
          <td><b>Nama Pelanggan</b></td>
          <td><input></input></td>
        </tr>
        <tr>
          <td></td>
          <td><input type="checkbox"/>Semangka </td>
        </tr>
        <tr>
          <td></td>
          <td><input type="checkbox"/>Jeruk</td>
        </tr>
        <tr>
          <td></td>
          <td><input type="checkbox"/>Nanas</td>
        </tr>
        <tr>
          <td></td>
          <td><input type="checkbox"/>Salak</td>
        </tr>
        <tr>
          <td><b>Daftar Item</b></td>
          <td><input type="checkbox"/>Anggur</td>
        </tr>
        <tr>
          <input className="btn" type="submit" value="Kirim"/>
        </tr>
      </table>
    </div>
  );
}

export default App;
