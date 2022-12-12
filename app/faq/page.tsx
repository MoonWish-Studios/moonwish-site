"use client";
import FaqDropdown from "../(components)/FaqDropdown";

export default function Faq() {
  return (
    <div className={`faqContainer`}>
      <div className="headerFaq">FAQ</div>
      <div className="faqDescription">Here are the most frequently asked questions we receive</div>
      <FaqDropdown
        title="Why is having a modern, professional website important?"
        contents="There are currently 4.95 billion active internet users so it is more important than ever to have a strong online presence as a business. Having a modern website will increase customer traffic to your business and overall give you a more professional look."
      ></FaqDropdown>
      <FaqDropdown
        title="How long will it take to create a new website?"
        contents="It depends on how much content you want on your website and how many pages but it will usually take around 1-2 weeks. Before we begin on your project we will break down all our tasks and the time needed for each task."
      ></FaqDropdown>
      <FaqDropdown
        title="What is SEO and why is it important?"
        contents="Search engine optimization (SEO) is the process of improving the ranking of a website on search engines like Google or Safari. This is important because it makes your business more visible and more likely to be seen by potential customers"
      ></FaqDropdown>
      <FaqDropdown
        title="How will I get my invoice?"
        contents="We will send an invoice to your email with Stripe's payment processing platform but if you prefer another way we can accomodate"
      ></FaqDropdown>
      <FaqDropdown
        title="What will I need to do as the business owner?"
        contents="Nothing! Well, almost nothing. After we create the design for your website, we will need your input on what you want to change about it but after that we will do all the work. You can also contact us to change something about the website whenever you want whether it be changing your phone number or adding new images."
      ></FaqDropdown>
      <FaqDropdown
        title="Where is your business located?"
        contents="We have one location in Irvine, CA and one in Cypress, CA"
      ></FaqDropdown>
    </div>
  );
}
