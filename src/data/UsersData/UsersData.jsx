import axios from "axios";
import { useEffect, useState } from "react";


export default function UsersData() {
const [data, setData]= useState([]);

 useEffect(()=>{
        axios.get('/api/user')
        .then( (response)=> {
          // handle success
          setData(response.data.users);
          
        })
        .catch((error)=> {
          // handle error
          console.log(error);
        })
      })

  return ({data})
}


    

   
 
