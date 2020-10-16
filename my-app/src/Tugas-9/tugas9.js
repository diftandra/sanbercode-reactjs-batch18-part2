import React from 'react';
import "../App.css";

export default class Form extends React.Component {
    render(){
        return(<div class ="container">
        <h1>Form Pembelian Buah</h1>
        <div class = "box">
        <div class = "content">
          <div class = "contenthead">Nama Pelanggan</div>
          <div class = "contentbody"><input type="text" name="Nama" size = "25" ></input></div>
        </div>
        <div class = "content">
          <div class = "contenthead">Daftar Item</div>
          <div class = "contentbody"> 
                <p><input type='checkbox' name='item' value='semangka' />Semangka</p>
                <p><input type='checkbox' name='item' value='jeruk' />Jeruk</p>
                <p><input type='checkbox' name='item' value='nanas' />Nanas</p>
                <p><input type='checkbox' name='item' value='salak' />Salak</p>
                <p><input type='checkbox' name='item' value='anggur' />Anggur</p>
          </div>
        </div>
          <button style={{background: "white", borderRadius : 20}}>
            <a href="#" style={{textDecoration : "none", color: "black"}}>Kirim</a>
          </button>
          </div>
      </div>)
    }
}