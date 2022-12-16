"use client";

import React from "react";
import Link from "next/link";

export default function Button() {
  return (
    <>
      {/* <button onClick={clickMe}> */}
      {/* <p>Learn More</p> */}
      <Link about="Directs To Why Us Page" className="next-link button" href="/why-us">
        Why Us
      </Link>
      {/* </button> */}
    </>
  );
}
