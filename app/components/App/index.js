import React from "react";
import { Switch, Route } from "react-router-dom";

/**Components */

const App = () => {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/"
          render={() => <div>React Redux BoilerPlate</div>}
        />
      </Switch>
    </div>
  );
};
export default App;
