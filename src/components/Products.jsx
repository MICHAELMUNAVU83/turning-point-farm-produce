import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const products = [
    {
      id: 1,
      image: "/crop1.svg",
      name: "French Beans",
      description:
        "also known as snap or green beans, and locally in Kenya as mishiri, are a major export crop.French beans are a member of the Fabaceae family alongside the common bean. They are specifically bred and cultivated for their pods versus their seeds ",
    },
    {
      id: 2,
      image: "/crop2.svg",
      name: "Snow Peas",
      description:
        "also known as snap or green beans, and locally in Kenya as mishiri, are a major export crop.French beans are a member of the Fabaceae family alongside the common bean. They are specifically bred and cultivated for their pods versus their seeds ",
    },
    {
      id: 3,
      image: "/crop3.svg",
      name: "Sugar Snaps",
      description:
        "also known as snap or green beans, and locally in Kenya as mishiri, are a major export crop.French beans are a member of the Fabaceae family alongside the common bean. They are specifically bred and cultivated for their pods versus their seeds ",
    },
    {
      id: 4,
      image: "/crop4.svg",
      name: "Garden Peas",
      description:
        "also known as snap or green beans, and locally in Kenya as mishiri, are a major export crop.French beans are a member of the Fabaceae family alongside the common bean. They are specifically bred and cultivated for their pods versus their seeds ",
    },
    {
      id: 5,
      image: "/crop5.svg",
      name: "Maize",
      description:
        "also known as snap or green beans, and locally in Kenya as mishiri, are a major export crop.French beans are a member of the Fabaceae family alongside the common bean. They are specifically bred and cultivated for their pods versus their seeds ",
    },
    {
      id: 6,
      image: "/crop6.svg",
      name: "Baby Carrots",
      description:
        "also known as snap or green beans, and locally in Kenya as mishiri, are a major export crop.French beans are a member of the Fabaceae family alongside the common bean. They are specifically bred and cultivated for their pods versus their seeds ",
    },
  ];
  return (
    <div
      id="products"
      className="py-8 bg-[#D9D9D9]  flex flex-col justify-center items-center"
    >
      <p className="text-[#076C05] text-5xl   font-bold">Products</p>

      <div className="grid md:grid-cols-3 w-[80%] my-8 mx-auto gap-12">
        {products.map((product) => (
          <div className="flex flex-col hover:scale-105 transition-all ease-in-out duration-500 cursor-pointer shadow-sm shadow-gray-300 justify-center items-center">
            <img
              src={product.image}
              className="h-[280px] rounded-t-md object-cover w-[100%]"
            />
            <div className="h-[250px] bg-white rounded-b-md  p-2">
              <span className="text-[#0B8308] font-semibold">
                {product.name}
              </span>{" "}
              , {product.description}
            </div>
          </div>
        ))}
      </div>

      <Link to="/products">
        <button className="bg-[#6E9320] rounded-md text-white p-2">
          View All Products
        </button>
      </Link>
    </div>
  );
};

export default Products;
