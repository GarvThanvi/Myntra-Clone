import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomeItem from "../components/HomeItem";
import { Outlet } from "react-router-dom";
import FetchItems from "../components/FetchItems";
import "../index.css";
import { useSelector } from "react-redux";
import LoadingSpinner from "../components/LoadingSpinner.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  return (
    <>
      <Header></Header>
      <FetchItems></FetchItems>
      {fetchStatus.currentlyFetching ? (
        <LoadingSpinner></LoadingSpinner>
      ) : (
        <Outlet />
      )}
      <Footer></Footer>
    </>
  );
}

export default App;
