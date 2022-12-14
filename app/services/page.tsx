"use client";
import ServiceCard from "../(components)/ServiceCard";

export default function Services() {
  return (
    <div className={`serviceContainer`}>
      <div className="header">SERVICES</div>
      <div className="serviceGrid">
        <ServiceCard
          image="icons/pen.svg"
          title="UX/UI Design"
          description="Design the user interface and web pages including mobile layouts for your business website to maximize user experience"
        ></ServiceCard>
        <ServiceCard
          image="icons/front-end-development.svg"
          title="Front-End Development"
          description="We use the latest technologies such as ReactJS, NextJS, TypeScript, and Tailwind to bring your website to life"
        ></ServiceCard>
        <ServiceCard
          image="icons/webhosting.svg"
          title="Web Hosting"
          description="We will take care of SSL certificate, integrating with your current domain, and setting server up configuration for you"
        ></ServiceCard>
        <ServiceCard
          image="icons/seo.svg"
          title="SEO Optimization"
          description="Optimize your website to rank on the first page of Google, Safari, and other search engines"
        ></ServiceCard>
        <ServiceCard
          image="icons/maintenance.svg"
          title="Unlimited Maintenance"
          description="Want to change something about the website? Just tell us what you don’t like and we will update right away"
        ></ServiceCard>
        <ServiceCard
          image="icons/creative-development.svg"
          title="Creative Development"
          description="Want to try a experiment with creative design using 2Ds animation and 3D worlds? Let us know!"
        ></ServiceCard>

        <ServiceCard
          image="icons/analytics.svg"
          title="Analytics"
          description="Want to have data analytics of your website to find what source is driving the most traffic? We will keep track of analytics for you"
        ></ServiceCard>

        <ServiceCard
          image="icons/calendar.svg"
          title="Bookings Page"
          description="Do you want a scheduling page for your customers and receive email notifications? We can set that up for you"
        ></ServiceCard>
      </div>
    </div>
  );
}
