import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
export const View = () => {
    const [data,setData]=useState([''])
    const [refresh,setRefresh]=useState(false)
    useEffect(()=>{
        let fetchdata=async ()=>{
            let response=await axios.get(`http://localhost:4009/find`)
            console.log(response.data);
            setData(response.data)
        }
        fetchdata()
    },[refresh])
    console.log(data);

  let handleDelete=async(id)=>{
    console.log(id);
    setRefresh(!refresh)
    let response=await axios.delete(`http://localhost:4009/delete/${id}`)
    console.log(response);
    console.log(refresh);
  }

  return (
    <div className='d-flex gap-3 mt-2'>
        {data.map((item,index)=>(
            <div className='bg-success text-white p-3 '>
            <p>Serial No:{index}</p>
            <p>First Name: {item.fname}</p>
            <p>Last Name: {item.lname}</p>
            <p>Date of birth:{item.dob}</p>
            <p>Gender:{item.gender}</p>
            <p>Profession:{item.profession}</p>
            <p>User Name:{item.uname}</p>
            <p>Password:{item.pass}</p>
           <Link to={`/update/${item._id}`}><button>update</button></Link>
           <button onClick={()=>{
            handleDelete(item._id)
           }}>delete</button>
            </div>
        ))}
    </div>
  )
}
