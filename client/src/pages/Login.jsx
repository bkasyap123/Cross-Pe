import React, { useContext, useState } from "react";
import logo from ".././assets/easypayZ-logo.webp";
import api from "../service/api";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../Context";
import Spinner from "../components/Home/Spinner.jsx";

function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({ email: "", pwd: "" });
  const { setIsLoggedIn } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    let usermail = import.meta.env.VITE_ADMIN;

    try {
      api
        .post("/login", data)
        .then((res) => {
          setLoading(false);
          toast.success(`${res.data.status}`, {
            position: "top-center",
            autoClose: 1000,
            onClose: () =>
              data.email == usermail
                ? navigate("/dashboard")
                : navigate("/waitlist"),
          });
          localStorage.setItem("token", res.data.token);
          setIsLoggedIn(true);
        })
        .catch((err) => {
          toast.error(`${err.response.data || "Something broke"}`, {
            position: "top-center",
            autoClose: 2000,
          });
          setLoading(false);
          setData({ email: "", pwd: "" });
        });
    } catch (err) {
      console.log(err.response.data);
    }
  };

  return (
    <>
      <ToastContainer />
      {loading ? <Spinner /> : ""}
      <div className="flex bg-gradient-to-r from-gradient-start to-gradient-end h-[100vh] text-[#fff] flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-10 w-auto" src={logo} alt="Your Company" />
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  required
                  disabled={loading}
                  value={data.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                  className="block bg-[#FFFFFF0D] w-full border-none text-white rounded-xl border border-gray-300 p-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="mt-2">
                <input
                  id="pwd"
                  name="pwd"
                  type="password"
                  placeholder="Password"
                  required
                  disabled={loading}
                  value={data.pwd}
                  onChange={(e) => setData({ ...data, pwd: e.target.value })}
                  className="block bg-[#FFFFFF0D] w-full border-none text-white rounded-xl border border-gray-300 p-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="flex w-full bg-[#343BFF] justify-center rounded-xl bg-indigo-600 p-3 text-md font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {loading ? "Loading.." : "Continue"}
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Don't have account?{" "}
            <Link
              to="/register"
              className="font-semibold text-[#343BFF] leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Register here
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
