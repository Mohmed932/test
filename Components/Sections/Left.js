import React from "react";
import LineTitle from "../Section/LineTitle";
import LeftRight from "./LeftRight";

const Left = async () => {
  const title = "عالم";
  const req = await fetch("http://localhost:5000/section/world", {
    next: { revalidate: 60 },
  });
  const res = await req.json();
  return (
    <div className="w-1/4 max-md:w-11/12 max-md:my-5 max-sm:w-full">
      <LineTitle title={title} />
      <LeftRight news={res} />
    </div>
  );
};

export default Left;
