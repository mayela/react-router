import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter, Switch } from "react-router-dom";

import "./index.css";
import App from "./components/App";
import Users from "./components/Users";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";

const routing = (
  <BrowserRouter>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/users" component={Users} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(routing, document.getElementById("root"));
