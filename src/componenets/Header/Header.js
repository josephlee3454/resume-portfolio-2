import React from "react"
import {Button,Form,FormControl,Nav, Navbar, NavDropdown}from "react-bootstrap"
import {HomeRounded, SchoolRounded, WorkRounder, Facebook , Twitter, LinkedIn, GitHubIcon, Telegram} from "@material-ui/icons"
import AddCircleIcon from '@material-ui/icons/AddCircle';
import {Link, NavLink, withRouter } from "react-router-dom"
import resumeData from "../../utils/resumeData"
// import LinkedInIcon from "@material-ui/icons/LinkedIn";
// import GitHubIcon from "@material-ui/icons/GitHub";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomButton from '../Button/Button'
import './Header.css'

const Header = (props) => {
    // if the  props exist fetch location if loction exists fetch pathname
    const pathName = props?.location?.pathName
    return (
        <Navbar  expand="lg" sticky="top" className="header">
            {/* home */}
            <Nav.Link as={NavLink} to="/">
                <Navbar.Brand className="header_home">
                    <HomeRounded />
                </Navbar.Brand>
            </Nav.Link>

            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav>
            {/* resume home links */}
                    <Nav.Link as={NavLink} 
                    to = "/" 
                    className={pathName=="/" ? "header_link_active":"header_link"}>
                        Resume
                    </Nav.Link>
       
            {/* portfolio */}

                    <Nav.Link as={NavLink} to = "/portfolio" className={pathName =="/portfolio"?"header_link_active":"header_link"}>
                        Portfolio
                    </Nav.Link>

            </Nav>
                <div className="header_right">
                    {
                        Object.keys(resumeData.socials).map((key) =>(
                            <a href={resumeData.socials[key].link} target="_blank">
                                {resumeData.socials[key].Icon}
                               
                            </a>
                    ))}
                    <CustomButton text={'Hire Me'} icon={<Telegram />}/>
                </div>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default withRouter(Header);
