import React from 'react';
import './landing.css';
import  image from '../assets/cool.jpeg';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import ShareIcon from '@mui/icons-material/Share';
import { Button } from "@mui/material";
import { Link } from "react-router-dom";


function land(){
  return (
    <div className='body' id='home'>
      <div className='nav'>
        <a href='#home'>Home</a>
        <a href='#home'>Trends</a>
        <a href='#home'>Styles</a>
        <a href='#home'>Contact</a>
      </div>

      <div className='main-container'>
        <img src={image} alt="img" className='img'></img>
        <div id='title'>Don't follow the trend, Set the TREND!</div>
        <div className='descrp'></div>
        <p>Different circumstances often dictate our style on so many levels. 
          Many women are afraid to try something new at work because they think
           that that they will not be taken seriously. This era of ripped jeans 
           and T-shirts, „spilled paint“ patterns and random zippers, is the best 
           time to start getting a little bit bolder and trying out some new stuff.
           </p>
           <h4>Fashion is the popular aesthetic expression.</h4>
           <Link to="/">
        <Button variant="contained">LOGOUT</Button>
      </Link>

      </div>

      <div className="footer">
        <a href='#home'>
          <EmailIcon />
        </a>
        <a href='#home'>
          <TwitterIcon />
        </a>
        <a href='#home'>
          <ShareIcon />
        </a>
      </div>
    </div>
  );
}

export default land;