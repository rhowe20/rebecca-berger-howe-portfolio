import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Homepage from "../src/pages/home/home";
import Projects from "../src/pages/project/projects";
import Contact from "../src/pages/contact/contact";
import About from "./pages/about/about"
import NavBar from "../src/components/nav/nav";
import Footer from "../src/components/footer/footer";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <HashRouter>
      <NavBar/>
        <Switch >
          <Route exact path='/*' component={Homepage}></Route>
          <Route path='/about' component={About}></Route>
          <Route path='/project' component={Projects}></Route>
          <Route path='/contact' component={Contact}></Route>
        </Switch>
      <Footer/>  
  </HashRouter>
  )
}

export default App;
