import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='main-footer'>
      <div className='container'>
        <div className='row'>

          {/*column 1*/}
          <div className='col'>
            
            <h4>GODREJ INFOTECH</h4>
            <ul className='list-unstyled'>
              <li>022-6796-4005</li>
              <li>Maharashtra, India </li>
              <li>Pirojshanagar, Vikhroli (W), Mumbai</li>
            </ul>
          </div>
          {/*column 2*/}
          <div className='col'>
            <h4>MORE ABOUT GODREJ </h4>
            <ul className='list-unstyled'>
              <li><Link to="/" style={{color: "white"}}>Godrej Interio</Link></li>
              <li><Link to="/" style={{color: "white"}}>Godrej Manufacture</Link></li>
              <li><Link to="/" style={{color: "white"}}>Godrej Constructions </Link></li>
              
            </ul>
          </div>
          {/*column 3*/}
          <div className='col'>
            <h4>SOCIAL MEDIA </h4>
            <ul className='list-unstyled'>
              <li><i class="fa-brands fa-twitter"></i> &nbsp; TWITTER</li>
              <li><i class="fa-brands fa-facebook-f"></i> &nbsp; &nbsp;FACEBOOK</li>
              <li><i class="fa-solid fa-envelope"></i> &nbsp; EMAIL </li>
            </ul>
          </div>
        </div>
        <hr className='hori'/>
        <div className='
        row'>
          <p className='col-sm'>
            &copy;{new Date().getFullYear()} GODREJ INFOTECH &nbsp;|&nbsp; All Rights Reserved &nbsp;|&nbsp; Terms Of Service &nbsp; | &nbsp; Privacy
          </p>
        </div>

      </div>
    </div>
  )
}

export default Footer