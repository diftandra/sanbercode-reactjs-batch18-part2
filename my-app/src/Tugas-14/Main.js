import React from "react"
import {DaftarBuahProvider} from "./Context"
import DaftahBuahList from "./List"
import DaftarBuahForm from "./Form"

const Tugas14 = () =>{
    return(
      <DaftarBuahProvider>
          <DaftahBuahList/>
          <br/>
          <br/>
          <DaftarBuahForm/>
      </DaftarBuahProvider>
    )
  }
  
  export default Tugas14