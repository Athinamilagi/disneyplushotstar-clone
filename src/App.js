import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Detail from "./components/Detail";
import Login from "./components/Login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
      <Route path="home" element={<Home />} />
      <Route path="details" element={<Detail />} />
      <Route path="login" element={<Login />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
