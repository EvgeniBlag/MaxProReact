import React from "react";
import styles from "./Articles.module.scss";

const Articles = () =>{
    return (
        <div>
       <h1>Articles</h1>
       <input type="text" value="wef" placeholder="Enter city" />
      <div className={styles.card}>
        <img src="" alt=""/>
        <h4></h4>
        <a href="/">Read now</a>
      </div>
        </div>
    )
}
export default Articles