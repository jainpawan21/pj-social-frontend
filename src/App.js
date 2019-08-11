import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" render={() => <SignIn />} exact />
            <Route path="/signup" render={() => <SignUp />} exact />
          </Switch>
        </div>
      </BrowserRouter>

    </div>

  );
}

export default App;
