import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from './components/NavBar'
import Home from './pages/Home'
// import Footer from './components/Footer'
function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <NavBar />
          <Switch>
            <Route path="/" render={()=> <Home />} />
          </Switch>
          {/* <Footer /> */}
        </div>
      </BrowserRouter>

    </div>
   );
}

export default App;
