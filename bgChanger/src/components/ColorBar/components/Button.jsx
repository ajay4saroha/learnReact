import React from "react";
let ColorButton = ({bgColor,onClick})=>{
    return (
        <button className="btn p-2 m-3 rounded-5 text-light" style={{backgroundColor:bgColor,width:"100px"}} onClick={()=>onClick(bgColor)} >
            {bgColor.toUpperCase()}
        </button>
    )
}
export default ColorButton
