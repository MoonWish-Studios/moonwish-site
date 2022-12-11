"use client";

import { nanoid } from "nanoid";
import Link from "next/link";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

type List = { id: string; heading: string; description: string };

import { animated, useSpring } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef } from "react";
export default function WhyUs() {
  return (
    <div className="whyus-section">
      <Statement>
        <div>
          <h1>
            <em className="weak">OUR PERSONAL MISSION STATEMENT IS TO</em>{" "}
            <em className="strong">MAKE A POSITIVE IMPACT FOR BUSINESSES IN OUR COMMUNITY</em>
          </h1>
        </div>
      </Statement>
      <Statement>
        <h1>
          THAT IS WHY WE LOVE TO COLLABORATE WITH <em className="green">POSITIVE BUSINESSES</em>{" "}
          THAT WANT TO PROVIDE THE BEST SERVICE FOR THEIR CUSTOMERS
        </h1>
      </Statement>

      <Statement>
        <h1>
          WHETHER YOU ARE JUST STARTING OUT, WANT A REDESIGN OF AN EXISTING WEBSITE, OR IMPROVE YOUR
          GOOGLE RANKING, <em className="strong">WE CAN HELP</em>
        </h1>
      </Statement>
      <WhyList />
    </div>
  );
}

function WhyList() {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const props = useSpring({
    to: {
      opacity: 1,
      x: 10,
      // y: 0,
    },
    from: {
      opacity: 0,
      x: 0,
    },
    config: {
      frequency: 1,
      damping: 2,
      tension: 280,
    },
    // delay: 00,
    pause: !inView,
  });
  return (
    <>
      <animated.h1 ref={ref} style={props}>
        So Why Us?
      </animated.h1>
      <div className="list-container">
        {whyLists.map(({ id, heading, description }: List, index: number) => (
          <ListItem key={id} index={index + 1} heading={heading} description={description} />
        ))}
      </div>
      <p className="caption">
        For more details, check out our{" "}
        <Link className="next-link" href="/services">
          Services
        </Link>{" "}
        page
      </p>
    </>
  );
}

function Statement({ children }: { children: JSX.Element }) {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const props = useSpring({
    to: {
      opacity: 1,
      // x: 10,
      y: -30,
    },
    from: {
      opacity: 0,
      x: 0,
      y: 0,
    },
    config: {
      frequency: 1,
      damping: 2,
      tension: 180,
    },
    // delay: 00,
    pause: !inView,
  });
  return (
    <animated.div ref={ref} className="statement-block">
      <animated.div style={props}>{children}</animated.div>
    </animated.div>
  );
}
function ListItem({
  heading,
  description,
  index,
}: {
  heading: string;
  description: string;
  index: number;
}) {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const props = useSpring({
    to: {
      opacity: 1,
      x: 0,
      // y: -30,
    },
    from: {
      opacity: 0,
      x: -10,
      y: 0,
    },
    config: {
      frequency: 1,
      damping: 2,
      tension: 180,
    },
    delay: 500,
    pause: !inView,
  });

  return (
    <animated.div ref={ref} style={props} className="list-item">
      <p className="list-number">{index}/</p>
      <h3>{heading}</h3>
      <p className="list-description">{description}</p>
    </animated.div>
  );
}

const whyLists = [
  {
    id: nanoid(),
    heading: "We are Transparent",
    description: "We charge a flat rate of $100 per month. No hidden fees, no extra charge",
  },
  {
    id: nanoid(),
    heading: "We create modern, responsive and mobile-friendly websites",
    description:
      "We know that there are thousands of phones, laptops, screens with different sizes so we build your website with responsiveness from the start and tests for you",
  },
  {
    id: nanoid(),
    heading: "We Are Artists",
    description:
      "We are artists at heart, with coding as the brush. We don’t feel good until the design and website exceeds both yours and ours expectations",
  },
  {
    id: nanoid(),
    heading: "We Don’t Use Templates",
    description:
      "It’s simple to create a website in WordPress, Squarespace, Wix, etc. but we are here because we want to go beyond “functional”. We want to help build your brand’s online presence. We want your business to be noticed and ranked first in Google Searches",
  },
  {
    id: nanoid(),
    heading: "We Maintain Your Website",
    description:
      "Unlike traditional agencies, you don’t pay us thousands upfront, only to get a website to maintain on your own that be will be technically outdated in two years. We’ll take care of technical mainteance and updating content so that your website stay modernize",
  },
  {
    id: nanoid(),
    heading: "We Do One Thing And We Do It Well",
    description:
      "We don’t believe in jack of all trades. We specficially focus on creating modern, professional websites for your business and we excel in it",
  },
];
