import React from "react";
import HeaderBar from "../components/HeaderBar";
import Request from "../components/Request";
import Posts from "../components/Posts";

function Home() {
  return (
    <div>
      <Request />
      <Posts />
    </div>
  );
}

export default Home;
