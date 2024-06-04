import { useState, useContext } from "react";
import logo from ".././assets/easypayZ-logo.png";
import api from "../service/api";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../Context";
import Spinner from "../components/Home/Spinner.jsx";

function Register() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    uname: "",
    email: "",
    phone: "",
    pwd: "",
  });
  const { setIsLoggedIn } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      api
        .post("/signup", data)
        .then((res) => {
          setLoading(false);
          toast.success(`${res.data.status}`, {
            position: "top-center",
            autoClose: 1000,
            onClose: () =>
              data.email == import.meta.env.VITE_ADMIN
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
      console.log(err);
    }
  };

  return (
    <>
      <ToastContainer />
      {loading ? <Spinner /> : ""}
      <div className="flex bg-gradient-to-r from-gradient-start to-gradient-end h-[100vh] text-[#fff] flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm mb-6">
          <img className="mx-auto h-10 w-auto" src={logo} alt="Your Company" />
        </div>

        <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <h2 className="text-lg font-semibold text-center">
              Welcome! Create account
            </h2>
            <div>
              <div>
                <input
                  id="uname"
                  name="uname"
                  type="text"
                  placeholder="Username"
                  required
                  disabled={loading}
                  value={data.uname}
                  onChange={(e) => setData({ ...data, uname: e.target.value })}
                  className="block bg-[#FFFFFF0D] w-full border-none text-gray-900 rounded-xl border border-gray-300 p-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent sm:text-sm sm:leading-6"
                />
              </div>
            </div>
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
                  className="block bg-[#FFFFFF0D] w-full border-none text-gray-900 rounded-xl border border-gray-300 p-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="mt-2">
                <input
                  id="number"
                  name="number"
                  type="tel"
                  minLength={10}
                  maxLength={10}
                  placeholder="Phone"
                  required
                  disabled={loading}
                  value={data.phone}
                  onChange={(e) => setData({ ...data, phone: e.target.value })}
                  className="block bg-[#FFFFFF0D] w-full border-none text-gray-900 rounded-xl border border-gray-300 p-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent sm:text-sm sm:leading-6"
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
                  className="block bg-[#FFFFFF0D] w-full border-none text-gray-900 rounded-xl border border-gray-300 p-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-xl bg-[#343BFF] p-3 text-md font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {loading ? "Loading.." : "Continue"}
              </button>
            </div>
          </form>
          {/* <p className="mt-4 text-sm pl-2">
            By registering, I agree to Xenvert’s Terms of Service and Privacy
            Policy.
          </p> */}
          <p className="mt-8 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-[#343BFF] leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Login here
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Register;
