import React from "react";
import { timelineData } from "../constants";

const About = () => {
  return (
    <section id="about" className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-purple-600 uppercase">Our Story</span>
          <h2 className="text-3xl font-bold mt-2">Our Journey</h2>
          <p className="text-gray-600 mt-4">Founded by cybersecurity veterans with a mission to protect Canadian businesses</p>
        </div>
        <div className="horizontal-timeline">
          {timelineData.map((item) => (
            <div key={item.id} className="horizontal-timeline-item">
              <div className="horizontal-timeline-circle">
                {item.year.substring(2)}
              </div>
              <div className="horizontal-timeline-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                {item.image && <img src={item.image} alt={item.title} />}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* New Location Section */}
      <div className="text-center mb-12 mt-16">
        <span className="text-sm font-semibold text-purple-600 uppercase">Our Location</span>
        <h2 className="text-3xl font-bold mt-2">Headquartered in Toronto</h2>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="flex-1 max-w-md">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-4">
            <div className="flex items-center mb-4">
              {/* Placeholder for icon */}
              <div className="bg-purple-200 p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m-1 4h1m8-10v12m0 0H9m8 0h2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Toronto Office</h3>
            </div>
            <p className="text-gray-700">18 King Street East, Suite 1400</p>
            <p className="text-gray-700">Toronto, ON M5C 1C4</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
            <div className="flex items-center mb-4">
               {/* Placeholder for icon */}
               <div className="bg-purple-200 p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m0 0l7 7m-2 2v-10a1 1 0 00-1-1h-3m-6 0a1 1 0 00-1 1v10h4m2-10a1 1 0 011-1h3m-6 0a1 1 0 00-1 1v10a1 1 0 001 1h4m-9-2h10M9 18j h6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Serving All of Canada</h3>
            </div>
            <p className="text-gray-700">With team members across the country, we serve clients from coast to coast.</p>
          </div>
          {/* Placeholder for button */}
          <button
            className="bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition duration-300"
            onClick={() => {
              // TODO: Implement demo trigger functionality here
              console.log("Trigger demo");
            }}
          >
            Contact Sales
          </button>
        </div>
        <div className="flex-1 max-w-md">
          {/* Placeholder for image */}
          <img src="/images/detail-1.png" alt="Toronto Office Building" className="rounded-lg shadow-md" /> {/* Using a placeholder image from public/images */}
        </div>
      </div>
    </section>
  );
};

export default About;