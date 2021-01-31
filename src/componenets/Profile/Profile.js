import { Typography } from '@material-ui/core'
import React from 'react'
import CustomTimeline from  "../Timeline/Timeline"


import resumeData from '../../utils/resumeData'



import './Profile.css'
import joe from '../assets/images/joeprofile.jpg'

const Profile = () => {
    return (
        <div className='profile container_shadow'>
            <div className='profile_name'>
            <Typography className="name">{resumeData.name}</Typography>
                <Typography className="title">{resumeData.title}r</Typography>

            </div>
            <figure className='profile_image'>
                <img src={joe} alt =""/>
       
            </figure>
            <div className='profile_information'>
                <CustomTimeline />
             
                <br/>
                <button>my Button</button>
            </div>
        </div>
    )
}

export default Profile
