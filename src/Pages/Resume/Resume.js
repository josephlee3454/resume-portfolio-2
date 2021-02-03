import React from 'react'
import { Grid, Typography , Icon, TextField} from '@material-ui/core'
import './Resume.css'
import resumeData from '../../utils/resumeData'
import CustomTimeline ,{CustomTimelineseperator}from  "../../componenets/Timeline/Timeline"
import WorkIcon from '@material-ui/icons/Work';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator'
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineContent from '@material-ui/lab/TimelineContent'
import SchoolIcon from '@material-ui/icons/School';
// import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import CustomButton from '../../componenets/Button/Button'
import emailjs from "emailjs-com";


// function sendEmail(e) {

  
//     emailjs.sendForm('gmail', 'template_7ku9gr8', e.target, 'user_SEqHDgW8ecIu6LFx2F6wC')
//         .then((result) => {
//             console.log(result.text);
//         }, (error) => {
//             console.log(error.text);
//         });

//         e.target.reset()
// }



const Resume = () => {
    return (
        <>
       
        {/* about */}
        <div className="aboutme-back">
        <Grid container className='section pb_45  pt_45'>
            <Grid item  className="section_title mb_30" item xs={12}>
                <span></span>
                <h6 className="section_title_txt"> About Me </h6>
            </Grid>
            <Grid item xs={12}>
            <Typography variant="body2" className="about_text">{resumeData.about}</Typography>
            </Grid>
        </Grid >
     
        {/* education experince */}
         <Grid container className='section pb_45 '>
         <Grid item  className="section_title mb_30" item xs={12}>
                <span></span>
                <h6 className="section_title_txt"> Resume </h6>
            </Grid >
            <Grid item xs={12}>
                <Grid container className="resume_timeline">
                    {/* work hist */}
                    <Grid item sm={12} md={6}>
                        <CustomTimeline title="work experince" icon={<WorkIcon/>}>
                            {resumeData.workExps.map( (workExp)=> (
                                <TimelineItem>
                                    <CustomTimelineseperator />
                                    <TimelineContent className='timeline_content'>
                                        <Typography className="timeline_title">
                                            {workExp.title}
                                        </Typography>
                                        <Typography variant='body1' className="timeline_date">
                                            {workExp.date}
                                        </Typography>
                                        <Typography variant='caption' className="timeline_description">
                                            {workExp.description}
                                        </Typography>
                                    </TimelineContent>
                                </TimelineItem>

                            ) )}
                        </CustomTimeline>
                        </Grid>
                    {/* education */}
                    <Grid item sm={12} md={6}>
                    <CustomTimeline title="Education" icon={<SchoolIcon/>}>
                            {resumeData.educationExps.map( (educationExp)=> (
                                <TimelineItem>
                                    <CustomTimelineseperator />
                                    <TimelineContent className='timeline_content'>
                                        <Typography className="timeline_title">
                                            {educationExp.title}
                                        </Typography>
                                        <Typography variant='body1' className="timeline_date">
                                            {educationExp.date}
                                        </Typography>
                                        <Typography variant='caption' className="timeline_description">
                                            {educationExp.description}
                                        </Typography>
                                    </TimelineContent>
                                </TimelineItem>

                            ) )}
                        </CustomTimeline>
                    </Grid>
                </Grid>
            </Grid>
         </Grid>
         {/* langaugess */}
         </div>
        <Grid container className='section pb_45'>
        <Grid item  className="section_title mb_30" item xs={12}>
                <span></span>
                <h6 className="section_title_txt"> Job Skills </h6>
            </Grid >


            <Grid item xs = {12}>
                <Grid container spacing={3} justify='space-around'>
                    {resumeData.jobSkills.map(jobSkill=>(
                        <Grid item xs={12} sm={6} md={3}>
                        
                    <div className="jobSkill">
                        <Icon className='jobSkill_icon'>{jobSkill.icon}</Icon>
                        <Typography className='jobSkill_title' variant='h6'>{jobSkill.title}</Typography>
                        <Typography className='jobSkill_description' variant='body2'>{jobSkill.description}</Typography>

                    </div>
                        
                        </Grid>

                    ))}
                </Grid>

            </Grid>
        </Grid>
        {/* skills */}
        <div className="skills-div">
        <Grid container  className='section graybg pb_45 p_50'>
            
            <Grid item xs={12} >
                <Grid container justify='space-between' spacing={3}>
                {resumeData.devSkills.map(devSkill =>(
                <Grid item xs={12} md={3} sm={6}>
                    <Paper elevation={0} className="devSkill">
                        <Typography variant='h6' className='devSkills_title'>
                            {devSkill.title}
                        </Typography>
                        {devSkill.description.map((element) => (
                            <Typography variant='body2' className='devSkill_description'>
                                <TimelineDot variant={'outlined'} className="timeline_dot"/>
                                    {element}
                            </Typography>
                        ))}
                    </Paper>
                </Grid>

            ) )}
                </Grid>
            </Grid>
          
        
        </Grid>
        {/* contact */}
        <Grid container spacing={5} className='section pt_45 pb_45'>
                {/* form for the contacts */}
                <Grid item xs={12} lg={7}>
                    {/* <form onSubmit={sendEmail()}> */}
                    <Grid container>
                        <Grid item className= "section_title mb_30">
                            <span></span>
                            <h6 className="section_title_text">Contact Form</h6>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <TextField fullWidth name="name" label='Name'/>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField fullWidth name="eamil" label='@email'/>
                                </Grid>
                                <Grid item xs={12} >
                                    <TextField fullWidth name="message" label='Message' multiline rows={4}/>
                                </Grid>
                                <Grid item xs={12}>
                                    <CustomButton text='Submit'  />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                {/* </form> */}
                </Grid>
                {/* contact_info */}
                <Grid item xs={12} lg={5}>
                    <Grid container>
                        <Grid item className= "section_title mb_30">
                            <span></span>
                            <h6 className="section_title_text">Contact Information</h6>

                        </Grid>
                       
                        <Grid item xs={12} >
                            <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <Typography className='contacts_item'>
                                    <span>Location: </span> {resumeData.city}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography className='contacts_item'>
                                    <span>Phone: </span> {resumeData.phone}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography className='contacts_item'>
                                    <span>Email: </span> {resumeData.email}
                                </Typography>
                            </Grid>
                            </Grid>

                        </Grid>

                   
                    <Grid item xs={12}>
                        <Grid container className="contactInfo_socialsContainer">
                            {Object.keys(resumeData.socials).map((key)=>(
                                <Grid item className="contactInfo_social"> 
                                    <a href={resumeData.socials[key].link}>
                                        {resumeData.socials[key].Icon}
                                    </a>
                                </Grid>
                                
                            ))}
                        </Grid>

                    </Grid>
                    
                </Grid>
                        
                </Grid>            
        </Grid>
    
        </div>
        </>

    )
}

export default Resume
