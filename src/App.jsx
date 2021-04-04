import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import Service from "./Service";
import About from "./About";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./Login";
import Places from "./components/Places";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/places" component={Places} />
        <Route exact path="/login" component={Login} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
