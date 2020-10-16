import React from "react";

const Theme = () =>{
    return(
        <>
            <div align = "center">
                <br/>
                <button style={{background: "black", "border-radius": "60px", fontSize :"18px"}}>
                    <a href="#" style={{"text-decoration": "none", color: "white"}}>Tema Dark</a>
                </button>
                <br/>
                <br/>
                <button style={{background: "white", "border-radius": "60px", fontSize :"18px"}}>
                    <a href="#" style={{"text-decoration": "none", color: "black"}}>Tema Light</a>
                </button>
            </div>
        </>
    )
}

export default Theme