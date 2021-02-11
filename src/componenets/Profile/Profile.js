import { Typography } from '@material-ui/core'
import {React, useState} from 'react'
import CustomTimeline ,{CustomTimelineseperator}from  "../Timeline/Timeline"
import CodeIcon from '@material-ui/icons/Code';

import resumeData from '../../utils/resumeData'
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineContent from '@material-ui/lab/TimelineContent';
import './Profile.css'
import joe from '../assets/images/joeprofile.jpg'
import { Timeline, Telegram } from '@material-ui/icons';
import CustomButton from '../Button/Button'
import GetAppIcon from '@material-ui/icons/GetApp';
// import EmailIcon from '@material-ui/icons/Email';


const CustomTimelineItem= ({title,text,link}) => (
    <TimelineItem className="timeline_content">
        <CustomTimelineseperator />
            <TimelineContent>
               
                    {link ? (<Typography className="timelineItem_text"><span>{title}</span>{" "}
                    <a className='aa' href={link} target='_blank'>{text}
                    </a></Typography>
                    ) : (
                    <Typography className="timelineItem_text" ><span>{title}</span> {text}</Typography>

                )}
            </TimelineContent>
    </TimelineItem>
)

const Profile = () => {
    return (
        <div className="profile">
        <div className='profile_container_shadow'>
            <div className='profile_name'>
            <Typography className="name">{resumeData.name}</Typography>
            <Typography className="title">{resumeData.title}r</Typography>

            </div>
            <figure className='profile_image'>
                <img src={joe} alt =""/>
       
            </figure>
            <div className='profile_information'>
                <CustomTimeline icon={<CodeIcon />}>
                <CustomTimelineItem title="Name:" text={resumeData.name}/>
                <CustomTimelineItem title="Title:" text={resumeData.title}/>
                <CustomTimelineItem title="Email:" text={resumeData.email}/>


                {Object.keys(resumeData.socials).map((key) => (
                    <CustomTimelineItem title={key} text={resumeData.socials[key].text} link={resumeData.socials[key].link}  />

                ))} 
                </CustomTimeline >
             
                <div  className="button_container" style={{display: 'flex'}}>
                {/* <a href="https://react.school" target="_blank">
                   <CustomButton text={"See Resume"} icon={<Telegram/>} />
                </a> */}
                </div>

            </div>
        </div>
        </div>
    )
}

export default Profile
