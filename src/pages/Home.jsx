import React from "react";
import Discounted from "../Comp/Discounted";
import Explore from "../Comp/Explore";
import Featured from "../Comp/Featured";
import Highlights from "../Comp/Highlights";
import Landing from "../Comp/Landing";

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
