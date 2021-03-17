import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import CodeIcon from '@material-ui/icons/Code';
// import WebIcon from '@material-ui/icons/Web';
// import ComputerIcon from '@material-ui/icons/Computer';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import Porjectone from '../componenets/assets/images/project-one.png';
import Projecttwo from'../componenets/assets/images/projecttwo.jpeg';
import Projectthree from'../componenets/assets/images/reume-prof.png';



export default {
    name: "Joseph Lee",
    title: "Software Developer",
    birthday: "September 3, 1992",
    email: "joseph.lee3454@gmail.com",
    city: "Seattle WA",
    phone: "760-689-5248",
    about: "Hello Welcome to My Resume page!!!!! My name is Joseph Lee and I am a former Marine turned software developer. I am also graduate of Code fellow’s Intermediate JavaScript & Advance Python Course and a graduate from the  Coding-Dojo’s Python, Java script (M.E.R.N), C# .net core. ",
    workExps:[
        {
            title: "Safeway",
            date: "​January 2020- September 2020",
            description: "Ranked as Top 3 Checker store wide,\n Implemented COVID 19 plan for entire store, \n Frequently assigned managerialresponsibilities",
        },
        {
            title: "Columbia Distributing Delivery Driver",
            date: "​July 2020 - November 2020",
            description: "Rookie Driver of Month. Restructured the order process for two major vendors in order to save the company $3,000 /month. Saved the company $10000/month by reducing product losses from 3 othergrocery vendors.",
        },
  
        {
            title: "USMC vehicle commander",
            date: "july 2011 - july 2015",
            description: "Awarded Certification of Commendation for effectively repelling a night ambush(Afghanistan 2012). Meritorious Mast for organizing and leading 20 hours of instruction to 30marines and supervised live fire maneuvers (August 2013). Awarded Certificate of Appreciation from Charge De` Affairs Sana Yemen security platoon. 1 of 3 marines chosen to represent my company in the Marine Corps Machine Gun Leaders Course, where we were taught to tactically lead platoons in combat..",
        },
        
    ],
    jobSkills: [
        {
            title: 'Developer',
            description: 'I am a graduate of two full stack coding boot camps with knowledge of mutiple langauges and frameworks that are listed below ',
            icon:<CodeIcon/>
        },
        {
            title:'Manager',
            description: 'While i have no experince leading any development teams i have been in various mangement roles thoughout my work history',
            icon:< SupervisedUserCircleIcon />
        }
        ,
        {
            title: 'Team Player',
            description: 'I have made mutiple contributions to group projects thoughout my developer as well through out my past work history',
            icon :<PeopleOutlineIcon />
        }
    
    ],
    projects:[
        {
            tag: 'React/Django',
            image: 'https://codyparker.com/wp-content/uploads/2016/10/dj-react.png',
            title: "Caller App",
            caption:"twilio powered",
            description: "This project was built with react and a django backend using a twilio api to handle calls. We built this project as a hr tool that will automatically run down a list by seniority to find a replacement and will leave them an automated voice message. ",
            links:[
            {link: 'https://github.com/slow-and-serious/caller-app', icon: <GitHubIcon /> },
            {link: 'https://github.com/slow-and-serious/caller-app', icon: <CodeIcon /> }
            ]
        },
        {
            tag: 'Django',
            image: 'https://miro.medium.com/max/700/0*2FHPEDZ26S-p4ozK.png',
            title: "Penny-Pinchers",
            caption:"selenium powered",
            description: "This project was built by repurposing a selenium web driver into automatically taking text data for us to show the user. We built this to help people find cheap plane tickets",
            links:[
            {link: 'https://github.com/401n1-midterm/penny-pincher', icon: <GitHubIcon /> },
            {link: 'https://github.com/401n1-midterm/penny-pincher', icon: <CodeIcon /> }
          
            ]
        },
        {
            tag: 'React',
            image: 'https://colorlib.com/wp/wp-content/uploads/sites/2/react-dev-tools-logo.jpg',
            title: "Resume",
            caption:"Martieral Js",
            description: "	This project was built with react and material ui to make me a fully responsive resume site.",

            links:[
            {link: 'https://github.com/josephlee3454/resume-portfolio', icon: <GitHubIcon /> },
            {link: 'https://github.com/josephlee3454/resume-portfolio', icon: <CodeIcon /> }
            ],
        },
    ],

    devSkills:[
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
            link: 'https://www.linkedin.com/in/joseph-lee-600599b9/',
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
