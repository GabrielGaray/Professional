import "./sass/app.scss";
import Home from "./pages/home";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HeaderBar from "./components/headerBar";
import ProductPage from "./pages/product";
import ServicePage from "./pages/service";
import { UIContextProvider } from "./context/uiContext";
import { CartProvider } from "./context/cartContext";
import CartPage from "./pages/cart";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <UIContextProvider>
          <CartProvider>
            <HeaderBar />
            <Switch>
              <Route path={`/`} exact component={Home} />
              <Route path={`/service/:id`} exact component={ServicePage} />
              <Route path={`/product/:id`} exact component={ProductPage} />
              <Route path={`/cart`} exact component={CartPage} />
            </Switch>
          </CartProvider>
        </UIContextProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
