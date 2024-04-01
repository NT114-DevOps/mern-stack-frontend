import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { logo } from '../assets';

function NavBar() {
  return (
    <nav>
        <div className='flex flex-row items-center'>
            <img src={logo} alt="motion-assists-logo" className='w-[52px] mx-[10px]' />
            <Link to='/'><h1>Motion Assists</h1></Link>
        </div>
        <div className='nav-list'>
            <Link to='/news'>News</Link>
            <Link to='/about'>About</Link>
        </div>
    </nav>
  )
}

export default NavBar