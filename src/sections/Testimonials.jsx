import React from "react";
import { testimonials } from "../constants/index.jsx";
import TestimonialItem from "../components/TestimonialItem.jsx";

const Testimonials = () => {
  const halfLength = Math.floor(testimonials.length / 2);
  return (
    <section className="relative z-2 py-24 md:py-28 lg:py-40">
      <div className="container block lg:flex">
        <div className="testimonials_head-res relative z-2 mr-20 flex-300">
        <h3 className="h3 max-md:h5 mb-10 pt-10 text-p4">Comprehensive Security Solutions</h3>
          <p className="text-xl font-medium text-teal-500 mb-5 max-md:mb-3">
            Our subscription-based platform combines automated scanning with expert human analysis for continuous security testing beyond traditional penetration testing, including specialized testing for GenAI applications.
          </p>
        </div>

        <div className="testimonials_inner-after testimonials_inner-before relative max-lg:static max-md:block">
          <div className="testimonials_group-after flex">
            {testimonials.slice(0, halfLength).map((testimonial) => (
              <TestimonialItem
                key={testimonial.id}
                item={testimonial}
                containerClassName="last:after:hidden last:after:max-md:block"
              />
            ))}
          </div>
          <div className="flex">
            {testimonials.slice(halfLength).map((testimonial) => (
              <TestimonialItem
                key={testimonial.id}
                item={testimonial}
                containerClassName="last:after:hidden after:right-auto after:left-0 after:max-md:-left-4 md:px-12"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
