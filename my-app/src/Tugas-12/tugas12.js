import React, {Component} from "react"

class Lists extends Component{

  constructor(props){
    super(props)
    this.state ={
     dataHargaBuah : [
      {nama: "Semangka", harga: 10000, berat: 1000},
      {nama: "Anggur", harga: 40000, berat: 500},
      {nama: "Strawberry", harga: 30000, berat: 400},
      {nama: "Jeruk", harga: 30000, berat: 1000},
      {nama: "Mangga", harga: 30000, berat: 500}
    ],
     inputan : "",
     inputanOne : "",
     inputanTwo : "" ,
     showEdit: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeOne = this.handleChangeOne.bind(this);
    this.handleChangeTwo = this.handleChangeTwo.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showEditForm = this.showEditForm.bind(this)
    this.handleSubmitDel = this.handleSubmitDel.bind(this);
  }

  handleChange(event){
    this.setState({inputan: event.target.value });
  }

  handleChangeOne(event){
    this.setState({inputanOne: event.target.value });
  }

  handleChangeTwo(event){
    this.setState({inputanTwo: event.target.value });
  }

  handleSubmit(event){
    event.preventDefault()
    console.log(this.state.inputan)
    this.setState({
      dataHargaBuah: [...this.state.dataHargaBuah,{nama : this.state.inputan,harga : this.state.inputanOne,berat : this.state.inputanTwo}],
      inputan : "",
      inputanOne : 0,
      inputanTwo : 0,
      showEdit : false
    })
  }

  handleSubmitDel(event){
    event.preventDefault()
    console.log(this.state.inputanOne)
    this.setState({
      dataHargaBuah: this.state.dataHargaBuah.splice(this.state.inputanOne-1,1),
      inputanOne: 0,
      showEdit : false
    })
  }

  showEditForm(){
    this.setState({showEdit : true})
  }

  render(){
    return(
      <>
        <h1 style={{textAlign:"center"}}>Tabel Harga Buah</h1>
        <table align = "center">
          <thead>
            <tr>
              <th style={{width : "300px",backgroundColor:"grey"}}>Nama</th>
              <th style={{width : "200px",backgroundColor:"grey"}}>Harga</th>
              <th style={{width : "190px",backgroundColor:"grey"}}>Berat</th>
            </tr>
          </thead>
          <tbody>
              {
                this.state.dataHargaBuah.map((val)=>{
                  return(                    
                    <tr>
                      <td style={{backgroundColor:"orangered"}}>{val.nama}</td>
                      <td style={{backgroundColor:"orangered"}}>{val.harga}</td>
                      <td style={{backgroundColor:"orangered"}}>{val.berat/1000} Kg</td>
                    </tr>
                  )
                })
              }
              <tr>
                        <td>
                            <button onClick={this.showEditForm}>Edit</button>
                        </td>
                  </tr>
          </tbody>
        </table>
        {/* Form */}
        {this.state.showEdit&&(
          <>
          <h1 style={{textAlign:"center"}}>Edit Data</h1>
          <h2 style={{paddingLeft:"330px"}}>Tambah Data</h2>
          <form onSubmit={this.handleSubmit} style={{paddingLeft:"330px"}}>
            <div>
            <label >
              {"Nama  : "}
            </label >          
            <input type="text" onChange={this.handleChange}/>
            </div>
            <div>
            <label >
              {"Harga : "}
            </label>          
            <input type="Number" onChange={this.handleChangeOne}/>
            </div>
            <div>
            <label >
              {"Berat : "}
            </label>          
            <input type="Number" onChange={this.handleChangeTwo}/>
            </div>
            <input type="submit" value="Submit" />
          </form>
          <h2 style={{paddingLeft:"330px"}}>Delete Data</h2>
          <form onSubmit={this.handleSubmitDel} style={{paddingLeft:"330px"}}>
          <label>
            {"Masukkan Nomor Tabel : "}
          </label>          
          <input type="Number" value={this.state.inputName} onChange={this.handleChangeOne}/>
          <button>Delete</button>
          </form>
          </>
        )}
      </>
    )
  }
}

export default Lists