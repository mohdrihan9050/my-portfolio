import './Hobby.css'
import chess from '../../img/chess4.jpg'
const Hobby=()=>{
    return(
        <div className="container-fluid ">
            <div className="row m-2 mt-5">
                <div data-aos="flip-up" className="text-center mt-5 col-lg-6 col-md-6 col-sm-12 col-12">
                    <img src={chess} className="chess1 img-fluid"/>

                </div>
                <div  className="col-lg-6 col-md-6 col-sm-12 col-12 ">
                   <div data-aos="fade-right"  className="text-center hobby me-5 mt-5 ">
                    <span>My </span>
                    <span>  Hobby</span>
                    </div>
                    <div data-aos="fade-up" className='m-1 '>
                        <p >When I am not working or learning , I <span className="text-danger">♥</span> to spend time
							 with playing  chess. I also play cricket in my free time.</p>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Hobby;