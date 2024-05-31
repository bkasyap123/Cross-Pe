import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./pages/Home.jsx"));
const Login = lazy(() => import("./pages/Login.jsx"));
const Register = lazy(() => import("./pages/Register.jsx"));
const Dashboard = lazy(() => import("./pages/Dashboard.jsx"));
const Waitlist = lazy(() => import("./pages/Waitlist.jsx"));
const Clients = lazy(() => import("./components/Main/Clients.jsx"));
const Dashboardd = lazy(() => import("./components/Main/Dashboard.jsx"));
const Profile = lazy(() => import("./components/Main/Profile.jsx"));
const Request = lazy(() => import("./components/Main/Requests.jsx"));

const routes = [
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      { index: true, element: <Dashboardd /> },
      { path: "requests", element: <Request /> },
      { path: "profile", element: <Profile /> },
      { path: "clients", element: <Clients /> },
    ],
  },
  { path: "/waitlist", element: <Waitlist /> },
];

export function RoutesMapping() {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element}>
          {route.children &&
            route.children.map((child, childIndex) => (
              <Route key={childIndex} index={child.index} path={child.path} element={child.element} />
            ))}
        </Route>
      ))}
    </Routes>
  );
}
