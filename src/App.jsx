import { useState, useEffect, useContext } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { TestContext } from "./context/TestContext";
import { NavBar } from "./components/NavBar";
import { Routes, Route } from "react-router";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";

function App() {
  const { data, error, loading } = useContext(TestContext);
  if (loading) {
    return <h1>loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error} </h1>;
  }

  return (
    <>
      <NavBar />

      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Login />} path="/login" />
      </Routes>
    </>
  );
}

export default App;
