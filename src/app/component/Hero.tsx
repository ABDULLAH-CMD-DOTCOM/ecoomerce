import React from "react";
import Image from "next/image"; 
import Watch from '../assets/heroWatch.png';
import line from '../assets/line.png';

const FifthPag = () => {
  return (
    <div className="flex items-center justify-center min-h-screen pt-20 bg-gradient-to-b from-[#e8f5f8] to-[#a8dadc]">
      <div className="flex flex-col sm:flex-row items-center justify-around p-6 w-full sm:w-[1050px] sm:h-[550px] bg-white shadow-lg rounded-lg">

        {/* Left Side: Image */}
        <div className="sm:w-1/2 sm:pr-4 mb-6 sm:mb-0 order-2 sm:order-1 mt-5 flex justify-center">
          <Image
            src={Watch}
            alt="Luxury Watch"
            width={400}
            height={400}
            className="w-[250px] h-[340px] sm:w-[300px] sm:h-[400px] lg:h-[450px] lg:w-[350px] lg:mt-[50px] rounded-lg"
          />
        </div>

        {/* Right Side: Text Content */}
        <div className="sm:w-1/2 text-center sm:text-left sm:pl-6 order-1 sm:order-2">
          <h2 className="text-lg font-medium text-[#1d3557]">Introducing</h2>
          <h3 className="text-3xl sm:text-4xl text-[#1d3557] mt-2 font-bold leading-snug">
            WAY KAMBAS MINI EBONY
          </h3>
          <p className="text-sm sm:text-base text-gray-700 mt-4 leading-relaxed">
            The <span className="font-semibold">WAY KAMBAS MINI EBONY</span> is a testament to timeless elegance, crafted from premium ebony wood to embody the strength and beauty of the Sumatran Rhino. With its unique overlapping strap design, this watch offers a bold yet refined aesthetic for the modern minimalist.
          </p>

          {/* Buttons: Read More and Buy Now */}
          <div className="flex mt-7 justify-center sm:justify-start gap-4">
            <button className="border-2 py-2 px-4 border-[#457b9d] text-[#457b9d] font-semibold rounded-lg transition-all hover:bg-[#457b9d] hover:text-white">
              READ MORE
            </button>
            <button className="py-2 px-4 bg-[#1d3557] text-white font-semibold rounded-lg transition-all hover:bg-[#457b9d]">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FifthPag;
