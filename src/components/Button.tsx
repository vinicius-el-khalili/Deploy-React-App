import { useState } from "react";
import React from "react";
const styles:React.CSSProperties[]=[
    {padding:"1rem",border:"1px solid black",color:"black"},
    {padding:"2rem",border:"2px solid red",color:"red"},
    {padding:"2rem",border:"2px solid blue",color:"blue"},
    {padding:"2rem",border:"2px solid green",color:"green"}
];
export const Button = () => {
    const [flag,setFlag]=useState<number>(0);
    const [style,setStyle]=useState<React.CSSProperties>(styles[0]);
    const handleClick=()=>{
        switch(flag){
            case 0:
                setFlag(1);
                setStyle(styles[flag]);
                break;
            case 1:
                setFlag(2);
                setStyle(styles[flag]);
                break;
            case 2:
                setFlag(3);
                setStyle(styles[flag]);
                break;
            case 3:
                setFlag(1);
                setStyle(styles[flag]);
                break;
        }
    };
    return(
        <button style={style} onClick={handleClick}>Hey</button>
    );
}