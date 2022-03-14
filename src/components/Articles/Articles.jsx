import React, { useEffect } from "react";
import { useState } from "react";
import styles from "./Articles.module.scss";
import axios from "axios";

const Articles = () =>{
    const[posts,setPosts]=useState([]);
    const[loading,setLoading] = useState(true);

    useEffect(()=>{
   const fetchData = async () =>{
       try {
           const {data} = await axios.get(
               "https://jsonplaceholder.typicode.com/posts"
           )
         
         setPosts(data)
       } catch (error){
           console.log(error)
        }
        setLoading(false)
   }
    fetchData()
    },[])


    return (
        <div>
       <h1 className={styles.articles}>Articles</h1>

      
    <div className={styles.wrapper}>
       {posts.map(post=>(
            <div key={post.id} className={styles.card}> 
            <h4>{post.title}</h4>         
            <p>{post.body}</p>
            <a href="/">Read now</a>
          </div>
       ))}
   </div>
      
        </div>
    )
}
export default Articles