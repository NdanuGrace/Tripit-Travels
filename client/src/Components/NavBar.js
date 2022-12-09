
import React from 'react';
import { Link } from 'react-router-dom';
    // const history = useHistory()
    function NavBar({ user, setUser }) {
        function handleLogoutClick() {
          fetch("/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
              setUser(null);
            }
          });
        }

    return (
        <div className='nav'>
            <div className='logo-div'>
            </div>
            <div className='links-div'>
                {/* <h1><Link to="/userprofile" className='nav-links'>PROFILE</Link></h1> */}

                <h1><Link to="/myvisits" className='nav-links'>MY VISITS</Link></h1>
                <h1><Link to="/myreviews" className='nav-links'>MY REVIEWS</Link></h1>
                <h1><Link to="/availabledestinations" className='nav-links'>AVAILABLE DESTINATIONS</Link></h1>

            </div>
            <div className="navLogoutDiv">
                <button  onClick={handleLogoutClick} className="navLogout"  >LOG OUT</button>
            </div>
            <p class="copyright">Tripit Travels © 2022</p>

        </div>
    )
}
 
export default NavBar;