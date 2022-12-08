import React, {useEffect, useState} from "react";
import UserProfile from "./Components/UserProfile";
import MyReviews from "./Components/MyReviews";
import MyVisits from "./Components/MyVisits";

import AvailableDestinations from "./Components/AvailableDestinations";
import NavBar from "./Components/NavBar";
import DestinationProfile from "./Components/DestinationProfile";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import "./App.css";
import LoginSignupPage from "./Components/LoginSignupPage";


function App() {
  const [user, setUser] = useState(null);
  const [reviews, setReviews] = useState([])
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [destinations, setDestinations] = useState([])


  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  const unlockDestinations = () => {
    fetch('/destinations')
    .then(r => r.json())
    .then(data => setDestinations(data))
    }
  const unlockReviews = () => {
    fetch(`reviews`)
      .then((res) => res.json())
      .then((data) => setReviews(data))
  }




  if (!user) return <LoginSignupPage onLogin={setUser} />;



  return (


    <div className='App'>
      
      <div>
        <Router>
          <NavBar user={user} setUser={setUser} />
          <Routes>
          <Route exact path="/" element={<AvailableDestinations  />}></Route>
          <Route exact path="/destinationprofile" element={<DestinationProfile/>}></Route>

          <Route  path="/myreviews" element={<MyReviews user={user} reviews={reviews} setReviews={setReviews} destinations={destinations} />}></Route>
          <Route  path="/myvisits" element={<MyVisits />}></Route>
          <Route  path="/userprofile" element={<UserProfile user={user} />} ></Route>
          <Route  path="/availabledestinations" element={<AvailableDestinations />}></Route>

          </Routes>
        </Router>
      </div>
      
   

    </div>
   
  )

  }



export default App;