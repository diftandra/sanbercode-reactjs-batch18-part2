import React from "react";

class ValueTableHead extends React.Component {
  render() {
    const StyleHead = { background: "darkgray" };
    return <th style={StyleHead}>{this.props.text}</th>;
  }
}

class ValueTableBody extends React.Component {
  render() {
    const StyleBody = { background: "#ff7f50" };
    return this.props.satuan === undefined ? (
      <td style={StyleBody}>{this.props.data}</td>
    ) : (
      <td style={StyleBody}>
        {this.props.data} {this.props.satuan}
      </td>
    );
  }
}

class TableHargaDaftarBuah extends React.Component {
  render() {
    let dataHargaBuah = [
      { nama: "Semangka", harga: 10000, berat: 1000 },
      { nama: "Anggur", harga: 40000, berat: 500 },
      { nama: "Strawberry", harga: 30000, berat: 400 },
      { nama: "Jeruk", harga: 30000, berat: 1000 },
      { nama: "Mangga", harga: 30000, berat: 500 },
    ];
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Tabel Harga Buah</h1>
        <table
          style={{ margin: "0px", width: "700px", border: "1px solid #000" }}
        >
          <tr>
            <ValueTableHead text="Nama" />
            <ValueTableHead text="Harga" />
            <ValueTableHead text="Berat" />
          </tr>
          {dataHargaBuah.map((data) => {
            return (
              <tr>
                <ValueTableBody data={data.nama} />
                <ValueTableBody data={data.harga} />
                <ValueTableBody data={data.berat / 1000} satuan="kg" />
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}

export default TableHargaDaftarBuah;