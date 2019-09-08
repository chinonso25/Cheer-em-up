import React from "react";
import HeaderBar from "../components/HeaderBar";
import Request from "../components/Request";
import Posts from "../components/Posts";

function Home() {
  return (
    <>
      <Request />
      <Posts />
    </>
  );
}

export default Home;
