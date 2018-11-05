import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

/**Components */

export interface AppProps {
  welcomeText: string;
}

const App = (props: AppProps) => {
  return (
    <div>
      <Switch>
        <Route exact path="/" render={() => <div>{props.welcomeText}</div>} />
      </Switch>
    </div>
  );
};
export default App;
