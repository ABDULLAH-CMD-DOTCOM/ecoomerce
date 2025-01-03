import Image from "next/image";
import { FC } from "react";

interface ProductCardProps {
  id: number;
  image: string; // URL for the image
  title: string;
  price: number;
  addToCart: (product: { id: number; title: string; price: number; image: string }) => void;
}

const ProductCard: FC<ProductCardProps> = ({ id, image, title, price, addToCart }) => {
  return (
    <div className="w-[220px] h-[360px] bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
      {/* Product Image */}
      <Image
        src={image}
        alt={title}
        className="object-cover rounded-t-lg"
        height={180}
        width={220}
        placeholder="blur"
        blurDataURL="https://via.placeholder.com/220x180"
      />

      {/* Product Details */}
      <div className="p-4 flex flex-col">
        {/* Title */}
        <h3 className="text-lg font-medium text-gray-800 truncate">{title}</h3>

        {/* Price */}
        <p className="text-xl font-semibold text-[#e63946] mt-2">${price}</p>

        {/* Add to Cart Button */}
        <button
          onClick={() => addToCart({ id, title, price, image })}
          className="py-2 mt-4 bg-[#1d3557] text-white font-medium text-sm rounded-md transition-all duration-300 hover:bg-[#457b9d] hover:shadow-md transform hover:scale-105"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
