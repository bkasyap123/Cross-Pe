import Nav from "../components/Home/Nav";
import Hero from "../components/Home/Hero";
import How from "../components/Home/How";
import Feature from "../components/Home/Feature";
import Subscribe from "../components/Home/Subscribe";
import Foot from "../components/Home/Foot";
import { AuthContext } from "../Context";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <>
      <Nav />
      <Hero />
      <How />
      <Feature />
      <Subscribe />
      <Foot />
    </>
  );
}

export default Home;
