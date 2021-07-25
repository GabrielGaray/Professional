import "./sass/app.scss";
import LandingPage from "./modules/landingPage";
import HeaderBar from "./modules/headerBar";
import Presentation from "./modules/presentation";

function App() {
  return (
    <div className="App">
      <HeaderBar />
      <LandingPage />
      <Presentation />
    </div>
  );
}

export default App;
