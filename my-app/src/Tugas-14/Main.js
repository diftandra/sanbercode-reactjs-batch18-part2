import React from "react"
import {DaftarBuahProvider} from "./Context"
import DaftahBuahList from "./List"
import DaftarBuahForm from "./Form"

const DaftarBuah = () =>{
    return(
      <DaftarBuahProvider>
          <DaftahBuahList/>
          <br/>
          <br/>
          <DaftarBuahForm/>
      </DaftarBuahProvider>
    )
  }
  
  export default DaftarBuah
