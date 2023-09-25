import React from "react";

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
    {
      id: 7,
      image: "/crop7.svg",
      name: "Chillies",
      description:
        "also known as snap or green beans, and locally in Kenya as mishiri, are a major export crop.French beans are a member of the Fabaceae family alongside the common bean. They are specifically bred and cultivated for their pods versus their seeds ",
    },
    {
      id: 8,
      image: "/crop8.svg",
      name: "Assorted herbs",
      description:
        "also known as snap or green beans, and locally in Kenya as mishiri, are a major export crop.French beans are a member of the Fabaceae family alongside the common bean. They are specifically bred and cultivated for their pods versus their seeds ",
    },
    {
      id: 9,
      image: "/crop9.svg",
      name: "Purple Passion Fruits",
      description:
        "also known as snap or green beans, and locally in Kenya as mishiri, are a major export crop.French beans are a member of the Fabaceae family alongside the common bean. They are specifically bred and cultivated for their pods versus their seeds ",
    },
    {
      id: 10,
      image: "/crop10.svg",
      name: "Mangoes",
      description:
        "also known as snap or green beans, and locally in Kenya as mishiri, are a major export crop.French beans are a member of the Fabaceae family alongside the common bean. They are specifically bred and cultivated for their pods versus their seeds ",
    },
  ];
  return (
    <div>
      <img src="/shortbg.png" className="w-[100%] h-[240px]" />
      <div
        id="products"
        className="py-8 bg-[#D9D9D9]  flex flex-col justify-center items-center"
      >
        <p className="text-[#076C05] text-5xl   font-bold"> All Products</p>

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
      </div>
    </div>
  );
};

export default Products;
