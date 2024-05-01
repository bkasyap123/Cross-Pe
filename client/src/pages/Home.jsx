import Nav from "../components/Nav.jsx";
import Content from "../components/Content.jsx";
import Hero from "../components/Hero.jsx";
import Foot from "../components/Foot.jsx";

function Home() {
  return (
    <div className="text-[23px] lg:text-3xl">
      <Nav />
      <Content />
      <Hero />
      <Foot />
    </div>
  );
}

export default Home;
