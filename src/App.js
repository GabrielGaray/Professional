import "./sass/app.scss";
import LandingPage from "./components/landingPage";
import HeaderBar from "./components/headerBar";
import Presentation from "./components/presentation";

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
