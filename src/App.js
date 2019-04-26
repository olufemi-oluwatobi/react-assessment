import React from "react";
import Listview from "./features/list";
import DetailsView from "./features/details";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <main>
        <Switch>
          <Route exact path="/" component={Listview} />
          <Route path="/:photoId" component={DetailsView} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
