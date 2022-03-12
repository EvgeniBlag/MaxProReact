import React from "react";
import { useState } from "react";
import styles from "./Articles.module.scss";

const Articles = () =>{
    const[city,setCity]=useState("Moscow");

    return (
        <div>
       <h1>Articles</h1>

       <input
         type="text"
         value={city}
         placeholder="Enter city"
         onChange={event=>setCity(event.target.value)}
            />
            
      <div className={styles.card}>
        <img src="" alt=""/>
        <h4></h4>
        <a href="/">Read now</a>
      </div>
        </div>
    )
}
export default Articles