import React,{Component} from 'react';
import Navbar from './Navbar.jsx';
import Footer from './Footer';
import Jumbotron from './Jumbotron.jsx';
import yoga1 from '../images/yoga1.png';
import yoga2 from '../images/yoga2.png';
import yoga3 from '../images/yoga3.png';





import './Home.css';

class Home extends Component{

render(){
    return(
<div >
    <Navbar/>
    <div className="bg">
    <div>
    <Jumbotron/>
    <div className="container" >
        <div className="home-page">
    <h2>HOME</h2>
    <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
    <br/>
    <p>Praesent vulputate, eros ac vestibulum scelerisque, enim nisl facilisis nulla</p>
    <br/>
    <p> at finibus odio metus eu mauris. Aliquam erat volutpat. Phasellus est diam, tincidunt quis purus sit amet, euismod fringilla arcu. Ut luctus, ante eu aliquam commodo, metus lectus viverra nisi, at aliquam velit sem id ex. Phasellus lectus nibh, commodo eu elementum sit amet, posuere ac ex. Donec faucibus tellus eget augue laoreet, vel semper lacus maximus. Donec at egestas ante.</p>
   </div>
   </div>
   <div class="container two">
  <div class="row">
    <div class="col-sm">
    <img classname='photos'src={yoga1}></img>

       <p>Aliquam erat volutpat.Aliquam erat volutpat.Aliquam erat volutpat.</p> 
     
    </div>
    <div class="col-sm">
    <img classname='photos' src={yoga2}></img>
 
    <p>Aliquam erat volutpat.Aliquam erat volutpat.Aliquam erat volutpat.</p> 
     
    </div>
    <div class="col-sm">
    <img classname='photos' src={yoga3}></img>
 
    <p>Aliquam erat volutpat.Aliquam erat volutpat.Aliquam erat volutpat.</p> 
     
    </div>
  </div>
</div>
   
   
  
   </div>
   </div>
    <Footer/>
 </div>



    )
}


}


export default Home;