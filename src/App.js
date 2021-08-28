import "./sass/app.scss";
import Home from "./pages/home";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HeaderBar from "./components/headerBar";
import ProductPage from "./pages/product";
import ServicePage from "./pages/service";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderBar />
        <Switch>
          <Route path={`/`} exact component={Home} />
          <Route path={`/service/:id`} exact component={ServicePage} />
          <Route path={`/product/:id`} exact component={ProductPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
