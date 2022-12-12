"use client";

import React from "react";
import Link from "next/link";

export default function Button() {
  return (
    <>
      {/* <button onClick={clickMe}> */}
      {/* <p>Learn More</p> */}
      <Link className="next-link button" href="#">
        Learn More
      </Link>
      {/* </button> */}
    </>
  );
}
