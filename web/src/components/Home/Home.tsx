import React, { Component } from 'react';
import './Home.css'
import YellowButton from '../YellowButton/YellowButton'

const style1 = {
  width: '150px',
  height: '50px',
  fontSize: '20px',
  backgroundColor:'#fae379',
  color:'white'
}

const style2 = {
  width: '150px',
  height: '50px',
  fontSize: '20px',
  backgroundColor:'white',
  color:'#fae379'
}

function Home() {
  return (
    <div className='Home'>
      {/* <button className='login' ref='login'>Log In</button> */}
      <YellowButton
        content='Log In'
        style1={style1}
        style2={style2}
      />
      <div className='signup'>Sign Up</div>
      <div className='signup'>Show Me More</div>
    </div>
  );
}

export default Home;
