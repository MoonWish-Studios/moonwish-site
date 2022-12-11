"use client";

import { nanoid } from "nanoid";
import Link from "next/link";

type List = { id: string; heading: string; description: string };

export default function WhyUs() {
  return (
    <div className="whyus-section">
      <h1 className="statement-block">
        OUR PERSONAL MISSION STATEMENT IS TO MAKE A POSITIVE IMPACT FOR BUSINESSES IN OUR COMMUNITY
      </h1>
      <h1 className="statement-block">
        THAT IS WHY{"\n"}
        WE LOVE TO COLLABORATE WITH POSITIVE BUSINESSES THAT WANT TO PROVIDE THE BEST SERVICE FOR
        THEIR CUSTOMERS
      </h1>

      <h1>So Why Us?</h1>
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
    </div>
  );
}

function Statement({ children }: { children: string }) {
  return (
    <div className="statement-block">
      <h1>{children}</h1>
    </div>
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
  return (
    <div className="list-item">
      <p className="list-number">{index}/</p>
      <h3>{heading}</h3>
      <p className="list-description">{description}</p>
    </div>
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
