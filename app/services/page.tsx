"use client";
import ServiceCard from "../(components)/ServiceCard";

export default function Services() {
    return (
        <div className={`serviceContainer`}>
            <div className="header">SERVICES</div>
            <div className="serviceGrid">
                <ServiceCard
                    image="ux.png"
                    title="UX/UI Design"
                    description="Design the user interface and web pages including mobile layouts for your business website to maximize user experience"
                ></ServiceCard>
                <ServiceCard
                    image="ux.png"
                    title="Front-End Development"
                    description="We use the latest  technologies such as ReactJS, TypeScript, and Sass to bring your website to life"
                ></ServiceCard>
                <ServiceCard
                    image="ux.png"
                    title="Web Hosting"
                    description="We will take care of SSL certificate, integrating with your current domain, and setting server up configuration for you"
                ></ServiceCard>
                <ServiceCard
                    image="ux.png"
                    title="SEO Optimization"
                    description="Optimize your website to rank on the first page of Google, Safari, and other search engines"
                ></ServiceCard>
                <ServiceCard
                    image="ux.png"
                    title="Unlimited Maintenance"
                    description="Want to change something about the website? Just tell us what you don’t like and we will update right away"
                ></ServiceCard>
                <ServiceCard
                    image="ux.png"
                    title="Creative Development"
                    description="Want to try a experiment with creative design using 2Ds animation and 3D worlds? Let us know!"
                ></ServiceCard>

                <ServiceCard
                    image="ux.png"
                    title="Analytics*"
                    description="Want to have data and statistics of your website to find what source is driving the most traffic? We will track of analytics for you"
                ></ServiceCard>

                <ServiceCard
                    image="ux.png"
                    title="Professional Photoshoots*"
                    description="We offer professional photoshoots for your  website
(as an additional cost)"
                ></ServiceCard>
            </div>
        </div>
    );
}
