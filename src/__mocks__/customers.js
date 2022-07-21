import { v4 as uuid } from 'uuid';
import axios from 'axios'
import { useState,useEffect } from 'react';
export const customers = ()=>{
  const [data, setData] = useState([])

  useEffect(() => {
    let isMounted = true;
    axios.get('http://localhost:3000/api/courselGetAll').then(res=>{


      if(isMounted ){
        console.log(res.data)
    setData([...res.data.data])}
 })

       return () => {
        isMounted = false;
        };
    }, []);
 
  return data;
  
  
  };
