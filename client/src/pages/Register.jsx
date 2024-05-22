import { useState, useContext } from "react";
import logo from ".././assets/easypayZ-logo.png";
import api from "../service/api";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../Context";

function Register() {
  const navigate = useNavigate();
  const [data, setData] = useState({ email: "", phone: "", pwd: "" });
  const { setIsLoggedIn } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      api
        .post("/signup", data)
        .then((res) => {
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
          setData({ email: "", pwd: "" });
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="flex bg-black h-[100vh] text-white flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-10 w-auto" src={logo} alt="Your Company" />
        </div>
        <div className="mt-8 sm:max-w-sm sm:mx-auto sm:w-full text-md">
          <p className="my-1">
            Thanks for your interest in <strong>GoCrossPay!</strong>
          </p>
          <p>We’ll reach out to you once our product becomes available.</p>
        </div>
        <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  required
                  value={data.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                  className="block w-full text-gray-900 rounded-md border-0 py-2 px-3 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="mt-2">
                <input
                  id="number"
                  name="number"
                  type="number"
                  placeholder="Phone"
                  required
                  value={data.phone}
                  onChange={(e) => setData({ ...data, phone: e.target.value })}
                  className="block w-full text-gray-900 rounded-md border-0 py-2 px-3 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                  value={data.pwd}
                  onChange={(e) => setData({ ...data, pwd: e.target.value })}
                  className="block w-full px-3 rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-md font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Register
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
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
