import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import { DiceStatsComponent, PerformanceStatsComponent } from "../";

export class StatsHomeComponent extends React.Component {
  render() {
    return (
      <div id="container">
        <main className="app-container">
          <Switch>
            <Route path="/dice" component={DiceStatsComponent} />
            <Route path="/performance" component={PerformanceStatsComponent} />
          </Switch>
        </main>
        <div></div>
      </div>
    );
  }
}

