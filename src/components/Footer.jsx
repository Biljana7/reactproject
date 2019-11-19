import React,{Component} from 'react';
import './Footer.css';



class Footer extends Component{
render(){

return(
    <footer className="footer">
        <div className="footer-div">
    <span className="text-footer">Lotus Mindfulness &#169; {new Date().getFullYear()}</span>
    </div>

</footer>
)

}
};




export default Footer;