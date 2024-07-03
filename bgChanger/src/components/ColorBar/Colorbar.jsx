import { useState } from "react";
import ColorButton from "./components/Button";

let Colorbar = ({color,setColor})=>{
    const changeColor = (c)=>{
        setColor(c)
    }
    let colorArr = ['red','black','purple','olive','green','silver','gold','grey','yellow']
    return(
        <div className="conatiner-fluid d-flex flex-wrap p-2 justify-content-lg-center rounded-5 w-100">
            {colorArr.map(item=><ColorButton bgColor={item} onClick={changeColor}/>)}
        </div>
    )
}
 export default Colorbar