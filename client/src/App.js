// import React from "react";
// import "./App.css";
// import { Switch, Route } from "react-router-dom";

// import AvailableDestinations from "./Components/AvailableDestinations";
// function App() {
 
//   return (
//     <div className="app">
//     <Switch>
//       <Route exact path="/">
//         {isAuthenticated ? <Redirect to= "/availabledestinations"/> : <LoginSignUpPage  setUser={setUser} setIsAuthenticated={setIsAuthenticated}/>}
//       </Route>
//       <div>
//         <NavBar setUser={setUser} setIsAuthenticated={setIsAuthenticated} />
//         <div className="body">
//           <Route exact path="/availabledestinations">
//               {isAuthenticated ? <AvailableDestinations houses={filterHouses()} setSelectedState={setSelectedState} selectedState={selectedState} /> : <Redirect to="/"/>}
//           </Route>
//           <Route path="/userprofile">
//             {isAuthenticated ? <UserProfile user={user}/> : <Redirect to="/"/>}
//           </Route>
//           <Route path="/myvisits">
//             {isAuthenticated ? <MyVisits user={user} houses={houses}/> : <Redirect to="/"/>}
//           </Route>
//           <Route path="/myreviews">
//             {isAuthenticated ? <MyReviews user={user} reviews={reviews} setReviews={setReviews} houses={houses}/>  : <Redirect to="/"/>}
//           </Route>
//           <Route path="/availablehouses/:id">
//             {isAuthenticated ? <HouseProfile user={user}/>  : <Redirect to="/"/>}
//           </Route>
//         </div>
//       </div>
//     </Switch>
//   </div>
//   );
// }


// export default App;
