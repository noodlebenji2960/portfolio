import React from "react";
import styles from "../styles/modules/Metal.module.css"
import metal from "../../public/assets/metal.jpg"

const Metal=({children})=>{
    return (<div className={styles.metal}>
        <img src={metal}/>
    {children}
    </div>)
}

export default Metal