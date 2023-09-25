import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const products = [
    {
      id: 1,
      image: "/crop1.svg",
      name: "French Beans",
      description:
        "A delicious and nutritious vegetable. They are a major export crop and a member of the Fabaceae family. Specifically bred and cultivated for their pods versus their seeds.",
    },
    {
      id: 2,
      image: "/crop2.svg",
      name: "Snow Peas",
      description:
        "A delightful vegetable locally known in Kenya as mishiri. They are a major export crop and belong to the Fabaceae family. Specifically bred and cultivated for their pods rather than their seeds.",
    },
    {
      id: 3,
      image: "/crop3.svg",
      name: "Sugar Snaps",
      description:
        "A sweet and crunchy vegetable, sometimes referred to as snap or green beans. In Kenya, they are known as mishiri and are a major export crop. They are part of the Fabaceae family and cultivated for their pods with deliciously sweet seeds inside.",
    },
    {
      id: 4,
      image: "/crop4.svg",
      name: "Garden Peas",
      description:
        "A popular vegetable in many dishes, also known as snap or green beans in Kenya (mishiri). They are a significant export crop and belong to the Fabaceae family. Grown for their pods containing tasty peas.",
    },
    {
      id: 5,
      image: "/crop5.svg",
      name: "Maize",
      description:
        "A staple crop essential in many diets worldwide. Maize is a cereal grain cultivated for its edible kernels, used in various food products.",
    },
    {
      id: 6,
      image: "/crop6.svg",
      name: "Baby Carrots",
      description:
        "A delightful and nutritious root vegetable. They are a popular vegetable, not called mishiri in Kenya. Baby carrots belong to the Apiaceae family and are known for their sweet flavor, suitable as a healthy snack option.",
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
