/* eslint-disable no-unused-vars */
import React from "react";
import SalesComp from "./SalesComp";
import Analytics from "./Analytics";
import List from "./List";

const Right = () => {
  return (
    <div className="w-full p-2">
      <SalesComp />
      <Analytics />
      <List />
    </div>
  );
};

export default Right;
