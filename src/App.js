import "./sass/app.scss";
import Home from "./pages/home";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HeaderBar from "./components/headerBar";
import Service from "./pages/service";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderBar />
        <Switch>
          <Route path={`/`} exact component={Home} />
          <Route path={`/product/:id`} exact component={Service} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
