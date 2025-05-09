import React, { useState } from "react";
import clsx from "clsx";
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";

const FaqItem = ({ item, index }) => {
  return (
    <div className="relative z-2 mb-16">
      <div
        className="group relative flex items-center justify-center gap-10 px-7"
      >
        <div className="flex-1">
          <div className="small-compact mb-1.5 text-p3 mg-lg:hidden">
            {index < 10 ? "0" : " "}
            {index}
          </div>
          <div
            className={clsx(
              "h6 text-p4 transition-colors duration-500 max-md:flex max-md:min-h-20 max-md:items-center",
              "max-lg:text-p1", // Always apply the active style
            )}
          >
            {item.question}
          </div>
        </div>
      </div>
      <SlideDown>
        <div className="body-3 px-7 py-3.5">{item.answer}</div> {/* Always render content */}
      </SlideDown>
      <div
        className={clsx(
          "g5 -bottom-7 -top-7 left-0 right-0 -z-1 rounded-3xl opacity-100 transition-opacity duration-500 absolute", // Always apply opacity-100
        )}
      >
        <div className="g4 absolute inset-0.5 -z-1 rounded-3xl" />
        <div className="absolute left-8 top-0 h-0.5 w-40 bg-p1" />
      </div>
    </div>
  );
};
export default FaqItem;
