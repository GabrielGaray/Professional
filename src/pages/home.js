import LandingPage from "../components/landingPage";
import Presentation from "../components/presentation";
import Product from "../components/product";

function Home() {
  return (
    <div className="Home">
      <LandingPage />
      <Presentation />
      {/* <Service /> */}
      <Product />
    </div>
  );
}

export default Home;
