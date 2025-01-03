"use client";
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import Link from "next/link";

const Card = () => {
  const [cart, setCart] = useState<{ id: number; title: string; price: number; image: string }[]>([]);
  const [products, setProducts] = useState<{ id: number; title: string; price: number; image: string; slug: string }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load cart from localStorage
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }

    // Fetch product data
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/cardsData");
        const data = await res.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = (product: { id: number; title: string; price: number; image: string }) => {
    const newCart = [...cart, product];
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
    alert(`${product.title} added to cart!`);
  };

  return (
    <div className="pt-[70px] min-h-screen bg-gradient-to-b from-[#e8f5f8] to-[#a8dadc] px-4">
      <h1 className="text-4xl text-center font-bold mb-8 text-[#1d3557]">Featured Products</h1>

      {/* Loading State */}
      {loading ? (
        <div className="flex justify-center items-center h-[50vh]">
          <div className="w-12 h-12 border-4 border-dashed border-[#1d3557] rounded-full animate-spin"></div>
        </div>
      ) : (
        <>
          {/* Product Cards */}
          <div className="grid lg:grid-cols-4 xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-7">
            {products.map((product) => (
              <div key={product.id}>
                <ProductCard
                  id={product.id}
                  image={product.image}
                  title={product.title}
                  price={product.price}
                  addToCart={addToCart}
                />
              </div>
            ))}
          </div>

          {/* Go to Cart Button */}
          <Link href="/cart">
            <div className="bg-[#1d3557] text-white text-center py-2 px-6 mt-6 mb-4 mx-auto w-fit rounded-md shadow-lg hover:bg-[#457b9d] transition-all duration-300 transform hover:scale-105">
              Go to Cart ({cart.length})
            </div>
          </Link>
        </>
      )}
    </div>
  );
};

export default Card;
