import React from "react";
import "./App.css";
import Home from "./pages";
import ContactPage from "./pages/contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ServicesPage from "./pages/services";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/contact" component={ContactPage} exact />
        <Route path="/services" component={ServicesPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
