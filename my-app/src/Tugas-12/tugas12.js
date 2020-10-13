import React, {Component} from "react"
class FormBuah extends Component{
  constructor(props){
    super(props)
    this.state={
      dataBuah : [
          {nama: "Semangka", harga: 10000, berat: 1000},
          {nama: "Anggur", harga: 40000, berat: 500},
          {nama: "Strawberry", harga: 30000, berat: 400},
          {nama: "Jeruk", harga: 30000, berat: 1000},
          {nama: "Mangga", harga: 30000, berat: 500}
      ],
      inputNama: "",
      inputHarga: "",
      inputBerat: "",
      index: -1
    }

    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleEdit(event) {
    let index= event.target.value;
    let buah= this.state.dataBuah[index];
    console.log(buah);
    this.setState({
        inputNama: buah.nama, inputHarga: buah.harga, inputBerat: buah.berat, index: index
    });
  }

  handleDelete(event){
    let index= event.target.value;
    let buah= this.state.dataBuah;
    let editedBuah = buah[this.state.index];
    console.log(editedBuah);
    buah.splice(index,1);
    if(editedBuah!== undefined){
        var newindex= buah.findIndex((item) => item === editedBuah);
        console.log(newindex);
        this.setState({
            dataBuah: buah,
            index: newindex
        });
    }
    else{
        this.setState({
            dataBuah: buah
        });
    }
  }

  handleChange1(event){
      this.setState({inputNama: event.target.value});
  }

  handleChange2(event){
      this.setState({inputHarga: event.target.value});
  }

  handleChange3(event){
      this.setState({inputBerat: event.target.value});
  }

  handleSubmit(event){
      event.preventDefault()
      if(this.state.inputNama.replace(/\s/g,'')!==""&&this.state.inputHarga!==""&&this.state.inputBerat!==""){
          let daftarBuah=this.state.dataBuah
          if(this.state.index===-1){
              daftarBuah=[...daftarBuah,{nama: this.state.inputNama, harga: this.state.inputHarga, berat: this.state.inputBerat}]
          }
          else{
              daftarBuah[this.state.index]= {nama: this.state.inputNama, harga: this.state.inputHarga, berat: this.state.inputBerat}
          }
          console.log(daftarBuah)
          this.setState({
            dataBuah: daftarBuah,
            inputNama: "",
            inputHarga: "",
            inputBerat: "",
            index: -1
          })
      }
  }

  render(){
        return(
            <div>
                <style>
                    {`
                    div{
                        padding-left:2px;
                        font-family:serif;
                    }
                    table{
                        border: 1px solid black;
                        width: 700px;
                        margin-left: auto;
                        margin-right: auto;
                    }
                    th {
                        background-color: #aaaaaa;
                    }
                    td {
                        background-color:#ff7f50;
                    }
                    form{
                        text-align:center;
                    }
                    h1{text-align:center;}`}
                </style>
                <h1>Tabel Harga Buah</h1>
                <table>
                    <tr>
                        <th>Nama</th>
                        <th>Harga</th>
                        <th>Berat</th>
                        <th>Edit</th>
                    </tr>
            {
                this.state.dataBuah.map((el,index)=>{
                    return(
                        <tr>
                            <td>{el.nama}</td>
                            <td>{el.harga}</td>
                            <td>{el.berat/1000+' kg'}</td>
                            <td>
                                <button onClick={this.handleEdit} value={index}>Edit</button>
                                &nbsp;
                                <button onClick={this.handleDelete} value={index}>Delete</button>
                            </td>
                        </tr>
                    )
                })
            }
            </table>
            {/* Form */}
                <h1>Form Data Buah</h1>
                
                <form onSubmit={this.handleSubmit}>
                <table>
                    <tr>
                        <td width="50%"><label>Input Name : </label></td>  
                        <td width="50%"><input type="text" value={this.state.inputNama} onChange={this.handleChange1}/></td>
                    </tr>
                    <tr>
                        <td><label>Input Price : </label> </td>        
                        <td><input type="text" value={this.state.inputHarga} onChange={this.handleChange2}/></td>
                    </tr>
                    <tr>
                        <td><label>Input Weight : </label> </td>   
                        <td><input type="text" value={this.state.inputBerat} onChange={this.handleChange3}/></td>
                    </tr>
                    <tr>
                        <td colSpan="2"><button>submit</button></td>
                    </tr>
                    </table>
                </form>
                
            </div>
        )
    }
}
export default FormBuah;