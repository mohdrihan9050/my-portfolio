import Img2 from '../../img/rih12.png'
import './About.css'
const About =()=>{
    return(
        <div className="about container-fluid" id='about'>
            <span data-aos="fade-right" className='d-flex justify-content-center mt-5 mb-3 mobile'> About</span>
            <div className="row m-0">
                <div className="a-left col-lg-4 col-md-6 col-sm-12 col-12 ">
                <img data-aos="zoom-in" src={Img2} className='img-2 img-fluid' alt="" />

                </div>
                <div data-aos="fade-down"className="a-right col-lg-8 col-md-6 col-sm-12 col-12 mt-4 pt-5 ">
                    <span >Hello , I am Mohd Rihan from Bijnor, Uttar Pradesh, India.Recently i complete my post gradution in Master's of Computer Application (2023) from Kamla Nehru Institute of Technology , Sultanpur.<br/>As a fron-tend developer i have solid understanding of front-end technologies and web developing principle.</span>
                    <div className="blur-1" style={{top:'170%'}}></div>

                <div className='d-flex justify-content-end me-5'>
                    <a href="mailto:project.rihan@gmail.com">
                    <button className="button n-button mt-3">Hire me!</button>
                    </a>
                </div>

                    
                </div>
            </div>
        </div>
    )
}
export default About