"use client";
import React from "react";
import Image from "next/image"; // Importing Next.js Image component
import { data } from "@/app/data/cardData"; // Assuming you are fetching this data

const Dynamic = ({ params }: { params: { slug: string } }) => {
  // Define the product type for TypeScript
  interface IProduct {
    id: number;
    title: string;
    price: string;
    image: string; // Image URL
    slug: string;
    description?: string;
  }

  // Find the product by slug
  const product = data.find((item) => item.slug === params.slug);

  if (!product) {
    // Return a 404-like message if the product is not found
    return (
      <div className="max-w-4xl mx-auto mt-16 px-4 sm:px-6 lg:px-8 py-10 text-center">
        <h1 className="text-4xl text-red-600 font-bold mb-4">Product Not Found</h1>
        <p className="text-gray-700 text-lg">
          Sorry, the product you are looking for does not exist. Please check out our{" "}
          <a href="/" className="text-blue-500 underline">
            homepage
          </a>{" "}
          for more products.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto mt-16 px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-4xl font-bold text-[#D84727] text-center mb-8">{product.title}</h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Section: Product Image */}
        <div className="flex-1">
          <Image
            src={product.image}
            alt={product.title}
            width={400}
            height={400}
            className="rounded-lg shadow-lg object-cover w-full"
          />
        </div>

        {/* Right Section: Product Details */}
        <div className="flex-1">
          <p className="text-lg font-semibold text-gray-700 mb-4">
            <span className="text-gray-900 font-bold">Brand:</span> {product.title}
          </p>
          <p className="text-2xl font-bold text-red-600 mb-6">Price: {product.price}</p>
          <p className="text-gray-700 mb-4">{product.description || "No description available."}</p>

          {/* Call-to-action Buttons */}
          <div className="flex gap-4 mt-6">
            <button className="py-2 px-4 bg-[#1d3557] text-white font-semibold rounded-lg hover:bg-[#a8dadc] transition-all duration-300">
              Add to Cart
            </button>
            <button className="py-2 px-4 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-700 transition-all duration-300">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dynamic;
