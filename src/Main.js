import React from "react";
import { Route, Switch } from "react-router-dom";

// Pages
import Resume from "./pages/Resume";

import "./scss/Main.scss";

const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" render={() => <h1>Home</h1>} />
        <Route path="/my-artwork" render={() => <h1>My Artwork</h1>} />
        <Route path="/student-work" render={() => <h1>Student Artwork</h1>} />
        <Route path="/extra" render={() => <h1>Extracurricular</h1>} />
        <Route path="/lesson-plan" render={() => <h1>Sample Lesson Plan</h1>} />
        <Route path="/sample-rubric" render={() => <h1>Sample Rubric</h1>} />
        <Route path="/my-resume" component={Resume} />
        <Route path="/contact" render={() => <h1>Contact</h1>} />
      </Switch>
    </main>
  );
};

export default Main;
