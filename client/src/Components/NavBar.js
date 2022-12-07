
import React from 'react';
import { Link } from 'react-router-dom';
function NavBar({onLogout}) {
    // const history = useHistory()
    function handleLogout() {
        fetch("/logout", {
          method: "DELETE",
        }).then(() => onLogout());
      }

    return (
        <div className='nav'>
            <div className='logo-div'>
            </div>
            <div className='links-div'>
                <h1><Link to="/userprofile" className='nav-links'>PROFILE</Link></h1>

                <h1><Link to="/myvisits" className='nav-links'>MY VISITS</Link></h1>
                <h1><Link to="/myreviews" className='nav-links'>MY REVIEWS</Link></h1>
                <h1><Link to="/availabledestinations" className='nav-links'>AVAILABLE DESTINATIONS</Link></h1>
            </div>
            <div className="navLogoutDiv">
                <button onClick={handleLogout} className="navLogout"  >LOG OUT</button>
            </div>
        </div>
    )
}
 
export default NavBar;