import Image from "next/image";
import Link from "next/link";
import { data } from "../data/cardData";

const ShopPage = () => {
  return (
    <>
      <div className="p-6">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#1d3557]">Explore Our Products</h1>
          <p className="text-gray-600 mt-2">Discover unique items tailored to your needs</p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {data.map((item) => (
            <Link href={`/Cards/${item.slug}`} key={item.id} passHref>
              <div className="relative bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4 hover:scale-105 transform cursor-pointer">
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="intrinsic"
                  width={200}
                  height={200}
                  className="rounded-md"
                />
                <h2 className="text-lg font-semibold text-[#1d3557] mt-4">{item.title}</h2>
                <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
                <h3 className="text-sm font-bold text-[#e63946] hover:text-[#457b9d] mt-3 transition-colors duration-300">
                  {item.btn}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default ShopPage;
