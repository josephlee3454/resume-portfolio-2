import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import { Typography } from '@material-ui/core';
// import CodeIcon from '@material-ui/icons/Code';
import './Timeline.css'


const CustomTimeline=({title,children,icon })=> {
  return (
    <Timeline className="timeline">
        {/* item header  */}
      <TimelineItem className="timeline_first-item">
        <TimelineSeparator>
          <TimelineDot className="timeline_dot_header">{icon}</TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
            <Typography variant='h6' className='timelime_header'>
                {title}
            </Typography>
            </TimelineContent>
      </TimelineItem>

        {children}
    </Timeline>
  );
}
export const CustomTimelineseperator = () => (
    <TimelineSeparator className='seperator_padding'>
    <TimelineDot variant={'outlined'} className="timeline_dot"/>
    <TimelineConnector />
    </TimelineSeparator>

)

export default CustomTimeline