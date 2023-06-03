import './Service.css'
import Glass from '../../img/tech.jpg'
const Service=()=>{
    return(
        <div className="container-fluid" id='service'>
            <div className="row g-3 m-2">
                <div className='col-lg-4 col-md-6 col-sm-12 col-12 '>
                    <div data-aos="fade-right" className="s-left  d-flex justify-content-center flex-column ">
                        <span >My </span>
                        <span>Services</span>
                        <span>Frontend Developer with experince in web designing an development the quality work</span>
            
                        <span className='mt-3'>I   bring  <span className='text-decoration-underline'>  Ideas</span>  to web.</span>
                        <div className="blur-2" style={{top:'250%'}}></div>
                    </div>
                </div>
            <div className='col-lg-8 col-md-6 col-sm-12 col-12 '>
            <div className="row g-4 m-3 ">
                <div data-aos="flip-up" className="cards col-lg-4 col-md-6 col-sm-12 col-12 ">
                    <div className="card shadow work-card text-dark">
                        <div className="text-center"><img src={Glass} className='card-img-top' /></div>
                    <div className="card-body ">
                        <h5 className='card-title text-center'>Frontend technologies</h5>
                        <p className="card-text text-center"> HTML, CSS, Bootstrap, React-js, Redux</p>
                    </div>
                    </div>
                </div>

                <div data-aos="flip-up" className="cards col-lg-4 col-md-6 col-sm-12 col-12 ">
                    <div className="card shadow work-card text-dark">
                    <div className="text-center"><img src={Glass} className='card-img-top' /></div>
                    <div className="card-body">
                    <h5 className='card-title'>Languages</h5>
                        <p className="card-text"> C , C++</p>
                    </div>
                    </div>

                </div>

                <div data-aos="flip-up" className="cards col-lg-4 col-md-6 col-sm-12 col-12 ">
                    <div className="card shadow work-card text-dark">
                    <div className="text-center"><img src={Glass} className='card-img-top'/></div>
                    <div className="card-body">
                        <h5 className='card-title'>DataBase</h5>
                        <p className="card-text"> MySQL</p>
                    </div>
                    </div> 

                </div>
            </div>

             </div>
            </div>
        </div>
    )
}
export default Service