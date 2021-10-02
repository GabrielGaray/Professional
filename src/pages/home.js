import { useParams } from "react-router";
import LandingPage from "../components/landingPage";
import Presentation from "../components/presentation";
import Product from "../components/product";
import Service from "../components/service";

function Home() {
  const { section } = useParams();

  const dontShow = (component) => {
    if (!section) return false;
    if (section === component) return false;
    return true;
  };

  return (
    <div className="Home">
      <LandingPage hidden={dontShow("landinge")} />
      <Presentation hidden={dontShow("presentation")} />
      <Service hidden={dontShow("service")} />
      <Product hidden={dontShow("product")} />
    </div>
  );
}

export default Home;
