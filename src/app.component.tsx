import React from "react";
import { Route, Switch, withRouter } from 'react-router-dom';

import { StatsHomeComponent } from "./components";

class App extends React.Component {
  componentDidMount() {
     console.log('dasdsa')
  }

  render() {
    return (
      <Switch>
        <Route path="/" component={StatsHomeComponent} />
      </Switch>

    );
  }
}

export default withRouter(App);
