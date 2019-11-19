import React,{Component} from 'react';
import './Contact.css';
import Footer from './Footer';
import Navbar from './Navbar';



class Contact extends Component{

    render(){

        return(
          <div >
          <Navbar/>
          <div className="bg">
          
         
          <div className="container" >
              <div className="home-page">
  <h3>CONTACT</h3>
  <div className="container contact">
    
  <form  classname='contactf'form-control-sl>
  <div className="d-flex">
    <div className="col-md-4">
      <div className="form-group">
        <label>Name</label>
      <input type="text" className="form-control"/>
      </div>
      <div className="form-group">
        <label>Last Name</label>
      <input type="text" className="form-control"/>
      </div>  
      <div className="form-group">
        <label>Email</label>
      <input type="text" className="form-control"/>
      </div> 
      <div className="form-group">
        <label>Message</label>
      <textarea type="text"  className="form-control" rows="6"></textarea>
      </div> 
      <button  id="button"className="btn btn-secondary">Send</button> 
      </div>
      <div className="col-md-8" >
      
  <div  className='map'  >
  <p>Adress:Lorem Ipsum </p>
  <p>Contact:+389 02 1234 567</p>
 
 

 <iframe  
src="https://www.google.com/maps/embed/v1/view?zoom=11&center=42.0050,21.4408&key=AIzaSyB5nS3j1ktIB1rzXntIPB1cU77mrKFVqv0" style={{width:"600px", height:"300px" }} >

</iframe>
      </div>
      </div>
      </div>
      </form>
      
 </div>
 </div>
 </div>
 
 </div>
<Footer/>
 </div> 

 )
}
        
}


export default Contact;













