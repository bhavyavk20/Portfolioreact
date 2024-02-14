import React from 'react'
import './Student.css'
import image1 from './a.jpg';
import image2 from './b.jpg';
import image3 from './c.png';
import image4 from './d.png';
import image5 from './e.png';
import image6 from './f.jpg';

export const Student = () => {
  return (
    <>
    <h1>STUDENT PORTAL</h1>
    <div className='container'>
    <div class="card-group">
  <div class="card">
    <div class="card-body">
    <img src={image1} className="card-img-top" alt="Image1" />
      <h5 class="card-title">PROFILE</h5>

    </div>
  </div>
  <div class="card">
    <div class="card-body">
    <img src={image2} className="card-img-top" alt="Image1" />
      <h5 class="card-title">EVENTS</h5>
    </div>
  </div>
  <div class="card">
    <div class="card-body">
    <img src={image3} className="card-img-top" alt="Image1" />
      <h5 class="card-title">STAFFS</h5>
    </div>
  </div>
</div>
<div class="card-group">
  <div class="card">
    <div class="card-body">
    <img src={image4} className="card-img-top" alt="Image1" />
      <h5 class="card-title">ATTENDANCE</h5>
    </div>
  </div>
  <div class="card">
    <div class="card-body">
    <img src={image5} className="card-img-top" alt="Image1" />
      <h5 class="card-title">CHATBOX</h5>
    </div>
  </div>
  <div class="card">
    <div class="card-body">
    <img src={image6} className="card-img-top" alt="Image1" />
      <h5 class="card-title">FEES DETAILS</h5>
    </div>
  </div>
</div>
</div>
    </>
  )
}
