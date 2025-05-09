import React from "react";
import { Element } from "react-scroll";
import { details, features } from "../constants/index.jsx";
import Button from "../components/Button.jsx";

const Features = () => {
  return (
    <section>
      <Element name="features">
        <div className="container">
          <div
            className="relative flex flex-col border-2 border-s3 rounded-7xl
           md:overflow-hidden feature-after md:bg-p1 max-md:border-none max-md:rounded-none max-md:gap-3"
          >
            <div className="flex flex-nowrap"> {/* New div for feature row */}
            {features.map(({ id, icon, caption, title, text, button }) => (
              <div
                key={id}
                className="relative z-2 md:px-10 px-5 md:pb-10 pb-5 flex-1 max-md:bg-p1 max-md:border-2 max-md:rounded-3xl max-md:flex-320"
              >
                <div className="w-full flex justify-start items-start">
                  <div className="-ml-3 mb-12 flex items-center justify-center flex-col">
                    <div className="w-0.5 h-16 bg-s3" />
                    <img
                      src={icon}
                      className="size-28 object-contain"
                      alt={title}
                    />
                  </div>
                </div>
                <h4 className="caption mb-5 max-md:mb-6 text-white">{caption}</h4>
                <h2 className="max-w-400 mb-7 h3 text-white ">{title}</h2>
                <p className="mb-11 body-1 max:md:mb-8 mx-md:body-3 text-white">{text}</p>
                {/* <Button icon={button.icon}>{button.title}</Button> */}
              </div>
            ))}
            </div> {/* Close new div */}
            <h3 className="h3 text-center text-white mb-12">How DeepScan can help</h3>
            <ul className="relative flex justify-around flex-grow px-[5%] border-2 border-s3 rounded-7xl">
              <div className="absolute bg-s3/20 top-[38%] left-0 right-0 w-full h-[1px] z-10" />
              {details.map(({ id, icon, title, description }) => (
                <li key={id} className="relative pt-16 px-4 pb-14 flex flex-col items-center">
                  <div className="absolute top-8 bottom-0 left-1/2 bg-s3/20 w-[1px] h-full z-10" />
                  <div className="flex items-center justify-center mx-auto mb-3 border-2 border-white rounded-full hover:border-p1 transition-all duration-500 shadow-500 size-20">
                    <img
                      src={icon}
                      alt={title}
                      className="size-17/20 object-contain z-20 detail-icon"
                    />
                  </div>
                  <h3 className="relative z-2 max-w-36 mx-auto my-0 base-small text-center uppercase text-white">
                    {title}
                  </h3>
                  <p className="relative z-2 max-w-48 mx-auto mt-4 body-3 text-center text-white/70">
                    {description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Element>
    </section>
  );
};
export default Features;
