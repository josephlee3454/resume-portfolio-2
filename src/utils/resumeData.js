import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import CodeIcon from '@material-ui/icons/Code';
import WebIcon from '@material-ui/icons/Web';
import ComputerIcon from '@material-ui/icons/Computer';




export default {
    name: "Joseph Lee",
    title: "Software Developer",
    birthday: "September 3, 1992",
    email: "joseph.lee3454@gmail.com",
    address: "2101 7th Ave West, Seattle WA",
    phone: "760-689-5248",
    about: "Hello welcome to my web-page!!! My name is Joseph Lee and I am a former Marine turned  software developer. I have a little under two years of experience writing code in Python and JavaScript. I have strong preference to python because of the syntax makes it so easy to write elegant code. But my favorite framework is React which is happens to be a JavaScript framework. Speaking of frameworks I have strong experience in Django and React . And a pretty good understanding of Selenium, Flask, and Node.js, Mongoose. \n \n I am a graduate of Code fellow’s Intermediate JavaScript & Advance Python Course  and a current student attending the Coding-Dojo three stack curriculum which includes Python, M.E.R.N(Mongoose,Express,React,Node.JS), C# .net  core.",
    workExps:[
        {
            title: "Aegis Living",
            date: "​September 2020​ - December 2020",
            description: "Provided care and comfort to mentally confused residents. \n Assisted in helping control resident’s diets to maintain a happy healthy lifestyle.",
        },
        {
            title: "Columbia Distributing Delivery Driver",
            date: "​July 2020 - November 2020",
            description: "Organized and routed delivery route per customer request. \n Delivered product in a very prompt matter meeting very strict deadlines to meet \n every law and regulation provided by the department of transportation. \n Assessed and fixed sales errors to correctly meet the customers needs.",
        },
  
        {
            title: "USMC vehicle commander",
            date: "july 2011 - july 2015",
            description: "Deployed and troubleshooted complex weapon systems in a very effective manner. \n Used After action reviews to learn from operational success and area improvement \n Taught and led junior marines to \n effectively deploy complex weapon systems.",
        },
        
    ],
    langauges: [
        {
            title: 'Developer',
            description: 'I am a graduate of two full stack coding boot camps with knowledge of mutiple langauges and frameworks that are listed below ',
            icon:<WebIcon/>
        },
        {
            title:'Manager',
            description: 'While i have no experince leading any development teams i have been in various mangement roles thoughout my work history',
            icon:< CodeIcon />
        }
        ,
        {
            title: 'Team Player',
            description: 'I have made mutiple contributions to group projects thoughout my developer as well through out my past work history',
            icon :<ComputerIcon />
        }
    
    ],

    jobSkills:[
        {
            title: 'MERN',
            description: ["ReactJS(functional based hooks)", "JavavScript", "BootStrap", "Martieral UI", "Jquery", "NodeJS", "MongoDB","Expresss"]
        },
        {
            title: 'Python',
            description: ["Django", "Django REST APIS", "Poetry", "Pytest", "BeautifulSoup4", 'Mysql']
        }
        ,
        {
            title: 'Dev Skills/Tools',
            description: [".git", "KanBan Board", "github actions", "selnium","Docker"]
        }
    ]
    ,

    educationExps:[
        {
            title: "Coding Dojo" ,
            date: "December 2020 - Febuary 2020",
            description: "Certificate -3 Full Stack langauges Python,JavScript,and C# .Net",
        },
        {
            title: "Code Fellows Intermediate JavaScript / Advance Python" ,
            date: "February 2020 - November 2020",
            description: "Certificate - Advanced Software Development in Full-Stack Python",
        },
        {
            title: "Avera EMT Training ",
            date: " June 2017 - August 2018 ",
            description: "EMT Certification",

        },
        {
            title: "SoutEast Technical College",
            date: " July 2017 - january 2018 ",
            description: "Pre-nursing program",

        }
     
     
        
    ]
,
    socials: {
        Linkedin: {
            link: 'www.linkedin.com/in/joseph-lee-600599b9',
            text: 'My LinkedIn',
            Icon: <LinkedInIcon/>
        },
        Github: {
            link: 'https://github.com/josephlee3454?tab:epositories',
            text: 'My Github',
            Icon: <GitHubIcon/>
        }
       
    }
}