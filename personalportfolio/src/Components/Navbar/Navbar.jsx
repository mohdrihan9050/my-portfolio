import './Navbar.css'
import {Link} from 'react-scroll';
const Navbar=()=>{
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light  fixed-top bg-custom">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{'{Mohd Rihan}'}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul className="navbar-nav ms-1 mt-auto">
        <li className="nav-item mt-1">
          {/* <link className="nav-link">Home</link> */}
          <Link activeClass="active" to="home"offset={-75} spy={true} smooth={true} className="nav-link cursor-pointer">Home</Link>
        </li>
        <li className="nav-item mt-1">
        <Link activeClass="active" to="about" offset={-75} spy={true} smooth={true} className="nav-link cursor-pointer">About</Link>
        </li>
        <li className="nav-item mt-1">
        <Link activeClass="active" to="service" offset={-75} spy={true} smooth={true} className="nav-link cursor-pointer">My Services</Link>
        </li>

        <li className="nav-item mt-1">
        <Link activeClass="active" to="work"offset={-75} spy={true} smooth={true} className="nav-link cursor-pointer">Work</Link>
        </li>

        <li className="nav-item mt-1">
        <Link activeClass="active" to="certificate" offset={-75} spy={true} smooth={true} className="nav-link cursor-pointer">Certificates</Link>
        </li>

        <Link activeClass='active' to='contact' offset={-75} spy={true} smooth={true} className='nav-link cursor-pointer'>
        <button className="button n-button">Contact</button>
        </Link>
      </ul>
      
    </div>
  </div>
</nav>
        </>
    )
}
export default Navbar;