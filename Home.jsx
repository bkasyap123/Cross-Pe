import Nav from "../components/Home/Nav";
import Hero from "../components/Home/Hero";
import Benifit from "../components/Home/Benifit";
import Demo from "../components/Home/Demo";
import Subscribe from "../components/Home/Subscribe";
import LearnAbout from "../components/Home/LearnAbout";
import Foot from "../components/Home/Foot";
import { AuthContext } from "../Context";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HowTo from "../components/Home/HowTo";

function Home() {
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <>
      <Nav />
      <Hero />
      <Benifit />
      <Demo />
      <HowTo />
      <LearnAbout/>
      <Foot />
    </>
  );
}

export default Home;
