import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { adddata } from './CounterSlice';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'


export const Reg = () => {
  const [data, setData] = useState('');
  const [submit,setSubmit] =useState('');
  const dispatch=useDispatch();
  const navigate=useNavigate()


  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };


  const handlesubmit =async (event) => {
    event.preventDefault();
    setData(data);
    console.log(data);
    dispatch((adddata(data)))
    let response=await axios.post('http://localhost:4009/insert',data)
    console.log(response);
    if (data.fname && data.lname && data.dob && data.gender && data.profession !== 'select one' && data.uname && data.pass)
      {
       navigate('/Login');
    toast.success("Registration Successfully");
  }
    else
  {
    toast.error('Please fill the all field');
  }
 };

  return (
    <>
    <div>
      <Form action="" className="p-3 w-50 m-auto">
        <h1>Register</h1>
        <input
          type="text"
          onChange={handleChange}
          name="fname"
          className="form-control mt-3 mb-3"
          value={data.fname ? data.fname : ''}
          placeholder="First name"
        />
        <input
          type="text"
          onChange={handleChange}
          name="lname"
          className="form-control mt-3 mb-3"
          value={data.lname ? data.lname : ''}
          placeholder="Last name"
        />
        <input
          type="date"
          onChange={handleChange}
          name="dob"
          value={data.dob ? data.dob : ''}
          className="form-control mt-3 mb-3"
        />
       {['Male', 'Female', 'Others'].map((label, index) => (
  <Form.Check
    key={index}
    inline
    label={label}
    name="gender"
    type="radio"
    value={label.toLowerCase()} // Set the value to lowercase for consistency
    onChange={handleChange}
    id={`inline-radio-${index}`}
  />
))}
        <select
          name="profession"
          className="form-control mt-3 mb-3"
          value={data.profession ? data.profession :''}
          onChange={handleChange}
        >
          <option value="select one">Select one</option>
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="admin">Admin</option>
        </select>
        <input
          type="text"
          name="uname"
          className="form-control mt-3 mb-3"
          value={data.uname ? data.uname : ''}
          onChange={handleChange}
          placeholder="User name"
        />
        <input
          type="password"
          name="pass"
          className="form-control mt-3 mb-3"
          value={data.pass ? data.pass : ''}
          onChange={handleChange}
          placeholder="Password"
        />
        <Button variant="primary" className="form-control mt-3 mb-3" onClick={handlesubmit}>
          Register
        </Button>
      </Form>
    </div>
    
    <ToastContainer/>
    
    </>
  );
};
