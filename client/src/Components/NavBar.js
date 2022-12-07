
import React from 'react';
import { Link } from 'react-router-dom';
function NavBar() {
    // const history = useHistory()
    // function handleLogout(){
    //     fetch('/logout', {
    //         method: 'DELETE',
    //     }).then(() => {
    //         setIsAuthenticated(false)
    //         setUser(null)
    //         history.push('/')
    //     });
    // }

    return (
        <div className='nav'>
            <div className='logo-div'>
            </div>
            <div className='links-div'>
                <h1><Link to="/userprofile" className='nav-links'>PROFLE</Link></h1>
                <h1><Link to="/myvisits" className='nav-links'>MY VISITS</Link></h1>
                <h1><Link to="/myreviews" className='nav-links'>MY REVIEWS</Link></h1>
                <h1><Link to="/availabledestinations" className='nav-links'>AVAILABLE DESTINATIONS</Link></h1>
            </div>
            <div className="navLogoutDiv">
                <button  className="navLogout"  >LOG OUT</button>
            </div>
        </div>
    )
}
 
export default NavBar;