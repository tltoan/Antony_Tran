import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./components/styles/Home.css";
import Home from "./components/Home";
import Artworks from "./components/Artworks";
import About from "./components/About";
import Projects from "./components/Projects";
import Appli from "./components/Appli";
import Void from "./components/Void";
import BOV from "./components/BOV";
import Michelin from "./components/Michelin";
import "./components/styles/Preloader.css";
import dancing from "./assets/dancing.gif";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 300); // Smooth delay before hiding
          return 100;
        }
        return oldProgress + 2; // Increment by smaller amounts for smoother rise
      });
    }, 50); // Shorter intervals for more frequent updates

    return () => clearInterval(interval);
  }, []);

  if (isLoading) {
    return (
      <div id="preloader">
        <div
          className="background-image"
          style={{ backgroundImage: `url(${dancing})` }}></div>
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/artworks" component={Artworks} />
        <Route path="/about" component={About} />
        <Route path="/appli" component={Appli} />
        <Route path="/void" component={Void} />
        <Route path="/bov" component={BOV} />
        <Route path="/michelin" component={Michelin} />
        <Route path="/projects" component={Projects} />
      </Switch>
    </Router>
  );
}

export default App;
