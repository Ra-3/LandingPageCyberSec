import React from "react";
import { Element } from "react-scroll";
import { faq } from "../constants/index.jsx";
import FaqItem from "../components/FaqItem.jsx";

const Faq = () => {
  const halfLength = Math.floor(faq.length / 2);

  return (
    <section>
      <Element name="faq" className="relative">
        <div className="container relative z-2 py-28">
          <h3 className="h3 max-md:h5 max-w-640 max-lg:max-w-md mb-7 text-p4">
          Penetration Testing That Grows With Your Business
          </h3>
          <p className="body-1 max-lg:max-w-sm">
          DeepScan makes professional penetration testing accessible to startups and SMBs without the enterprise price tag.
          </p>
        </div>
        <div className="faq-line_after w-0.5 h-full absolute left-[calc(50%-1px)] top-0 -z-1 bg-s2"></div>
        <div className="faq-glow_before relative z-2 border-2 border-s2 bg-s1">
          <div className="container flex gap-10 max-lg:block">
            {/* Removed button as it's no longer needed */}
            <div className="relative flex-1 pt-24">
              {faq.slice(0, halfLength).map((item, index) => (
                <FaqItem
                  key={item.id}
                  item={item}
                  index={index}
                />
              ))}
            </div>
            <div className="relative flex-1 lg:pt-24">
              {faq.slice(halfLength).map((item, index) => (
                <FaqItem
                  key={item.id}
                  item={item}
                  index={halfLength + index}
                />
              ))}
            </div>
            <div className="faq-line_after absolute left-[calc(50%-1px)] w-0.5 h-full top-0 -z-1 bg-s2 max-lg:hidden"></div>
          </div>
          <div className="g4 absolute inset-0.5 -z-1 rounded-3xl" />
          <div className="absolute left-8 top-0 h-0.5 w-40 bg-p1" />
        </div>
      </Element>
    </section>
  );
};
export default Faq;
