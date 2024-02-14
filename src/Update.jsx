import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { adddata } from './CounterSlice';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'


export const Update = () => {

const [viewdata,setViewData]=useState('')
const {id}=useParams()
useEffect(()=>{
    const fetchData=async()=>{
        let response=await axios.get(`http://localhost:4009/FindOne/${id}`)
        console.log(response.data);
        setViewData(response.data)
    }
    fetchData()
},[])
console.log(id);

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
    let response=await axios.put(`http://localhost:4009/update/${id}`,data)
    console.log(response);
   
    
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
          placeholder={viewdata.fname}
        />
        <input
          type="text"
          onChange={handleChange}
          name="lname"
          className="form-control mt-3 mb-3"
          value={data.lname ? data.lname : ''}
          placeholder={viewdata.lname}
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
          value={viewdata.profession ? viewdata.profession :''}
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
          placeholder={viewdata.uname}
        />
        <input
          type="password"
          name="pass"
          className="form-control mt-3 mb-3"
          value={data.pass ? data.pass : ''}
          onChange={handleChange}
          placeholder={viewdata.pass}
        />
        <Button variant="primary" className="form-control mt-3 mb-3" onClick={handlesubmit}>
         Update
        </Button>
      </Form>
    </div>
    
    <ToastContainer/>
    
    </>
  );
};
