import React from 'react';
import './Home.css'
// import '../../assets/styles/theme/StarryDark/StarryDark.css'
import '../../assets/styles/theme/DawnGolden/DawnGolden.css'
import YellowButton from '../../components/ColorButton/ColorButton'
import { Link } from 'react-router-dom'

const style1 = {
  width: '200px',
  height: '75px',
  fontSize: '30px',
  backgroundColor: '#fae379',
  color: 'white'
}

const style2 = {
  width: '200px',
  height: '75px',
  fontSize: '30px',
  backgroundColor: 'white',
  color: '#fae379'
}

let style: any = {
  color: '',
};

function changeColor1() {
  const signup: HTMLDivElement = document.getElementById('signup') as HTMLDivElement;
  signup.style.color = 'white';
}

function changeBack1() {
  const signup: HTMLDivElement = document.getElementById('signup') as HTMLDivElement;
  signup.style.color = '';
}

function changeColor2() {
  const showmore: HTMLDivElement = document.getElementById('showmore') as HTMLDivElement;
  showmore.style.color = 'white';
}

function changeBack2() {
  const showmore: HTMLDivElement = document.getElementById('showmore') as HTMLDivElement;
  showmore.style.color = '';
}

class Home extends React.Component {
  render() {
    return (
      <div className='Main'>
        <Link to='/login/' style={{ textDecoration: 'none' }}>
          <YellowButton
            content='Log In'
            style1={style1}
            style2={style2}
          />
        </Link>
        <Link to='/signup/' style={{ textDecoration: 'none' }}>
          <div className='MainMessage' id='signup' onMouseEnter={changeColor1} onMouseLeave={changeBack1}>Sign Up</div>
        </Link>
        <Link to='/more/' style={{ textDecoration: 'none' }}>
          <div className='MainMessage' id='showmore' onMouseEnter={changeColor2} onMouseLeave={changeBack2}>Show Me More</div>
        </Link>
      </div>
    );
  }
}

export default Home;
