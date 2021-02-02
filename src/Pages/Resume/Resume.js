import React from 'react'
import { Grid, Typography , Icon} from '@material-ui/core'
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







const Resume = () => {
    return (
        <>
        
        {/* about */}
     
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
        <Grid container className='section'>
        
        </Grid>
    
        </div>
        </>

    )
}

export default Resume
