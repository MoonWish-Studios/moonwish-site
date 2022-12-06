"use client";
import StyledButton from "./ButtonStyle";
import { Josefin_Sans } from "@next/font/google";

import React from "react";

function clickMe() {
  console.log("Clicked");
}

export default function Button() {
  return <StyledButton onClick={clickMe}>Learn More</StyledButton>;
}
