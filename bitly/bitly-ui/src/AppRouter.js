import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ShortUrl from './container/ShortUrl'
import register from './container/register'
import NavBar from "./container/NavBar";
import ShortUser from "./container/ShortUser";
import Signing from "./container/Signing";

function AppRouter() {
  return (
    <Router>
        <div>
<NavBar/>

        <Route exact path="/" component={ShortUrl} />
        <Route path="/signing" component={Signing} />
        <Route path="/shortUser" component={ShortUser} />
        <Route path="/register" component={register} />
        </div>
    </Router>
  );
}

export default AppRouter