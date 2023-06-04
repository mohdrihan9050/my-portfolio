import cert1 from '../../img/cert1.png'
import cert2 from '../../img/cert2.png'
import cert3 from '../../img/cert3.png'
import './Certificate.css'
const Certificate =()=>{
    return(
        <div className="container-fluid" id='certifcate'>
            <div  data-aos="fade-up"className="certificate m-2 text-center">Certificates</div>
            <div className="row g-3 m-3">
                <div className="c-card col-lg-4 col-md-4 col-sm-12 col-12">
                    <div data-aos="zoom-out" className="card">
                        
                            <img src={cert1} className='card-img-top'/>
                        
                        {/* <div className="card-body"> */}
                            <a className='ms-2 mt-1' href="https://www.coursera.org/account/accomplishments/verify/XJ7YGJ4CX23E">see crediantiol</a>
                        {/* </div> */}
                    </div>
                </div>

                <div className="c-card col-lg-4 col-md-4 col-sm-12 col-12">
                    <div data-aos="zoom-out" className="card">
                            <img src={cert2} className='card-img-top'/>
                        {/* <div className="card-body"> */}
                            <a className='ms-2' href="https://www.freecodecamp.org/certification/mohdrihanzi786/responsive-web-design">see crediantiol</a>
                        {/* </div> */}
                    </div>
                </div>

                <div className="c-card col-lg-4 col-md-4 col-sm-12 col-12">
                    <div data-aos="zoom-out" className="card">
                            <img src={cert3} className='card-img-top'/>
                        {/* <div className="card-body"> */}
                            <a className='mt-3 ms-2' href="https://verify.letsupgrade-in/certificate/LUECPFEB123400">see crediantiol</a>
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Certificate;