import { AuthContext } from "./Context.jsx";
import { useState, Suspense } from "react";
import "./App.css";
import { RoutesMapping } from "./Routes.jsx";
import Spinner from "./components/Home/Spinner.jsx";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("token"));

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <Suspense fallback={<Spinner />}>
        <RoutesMapping />
      </Suspense>
    </AuthContext.Provider>
  );
}

export default App;
