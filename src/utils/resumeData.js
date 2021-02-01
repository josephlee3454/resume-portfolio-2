import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';




export default {
    name: "Joseph Lee",
    title: "Software Developer",
    birthday: "September 3, 1992",
    email: "joseph.lee3454@gmail.com",
    address: "2101 7th Ave West, Seattle WA",
    phone: "760-689-5248",

    socials: {
        Linkedin: {
            link: 'www.linkedin.com/in/joseph-lee-600599b9',
            text: 'My LinkedIn',
            Icon: <LinkedInIcon/>
        },
        Github: {
            link: 'https://github.com/josephlee3454?tab=repositories',
            text: 'My Github',
            Icon: <GitHubIcon/>
        }
       
    }

}