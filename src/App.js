import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import SignIn from './components/SignIn'
// import SignUp from './components/SignUp'
import Home from './components/Home'

function App() {

  // function requireCheck() {
	// 	if (localStorage.getItem("token")) {
	// 		return true;
	// 	}
	// 	return false;
  // }
  
  
  return (
    <div>
      <BrowserRouter>
        <div>
          <Switch>
            {/* <Route path="/" render={() => requireCheck() ? (<Redirect to ="/home" />) : (<SignIn />)} exact />
            <Route path="/signup" render={() => requireCheck() ? (<Redirect to ="/home" />) : (<SignUp />)} exact /> */}
            <Route path="/home" render={()=> <Home /> } />
          </Switch>
        </div>
      </BrowserRouter>

    </div>
   );
}

export default App;
