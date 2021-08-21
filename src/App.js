import "./sass/app.scss";
import LandingPage from "./components/landingPage";
import HeaderBar from "./components/headerBar";
import Presentation from "./components/presentation";
import Service from "./components/service";

function App() {
  return (
    <div className="App">
      <HeaderBar />
      <LandingPage />
      <Presentation />
      <Service/>
    </div>
  );
}

export default App;
