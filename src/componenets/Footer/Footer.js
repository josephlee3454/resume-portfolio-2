import { Typography } from '@material-ui/core'
import React from 'react'
import './Footer.css'
import resumeData from '../../utils/resumeData'

const Footer = () => {
    return (
        <div className="footer">
            <div ClassName = "footer_left" >
                <Typography className= "footer_name">{resumeData.name}</Typography>
            </div>
            <div ClassName = "footer_right">
                <Typography className = "footer_cp">
                    Developed by <a href ="/" target="_blank">Joseph Lee</a> 
                    <br/>
                    {/* Cloned from <a href="https://themeforest.net/user/tavonline" target="_blank">Travoline</a> */}
                </Typography>
            </div>
        </div>
    )
}

export default Footer
