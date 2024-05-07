import api from "../workers/api.js";
// import useAuth from "../authStore/zustAuth.jsx";

function Logout() {
  const handleLogout = () => {
    api
      .post("/logout", {}, { withCredentials: true })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div
      onClick={handleLogout}
      className="px-4 lg:px-8 py-2 m-1 text-[16px] border-black border-2 font-semibold rounded-full"
    >
      Logout
    </div>
  );
}

export default Logout;
