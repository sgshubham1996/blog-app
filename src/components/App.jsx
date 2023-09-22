import React from "react";
import TopBar from "../components/TopBar";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Settings from "./Settings";
import Single from "./Single";
import Write from "./Write";
import { BrowserRouter as Router , Switch , Route, Link} from "react-router-dom";



function App() {

  const user= false;

  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/" >
          <Home />
        </Route>
        <Route path="/register" >
          {user ? <Home /> : <Register />}
        </Route>
        <Route exact path="/login" >
          {user ? <Home /> : <Login />}
        </Route>
        <Route exact path="/write" >
          {user ? <Write /> : <Register />}
        </Route>
        <Route exact path="/settings" >
          {user ? <Settings /> : <Register />}
        </Route>
        <Route exact path="/post/:postId" >
          <Single />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
