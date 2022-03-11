import React from "react";
import { menu } from "./menu";
import styles from "./Header.module.scss";



const Header = () => {
    return(
        <div className={styles.header} >
          <div className={styles.logo}>
              <img src="https://cdn.svgporn.com/logos/lightstep.svg" alt="" height="35px" />
          </div>  
          <div className={styles.wrapper}>
             <ul className={styles.menu}>
                 {menu.map((item,idx)=>(
                    <li key={`menu item ${idx}`}>
                     <a href={item.link}>{item.title}</a>
                    </li>
                 ))}
                 
             </ul>
             <div className={styles.buttons}>
               <button className={styles["login-button"]}>Login</button>
               <button className={styles["sign-up-button"]}>Sign up</button>
             </div>
          </div>
        </div>
    )
}
export default Header;