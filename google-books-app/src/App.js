
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/nav/index";
import Search from "./components/cards/search";
import Saved from "./components/cards/saved";


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav/>
          <Route exact path="/" component={Search} />
          <Route exact path="/mybooks" component={Saved} />
        </div>
      </Router>   
    );
  }
}

export default App;