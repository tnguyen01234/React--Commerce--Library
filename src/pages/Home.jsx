import React from "react";
import Discounted from "../Components/Discounted";
import Explore from "../Components/Explore";
import Featured from "../Components/Featured";
import Highlights from "../Components/Highlights";
import Landing from "../Components/Landing";

export default function Home() {
  return (
    <>
      <Landing/>
      <Highlights />
      <Featured />
      <Discounted />
      <Explore />
    </>
  );
}
