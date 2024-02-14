import React from 'react'
import {  useSelector } from 'react-redux';

export const Teacher = () => {

  const regdata=useSelector((state)=>state.counter.value)
  console.log(regdata);


  return (
   
    <>
    <div>
    <h1>Teacher</h1>
    </div>
    <p>First Name: {regdata.fname}</p>
      <p>Last Name: {regdata.lname}</p>
      <p>Date of birth:{regdata.dob}</p>
      <p>Gender:{regdata.gender}</p>
      <p>Profession:{regdata.profession}</p>
      <p>User Name:{regdata.uname}</p>
      <p>Password:{regdata.pass}</p>
    </>
  )
}
