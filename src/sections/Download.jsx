import React from "react";
import { links, logos } from "../constants/index.jsx";
import Marker from "../components/Marker.jsx";
import { Element } from "react-scroll";

const Demo = () => {
  return (
    <section>
      <Element
        name="demo"
        className="g7 relative pb-32 pt-24 max-lg:pb-24 max-md:py-16"
      >
        <div className="container">
          <div className="flex items-center">
            <div className="relative mr-6 flex-540 max-xl:flex-280 max-lg:flex-256 max-md:flex-100">
              <div className="mb-10">
                <img
                  src="/images/DeepScanLogoRight.png"
                  alt="xora"
                  height={200}
                  width={200}
                />
              </div>
              <p className="body-1 mb-10 max-w-md">
              Get Started with DeepScan
              Enter your work email below to get access to the DeepScan platform. Our Canadian-based team is ready to help secure your business.
              </p>
              {/* Add email input and demo request button */}
              <div className="flex items-center gap-4 mb-10">
                <input
                  type="email"
                  placeholder="Enter Work Email"
                  className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  Request for Demo
                </button>
              </div>
              <ul className="flex flex-wrap items-center gap-6">
                {links.map(({ id, url, icon }) => (
                  <li
                    key={id}
                    className="download_tech-link download_tech-link_last-before download_tech-link_last-after"
                  >
                    <a
                      href={url}
                      className="size-22 download_tech-icon_before relative flex items-center rounded-half justify-center border-2 border-s2 background-s1 transition-borderColor duration-500 hover:border-s4"
                    >
                      <span className="absolute -top-2 rotate-90">
                        <Marker />
                      </span>
                      <img
                        src={"/images/lines.svg"}
                        alt="lines"
                        className="absolute size-13/20 object-contain"
                      />
                      <span className="download_tech-icon">{icon}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-10 max-md:hidden">
              <div className="download_preview-before downbload_preview-after rounded-40 relative w-[955px] border-2 border-s5 p-6">
                <div className="relative rounded-3xl bg-s1 px-6 pb-6 pt-14">
                  <span className="download_preview-dot left-6 bg-p2" />
                  <span className="download_preview-dot left-11 bg-s3" />
                  <span className="download_preview-dot left-16 bg-p1/15 " />
                  <img
                    src={"/images/Screen.png"}
                    width={855}
                    height={855}
                    alt="screen"
                    className="rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
          <ul className="mt-24 flex justify-center max-lg:hidden">
            {logos.map(({ id, url, width, title, height }) => (
              <li key={id} className="mx-10">
                <img src={url} width={width} alt={title} height={height} />
              </li>
            ))}
          </ul>
        </div>
      </Element>
    </section>
  );
};
export default Demo;
