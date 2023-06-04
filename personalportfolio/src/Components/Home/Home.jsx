import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Img from '../../img/rihan.png'
import './Home.css'
import resume from '../../img/resume.pdf'
const Home=()=>{
    return(
        <div className="container-fluid" id='home'>
            <div className="row mt-5 ">
                <div  className="left  col-lg-6 col-md-6 col-sm-12 col-12 g-5">
                <span data-aos="fade-right">Hey! I am</span>
                <span data-aos="fade-left">Mohd Rihan</span>
                <span data-aos="fade-right">(Frontend Developer)</span>

                <a data-aos="zoom-in" href={resume} download>
                    <button className="button n-button">Download CV!</button>
                </a>
                <div data-aos="zoom-out" className="h-icon mt-3">
                 <a href="https://github.com/mohdrihan9050">
                    <GitHubIcon className='icon'/>
                 </a>
                 <a href="https://www.linkedin.com/in/mohd-rihan-78b36a22b/">
                    <LinkedInIcon className='icon'/>
                 </a>
                 <a href="mailto:project.rihan@gmail.com">
                    <MailOutlineIcon className='icon'/>
                 </a>
                </div>
                        <div className="blur-1"> </div>
						<div className="blur-2"> </div>
                </div>
                <div  className="col-lg-6 col-md-6 col-sm-12 col-12 ms-0 right">
                    <img data-aos="fade-up" src={Img} className='container-fluid img1'/>
                </div>
            </div>
        </div>
    )
}
export default Home;