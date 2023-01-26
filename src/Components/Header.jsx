import React, { useEffect } from 'react'
import { useDispatch} from 'react-redux'
import {useSelector} from "react-redux"

const Header = () => {
    let dispatch=useDispatch();
    let state=useSelector(state=>state.data);
    
    useEffect(()=>{
        dispatch({ type: "API_CALL_REQUEST" })
    },[])

  return (
   <table border={1}>
    <thead>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>PhoneNumber</th>
            <th>Address</th>
        </tr>
    </thead>
    <tbody>
       {   state===null?<tr>Loadding...🚍</tr>:(
           state.map(a=>{
            return <tr key={a.id}>
                <td>{a.name}</td>
                <td>{a.email}</td>
                <td>{a.phone}</td>
                <td>{a.address.city}</td>
            </tr>
           })
       )
          
       }


    </tbody>
   </table>
  )
}

export default Header
