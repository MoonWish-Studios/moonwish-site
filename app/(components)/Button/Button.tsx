"use client";

import React from "react";
import Link from "next/link";

export default function Button() {
  return (
    <>
      {/* <button onClick={clickMe}> */}
      {/* <p>Learn More</p> */}
      <Link className="next-link button" href="/why-us">
        Learn More
      </Link>
      {/* </button> */}
    </>
  );
}
