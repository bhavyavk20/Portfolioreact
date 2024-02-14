import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import {  useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


export const Login = () => {
 
  const [data2,setData2]=useState('');
  
  const navigate =useNavigate()
  const regdata=useSelector((state)=>state.counter.value)
  console.log(regdata);

  const handleChange = (event) => {
    setData2({ ...data2, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setData2(data2);
   if(data2.uname && data2.pass)
   {
  if(regdata.uname==data2.uname && regdata.pass==data2.pass)
  {
     if(regdata.profession=='student')
     {
      navigate('/Student');
     }
     if(regdata.profession=='teacher')
     {
      navigate('/Teacher');
     }
     if(regdata.profession=='admin')
     {
      navigate('/Admin');
     }
  }
  else
  {
    toast.error('Incorrect username and password');
  }
}
else
{
  toast.error('Please fill all field');

}
  };
 
   
  
  return (
    <>

        <div>
                <form action="" className='p-3 w-50 m-auto'>
             <h1 className=''>Login</h1>
            <input type="text" onChange={handleChange} name="uname" placeholder='User name'value={data2.uname ? data2.uname : '' }className='form-control mt-3 mb-3' />
            <input type="password" onChange={handleChange} name='pass' placeholder='Password'value={data2.pass ? data2.pass : ''} className='form-control mt-3 mb-3'/>
            <Button variant="success" className='form-control mt-3 mb-3' onClick={handleSubmit} >Login</Button>{' '}

    </form>
    </div>
    <ToastContainer/>
    </>
  )
}
