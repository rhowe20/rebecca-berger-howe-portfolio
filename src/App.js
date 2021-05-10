import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Homepage from "../src/pages/home";
import Projects from "../src/pages/projects";
import Contact from "../src/pages/contact";
import About from "../src/pages/about"
import NavBar from "../src/components/nav/nav";
import Footer from "../src/components/footer/footer";

const App = () => {
  return (
    <HashRouter>
      <NavBar/>
        <Switch>
          <Route exact path='/' component={Homepage}></Route>
          <Route path='/about' component={About}></Route>
          <Route path='/project' component={Projects}></Route>
          <Route path='/contact' component={Contact}></Route>
        </Switch>
      <Footer/>  
  </HashRouter>
  )
}

export default App;
