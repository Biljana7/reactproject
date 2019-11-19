import React,{Component} from 'react';
import './About.css';
import Footer from './Footer';
import Navbar from './Navbar';


class About extends Component{
    render(){
        return(
<div>
  <Navbar/>
          <h2>ABOUT</h2>
          <div className="container one">
          <p>at finibus odio metus eu mauris. Aliquam erat volutpat. Phasellus est diam, tincidunt quis purus sit amet, euismod fringilla arcu. Ut luctus, ante eu aliquam commodo, metus lectus viverra nisi, at aliquam velit sem id ex. Phasellus lectus nibh, commodo eu elementum sit amet, posuere ac ex. Donec faucibus tellus eget augue laoreet, vel semper lacus maximus. Donec at egestas ante.</p>
          <p>at finibus odio metus eu mauris. Aliquam erat volutpat. Phasellus est diam, tincidunt quis purus sit amet, euismod fringilla arcu. Ut luctus, ante eu aliquam commodo, metus lectus viverra nisi, at aliquam velit sem id ex. Phasellus lectus nibh, commodo eu elementum sit amet, posuere ac ex. Donec faucibus tellus eget augue laoreet, vel semper lacus maximus. Donec at egestas ante.</p> <p>at finibus odio metus eu mauris. Aliquam erat volutpat. Phasellus est diam, tincidunt quis purus sit amet, euismod fringilla arcu. Ut luctus, ante eu aliquam commodo, metus lectus viverra nisi, at aliquam velit sem id ex. Phasellus lectus nibh, commodo eu elementum sit amet, posuere ac ex. Donec faucibus tellus eget augue laoreet, vel semper lacus maximus. Donec at egestas ante.</p>
          
          </div>
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" className=""></li>
      <li data-target="#myCarousel" data-slide-to="1" className="active"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>
    <div className="container">
      
    <div className="carousel-inner" >
    <div className="carousel-item active">
        <img  style={{ height: '500px', width:'100%' }}src="https://images.pexels.com/photos/1321727/pexels-photo-1321727.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=630&w=940"/>
       </div>
      <div className="carousel-item">
      <img style={{ height: '500px', width:'100%' }}src="https://images.pexels.com/photos/268092/pexels-photo-268092.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=630&w=940"/>
        </div>
        <div className="carousel-item">
      <img style={{ height: '500px', width:'100%' }}src="https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
        </div>
        </div>
    </div>
   </div>  
   
   <Footer/>
   </div>   
 
        
  
        )
    }
  }

export default About;