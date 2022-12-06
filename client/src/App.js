import React, {useEffect, useState} from "react";
import UserProfile from "./Components/UserProfile";
import MyReviews from "./Components/MyReviews";
import MyVisits from "./Components/MyVisits";
import NavBar from "./Components/NavBar";
import LoginPage from "./Components/LoginPage";
import { Route, Switch, Redirect } from 'react-router-dom';

// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AvailableDestinations from "./Components/AvailableDestination";
import "./App.css";


function App(){
//   return(

//     <div className='App'>

//       <div>
//         <Router>
//           <div>
            
//        <NavBar/>

//       </div>
//       <Switch>
//       <Route exact path="/" element={<AvailableDestinations/>}></Route>
//       {/* <Route exact path="/about" element={<About/>}></Route> */}
//             <Route exact path="/myreviews" element={<MyReviews/>}></Route>

//       <Route exact path="/myvisits" element={<MyVisits/>}></Route> 
//       <Route exact path="/userprofile" element={<UserProfile />} ></Route>
//       <Route exact path="/availabledestinations" element={<AvailableDestinations />}></Route> 
    
//       </Switch>
//       </Router>
//       </div>
    
 


//   </div>
//   )
   
  
// }
const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [houses, setHouses] = useState([])
  const [reviews, setReviews] = useState([])
  const [selectedState, setSelectedState] = useState('All')

  // useEffect(() => {
  //   fetch('/authorized_user')
  //   .then(r => {
  //     if(r.ok){
  //       r.json()
  //       .then(user => {
  //         setIsAuthenticated(true)
  //         setUser(user)
  //       })
  //       .then(unlockHouses)
  //       .then(unlockReviews)
  //     }
  //   })
  // }, []);

  // const unlockHouses = () => {
  //   fetch('/destinations')
  //   .then(r => r.json())
  //   .then(data => setHouses(data))
  //   }
  // const unlockReviews = () => {
  //   fetch(`http://localhost:3000/reviews/${user.id}`)
  //     .then((res) => res.json())
  //     .then((data) => setReviews(data))
  // }

  const filterHouses = () => {
    if(selectedState === "All"){
        return houses
    } else {
        return houses.filter(h => h.location.toLowerCase().includes(selectedState.toLowerCase()))
    }
}

  if(!isAuthenticated) return <LoginPage setUser={setUser} setIsAuthenticated={setIsAuthenticated} />
  return (
      <div className="app">
        <Switch>
          <Route exact path="/">
            {isAuthenticated ? <Redirect to= "/availabledestinations"/> : <LoginPage  setUser={setUser} setIsAuthenticated={setIsAuthenticated}/>}
          </Route>
          <div>
            <NavBar setUser={setUser} setIsAuthenticated={setIsAuthenticated} />
            <div className="body">
              <Route exact path="/availabledestinations">
                  {isAuthenticated ? <AvailableDestinations houses={filterHouses()} setSelectedState={setSelectedState} selectedState={selectedState} /> : <Redirect to="/"/>}
              </Route>
              <Route path="/userprofile">
                {isAuthenticated ? <UserProfile user={user}/> : <Redirect to="/"/>}
              </Route>
              <Route path="/myvisits">
                {isAuthenticated ? <MyVisits user={user} houses={houses}/> : <Redirect to="/"/>}
              </Route>
              <Route path="/myreviews">
                {isAuthenticated ? <MyReviews user={user} reviews={reviews} setReviews={setReviews} houses={houses}/>  : <Redirect to="/"/>}
              </Route>
              <Route path="/availabledestinations/:id">
                {isAuthenticated ? <UserProfile user={user}/>  : <Redirect to="/"/>}
              </Route>
            </div>
          </div>
        </Switch>
      </div>
  );
}
export default App;