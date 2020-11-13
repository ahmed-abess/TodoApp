import React from 'react';
import Logo from '../John-Doe.jpg'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookSquare, faLinkedin,faGithub} from "@fortawesome/free-brands-svg-icons";



class Navbar extends React.Component{

    render() {

        return(

        <div className="header ">
            <nav>
                <div className="nav-wrapper light-blue lighten-1">
                    <a href="#" className="brand-logo"></a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="education">Education</a></li>
                        <li><a href="experience">Experience</a></li>
                        <li><a href="#">Skills</a></li>
                    </ul>
                </div>
            </nav>
            <div className="sub-header">
                <div className="section-header">
                    <p className="header-name left ">HELLO , MY NAME IS <span>JOHN DOE</span>,<br/>
                        AND I MAKE A HORRIBLE WEBSITES
                    </p>
                    <img src={Logo} alt="Jhon doe" className="logo"/>
                </div>
                <div className="links">
                    <a href="http://www.facebook.com">
                    <FontAwesomeIcon icon={faFacebookSquare}  className="link-facebook" size="4x" />
                    </a>
                    <a href="http://www.linkedin.com">
                    <FontAwesomeIcon icon={faLinkedin}  className="link-facebook" size="4x" />
                    </a>
                    <a href="http://www.github.com">
                    <FontAwesomeIcon icon={faGithub}  className="link-facebook" size="4x" />
                    </a>


                </div>
            </div>



        </div>




        );
    }
}
export default Navbar;
