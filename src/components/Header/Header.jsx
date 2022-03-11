import React from "react";

const menu = [
    {
       title:"Products",
       link:"/",
    },
    {
        title:"Pricing",
        link:"/",
     },
     {
        title:"Dashboard",
        link:"/",
     }
]

const Header = () => {
    return(
        <div >
          <div className="logo">
              <img src="https://cdn.svgporn.com/logos/lightstep.svg" alt=""/>
          </div>  
          <div className="menu-wrapper">
             <ul>
                 {menu.map((item,idx)=>(
                    <li>
                     <a href={item.link}>{item.title}</a>
                    </li>
                 ))}
                 
             </ul>
             <div className="auth-buttons">
               <button className="login">Login</button>
               <button className="sign-up">Sign up</button>
             </div>
          </div>
        </div>
    )
}
export default Header;