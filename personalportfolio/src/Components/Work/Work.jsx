import work1 from '../../img/proj7.png'
import work2 from '../../img/food-ordering-system.jpg'
import work3 from '../../img/proj3.png'
import './Work.css'
const Work=()=>{
    return(
        <div className="container-fluid" id='work'>
            <div  data-aos="zoom-in"className='text-center work m-2'>Work</div>
            <div className="row g-3 m-2">
                <div className="w-cards col-lg-4 col-md-6 col-sm-12 col-12">
                    <div data-aos="zoom-in" className="card">
                        <div  className="img-fluid">
                            <img src={work1} data-aos="flip-up"className='rounded card-img-top p-1'/>
                        </div>
                        <div className="crad-body m-3 text-center">
                            <h5 className="card-title">Restaurant App</h5>
                            <p className="card-text ">This App is created with reactjs for Restaurant to show case there foodies online and also place order online.</p>
                            <a href="https://bigdaddyforfoodies.live/">click here to see</a>
                        </div>
                    </div>
                </div>

                <div className="w-cards col-lg-4 col-md-6 col-sm-12 col-12">
                <div data-aos="zoom-in"className="card">
                        <div className="img-fluid">
                            <img src={work2} data-aos="flip-up"className='card-img-top p-1'  />
                        </div>
                        <div className="crad-body m-3 text-center">
                            <h5 className="card-title">Food ordering system</h5>
                            <p className="card-text">The Online Food ordering system is a web application in which one can order foods and beverages from restaurant through the use of internet, just by sitting at home or any place.</p>
                            <a href="https://restro.pythonanywhere.com/foodie/">click here to see</a>

                        </div>
                    </div>
                </div>

                <div className="w-cards col-lg-4 col-md-6 col-sm-12 col-12">
                <div data-aos="zoom-in"className="card">
                        <div className="img-fluid">
                            <img src={work3} data-aos="flip-up"className='card-img-top p-1' />
                        </div>
                        <div className="crad-body m-3  text-center">
                            <h5 className="card-title">Personal Portfolio</h5>
                            <p className="card-text">Constructed a personalized portfolio website with React, showcasing work history, academic accomplishments,
                            technical skills, and extracurricular activities.
</p>
                            <a href="#">click here to see</a>

                        </div>
                    </div>
                </div>
                <div className="blur1" style={{top:'250%'}}></div>
            </div>
        </div>
    )
}
export default Work;