import React from 'react';
import '../App.css'

let dataHargaBuah = [
    {nama: "Semangka", harga: 10000, berat: 1000},
    {nama: "Anggur", harga: 40000, berat: 500},
    {nama: "Strawberry", harga: 30000, berat: 400},
    {nama: "Jeruk", harga: 30000, berat: 1000},
    {nama: "Mangga", harga: 30000, berat: 500}
  ]

class PriceInfo extends React.Component {
    render() {
        return (
            <>
                {dataHargaBuah.map(el=> {
                    return (
                        <tr>
                            <td>{el.nama}</td>
                            <td>{el.harga}</td>
                            <td>{el.berat/1000} Kg</td>
                        </tr>
                    )
                })}
        </>
        )
    }
}

export default class Price extends React.Component{    
    render(){
        return (
            <div>
                <h1>Tabel Harga Buah</h1>
                <table align="center">
                    <tr>
                        <th style={{width : "300px"}}>Nama</th>
                        <th style={{width : "200px"}}>Harga</th>
                        <th style={{width : "190px"}}>Berat</th>
                    </tr>
                    <PriceInfo/>
                </table>
            </div>
        )
    }
}