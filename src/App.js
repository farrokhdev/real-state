import React, { useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { SlidesData as slides } from "./data/SlidesData";
import Dropdown from "./components/Dropdown";
import About from "./components/About";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { colors } from "./styles/Variables";

const App = () => {
  const [isopen, setIsopen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const toggle = () => {
    setIsopen(!isopen);
    console.log(isopen);
  };

  const hideDropdown=(ind)=>{
    setActiveIndex(ind);
    setIsopen(false);
  }

  return (
    <>
      <Router>
        <Navbar
          toggle={toggle}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
        <Dropdown
          isopen={isopen}
          toggle={toggle}
          activeIndex={activeIndex}
          hideDropdown={hideDropdown}
        />

        <Switch>
          <Route exact path={["/", "/real-state"]}>
            <Hero slides={slides} />
            <About />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
