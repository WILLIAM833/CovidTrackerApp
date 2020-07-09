import React,{Component} from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { Wave } from 'react-animated-text';
import { FcGlobe,FcBusinessman } from "react-icons/fc";


class Header extends Component{

    render(){

     
        return(
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"  >
            <h2 style={{color:"white"}}>Covid19 Tracker by </h2>
            
    <div style={{fontSize:"24px",color:"white",marginLeft:"5px" }}>                  
 <Wave text="Kevin Jacob" speed="3" />
 </div>  

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />


            <Navbar.Collapse id="responsive-navbar-nav" >
              <Nav className="ml-auto" >
                <Link className="nav-link" to="/india">India</Link>
                <FcGlobe/>
                <Link className="nav-link" to="/world">World</Link>
              </Nav>
            
              <Nav className="ml-auto" >
              <FcBusinessman/>
                     <a style={{color:"white"}} href="https://kevinjacob2001.github.io">My Portfolio</a>
                     </Nav>
        

            </Navbar.Collapse>
          </Navbar>
        )
    }
}



export default Header;