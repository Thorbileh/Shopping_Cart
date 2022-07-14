import { Link, useNavigate } from 'react-router-dom';
import image1 from './images/220156854.webp';
import hotel1 from './images/Country_Boutique_Hotel/country-boutique-hote.jpg'
import hotel2 from './images/House Lodge/white-house-lodge1.jpg'
import hotel3 from './images/Khayalami Hotel/khayalami-boutique-hotel (1).jpg'
import LandingModule from './Landing.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar
} from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';
import { useState } from 'react';
import {logout, useAuth} from '../firebase/index';
// import Profile from './profile';
import Profile from './UI/profile'
library.add(faStar);

const Landing = () => {
  const navigate = useNavigate();
      //to get the current user logged into your website
      const currentUser = useAuth();

      //for the program not to take time when it loads information to firebase
          const [loading,setLoading] = useState(false);

  const viewMore1 = () => {

    navigate("/CountryBoutiqueInfo")
  }
  const viewMore2 = () => {

    navigate("/HouseLodge")
  }
  const viewMore3 = () => {

    navigate("/khayalamiInfo")
  }
  async function handleLogout(){
    setLoading(true);
  try { 
    logout()
} catch{
    alert("Couldn't logout");
}
setLoading(false);
}

  return (
    <body>
      <div>   {currentUser&& <>
        <Profile/>
        <button disabled={loading || !currentUser} onClick={handleLogout}>Log out</button>
       </>}</div>
      <div className={LandingModule.fill}>

        <img src={image1} alt="" width='1800' />
        <nav>
          <Link to="/">Home</Link>
          <Link to="/register">Register</Link>
          <Link to="/Login">Login</Link>
          <Link to="/About">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/Services">Services</Link>

        </nav>

        <div className={LandingModule.find}>
          <h1>Find A place You Want To Visit</h1>
          <p>Search Low Prices on your favourable hotel</p>
        </div>
      </div>
      <div className={LandingModule.search}>
        <div className={LandingModule.destination} >
          Select&nbsp;destination
        <select class="Destination" name="" >
          <option value="Country Boutique Hotel" class='option'>Country Boutique Hotel</option>
          <option value="Dunkeld Country & Equestrian Estate" class='option'>Dunkeld Country & Equestrian Estate</option>
          <option value="House Lodge" class='option'>House Lodge</option>
          <option value="Ingwenyama Conference & Sports Resort" class='option'>Ingwenyama Conference & Sports Resort</option>
          <option value="Khayalami Hotel" class='option'>Khayalami Hotel</option>
          <option value="Welgelegen Manor" class='option'>Welgelegen Manor</option>
        </select>
        </div>

        <div className={LandingModule.destination}>
          Check-In<br />
          <input type="date" id="checkIn" name="checkIn" />
        </div>
        <div className={LandingModule.destination}>
          Check-Out<br /><input type="date" id="checkout" name="checkout" />
        </div>
        <div className={LandingModule.destination}>
          Adults<br />
          <input type="number" name="" placeholder="0" />
        </div>
        <div className={LandingModule.destination}>
          Children<br />
          <input type="number" name="" placeholder="0" />
        </div>
        <div className={LandingModule.destination}>
        <button type="submit" name="button" class="butSearch">Search</button>
        </div>
        

      </div>
      <div className={LandingModule.destinPopular}>
        <h2>Destination</h2>
        <h1>Place To Be</h1>
      </div>
      <div className={LandingModule.Hotels}>

        <div className={LandingModule.Country} >
          <img src={hotel1} /><br />
          <span className={LandingModule.checked}><FontAwesomeIcon icon="fa-solid fa-star " /></span>
          <span className={LandingModule.checked}><FontAwesomeIcon icon="fa-solid fa-star " /></span>
          <span className={LandingModule.checked}><FontAwesomeIcon icon="fa-solid fa-star" /></span>
          <span className={LandingModule.checked}><FontAwesomeIcon icon="fa-solid fa-star" /></span>
          <span ><FontAwesomeIcon icon="fa-solid fa-star" /></span>
          <h3>Country Boutique Hotel</h3>
          <button type="submit" name="button" onClick={viewMore1}>View More</button>
        </div>
        <div className={LandingModule.Country} >
          <img src={hotel2} /><br />
          <span className={LandingModule.checked}><FontAwesomeIcon icon="fa-solid fa-star " /></span>
          <span className={LandingModule.checked}><FontAwesomeIcon icon="fa-solid fa-star " /></span>
          <span className={LandingModule.checked}><FontAwesomeIcon icon="fa-solid fa-star" /></span>
          <span className={LandingModule.checked}><FontAwesomeIcon icon="fa-solid fa-star" /></span>
          <span ><FontAwesomeIcon icon="fa-solid fa-star" /></span>
          <h3>White House Lodge</h3>
          <button type="submit" name="button" onClick={viewMore2}>View More</button>
        </div>
        <div className={LandingModule.Country} >
          <img src={hotel3} /><br />
          <span className={LandingModule.checked}><FontAwesomeIcon icon="fa-solid fa-star " /></span>
          <span className={LandingModule.checked}><FontAwesomeIcon icon="fa-solid fa-star " /></span>
          <span className={LandingModule.checked}><FontAwesomeIcon icon="fa-solid fa-star" /></span>
          <span className={LandingModule.checked}><FontAwesomeIcon icon="fa-solid fa-star" /></span>
          <span ><FontAwesomeIcon icon="fa-solid fa-star" /></span>
          <h3>Khayalami Hotel</h3>
          <button type="submit" name="button" onClick={viewMore3}>View More</button>
        </div>


      </div>
      <div className={LandingModule.whyUs}>
        <h2 className={LandingModule.pi}>Why Choose Us</h2>

        <div >
          <h2>Best Price Guarantee</h2>
          <p>xcdc vddrghrth rthrthrt rthrthr rthrthrr
            rthth rrht trhhy rthyry ryrh accesskey="rrr rh
            rrhrt rhy rfrthjuthrrtr tghrthjsk skjhewdhbc
            eyceydhc tghrthjskdbdchb
            brthrt
            "</p>

        </div>
        <div >
          <h2>Best Price Guarantee</h2>
          <p>xcdc vddrghrth rthrthrt rthrthr rthrthrr
            rthth rrht trhhy rthyry ryrh accesskey="rrr rh
            rrhrt rhy rfrthjuthrrtr tghrthjsk skjhewdhbc
            eyceydhc tghrthjskdbdchb
            brthrtuyiyuiykh
            ljkl</p>

        </div>
        <div >
          <h2>World Class Services</h2>
          <p>xcdc vddrghrth rthrthrt rthrthr rthrthrr
            rthth rrht trhhy rthyry ryrh accesskey="rrr rh
            rrhrt rhy rfrthjuthrrtr tghrthjsk skjhewdhbc
            eyceydhc tghrthjskdbdchb
            brthrt
            "</p>

        </div>

      </div>
    </body>
  );
}
export default Landing;