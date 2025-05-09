import React, { useState } from "react";
import { Element } from "react-scroll";
import clsx from "clsx";
import { plans, pricingTableData } from "../constants/index.jsx";

import CountUp from "react-countup";
import Button from "../components/Button.jsx";

const Pricing = () => {
  const [monthly, setMonthly] = useState(false);

  return (
    <section>
      <Element className="pricing">
        <div className="container">
          {/* Pricing Header */}
          <div className="max-w-960 pricing-head_before relative mx-auto border-l border-r border-s2 bg-s1/50 pb-40 pt-28 max-xl:max-w-4xl max-lg:border-none max-md:pb-32 max-md:pt-16">
            <h3 className="h3 mag-lg:h4 max-md:h5 z-3 relative mx-auto mb-14 max-w-lg text-center text-p4 max-md:mb-11 max-sm:max-w-sm">
              Security Testing for Every Stage
            </h3>
            <p className="max-w-440 mb-14 body-1 max-md:mb-10 text-center mx-auto">
              DeepScan combines expert penetration testers with a streamlined platform to deliver comprehensive security testing for Canadian businesses, including specialized testing for GenAI applications.
            </p>


            {/* Pricing Toggle */}
            <div className="relative z-4 mx-auto flex w-[375px] rounded-3xl border-[3px] border-s4/25 bg-s1/50 p-2 backdrop-blur-[6px] max-md:w-[310px]">
              <button
                className={clsx("pricing-head_btn", monthly && "text-p4")}
                onClick={() => setMonthly(true)}
              >
                Monthly
              </button>
              <button
                className={clsx("pricing-head_btn", !monthly && "text-p4")}
                onClick={() => setMonthly(false)}
              >
                Annual
              </button>
              <div
                className={clsx(
                  "g4 rounded-14 before:h-100 pricing-head_btn_before absolute left-2 top-2 h-[calc(100%-16px)] w-[calc(50%-8px)] overflow-hidden shadow-400 transition-transform duration-500",
                  !monthly && "translate-x-full",
                )}
              />
            </div>

            {/* Background Graphics */}
            <div className="pricing-bg">
              <img
                src="/images/bg-outlines.svg"
                width={960}
                height={380}
                alt="outline"
                className="relative z-2"
              />
              <img
                src="/images/bg-outlines-fill.png"
                width={960}
                height={380}
                alt="outline"
                className="absolute inset-0 opacity-5 mix-blend-soft-light"
              />
            </div>
          </div>

          {/* Pricing Plans */}
          <div className="scroll-hide relative z-2 -mt-12 flex items-start max-xl:gap-5 max-xl:overflow-auto max-xl:pt-6">
            {plans.map((plan, index) => (
              <div
                key={plan.id}
                className="pricing-plan_first pricing-plan_last pricing-plan_odd pricing-plan_even relative border-2 p-7 max-xl:min-w-80 max-lg:rounded-3xl xl:w-[calc(33.33%+2px)]"
              >
                {index === 1 && (
                  <div className="g4 absolute h-330 left-0 right-0 top-0 z-1 rounded-tl-3xl rounded-tr-3xl" />
                )}

                {/* Plan Logo */}
                <div
                  className={clsx(
                    "absolute left-0 right-0 z-2 flex items-center justify-center",
                    index === 1 ? "-top-6" : "-top-6 xl:-top-11",
                  )}
                >
                  <img
                    src={plan.logo}
                    alt={plan.title}
                    className={clsx(
                      "object-contain drop-shadow-2xl",
                      index === 1 ? "size-[120px]" : "size-[88px]",
                    )}
                  />
                </div>

                {/* Plan Details */}
                <div
                  className={clsx(
                    "relative flex flex-col items-center",
                    index === 1 ? "pt-24" : "pt-12",
                  )}
                >
                  {/* Plan Title */}
                  <div
                    className={clsx(
                      "small-2 rounded-20 relative z-2 mx-auto mb-6 border-2 px-4 py-1.5 uppercase",
                      "border-black text-black", /* Changed border-p4 and text-p4 to border-black and text-black */
                    )}
                  >
                    {plan.title}
                  </div>

                  {/* Plan Price */}
                  <div className="relative z-2 flex items-center justify-center">
                    <div
                      className={clsx(
                        "h-num flex items-start",
                        index === 1 ? "text-p4" : "text-p4", /* Changed text-p3 to text-p4 for the Scale plan price */
                      )}
                    >
                      ${" "}
                      <CountUp
                        start={plan.priceMonthly}
                        end={monthly ? plan.priceMonthly : plan.priceYearly}
                        duration={0.4}
                        useEasing={false}
                        preserveValue
                      />
                    </div>
                    <div className="small-1 relative top-3 ml-1 uppercase">
                    {monthly ? "/mo" : "/yr"}
                    </div>
                  </div>
                </div>
                <div
                  className={clsx(
                    "body-1 relative z-2 mb-10 w-full border-b-s2 pb-9 text-center text-p4",
                    index === 1 && "border-b",
                  )}
                >
                  {plan.caption}
                </div>

                <ul className="mx-auto space-y-4 xl:px-7 ">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="relative flex items-center gap-5"
                    >
                      <img
                        src={"/images/check.png"}
                        alt="check"
                        className="size-10 object-contain pricing-checkmark"
                      />
                      <p className="flex-1">{feature}</p>
                    </li>
                  ))}
                </ul>
{/* 
                <div className="mt-10 flex w-full justify-center">
                  <Button icon={plan.icon}>Get Started</Button>
                </div> */}
                {index === 1 && (
                  <p
                    className="small-compact mt-9 text-center
                 text-p3 before:mx-2.5 before:content-['-'] after:mx-2.5 after:content-['-']"
                  >
                    Limited time offer
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Pricing Table */}
          <div className="mt-20">
            <h3 className="h3 max-md:h5 max-w-640 max-lg:max-w-md mb-7 text-p4 text-center mx-auto">
              Compare Plans
            </h3>
            <p className="body-1 max-lg:max-w-sm text-center mx-auto mb-10">
              See which plan is right for your business needs
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-s1/50">
                    <th className="text-left p-4 border border-s2">Features</th>
                    <th className="text-center p-4 border border-s2">Starter</th>
                    <th className="text-center p-4 border border-s2">Growth</th>
                    <th className="text-center p-4 border border-s2 bg-s4/20 text-black">Scale</th>
                    <th className="text-center p-4 border border-s2">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {pricingTableData.map((rowData, index) => (
                    <tr key={index} className={clsx("border-b border-s2", index % 2 === 0 ? "bg-s1/30" : "bg-s1/50")}>
                      <td className="text-left p-4 border border-s2">{rowData.feature}</td>
                      <td className="text-center p-4 border border-s2">{rowData.starter}</td>
                      <td className="text-center p-4 border border-s2">{rowData.growth}</td>
                      <td className="text-center p-4 border border-s2 bg-s4/20 text-black">{rowData.scale}</td>
                      <td className="text-center p-4 border border-s2">{rowData.enterprise}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Pricing;
