import React from "react";
import { addFabaret } from "../utils";

const DeatailsCard = ({ detals }) => {
  const { product_image, price, description, product_title, specification } =
    detals || {};
  //Handale addtocart btn
  const addtoCard = (detals) => {
    addFabaret(detals);
  };

  return (
    <div className="card card-side bg-base-100 shadow-xl  mx-auto mb-10 rounded-3xl">
      <img
        className="rounded-l-3xl object-cover w-[400px]"
        src={product_image}
        alt="product image"
      />

      <div className="ml-10 p-2">
        <h2 className="text-3xl font-semibold">{product_title}</h2>
        <p className="text-2xl font-semibold">price :${price}.</p>
        <button className="bg-[#EAF5E6] text-green-400 p-2 px-4 rounded-3xl ">
          In Stock
        </button>
        <p className="text-base">{description}</p>
        <div>
          <h3 className="text-2xl font-bold">Specification:</h3>
          <ul>
            {specification &&
              specification.map((speci, index) => (
                <li key={index}>
                  {speci.key}, {speci.value}
                </li>
              ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold py-2">Rating ⭐ </h2>
          <div className="rating">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              defaultChecked
            />

            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
        </div>
        <div className="flex items-center space-x-5 my-2">
          <button onClick={() => addtoCard(detals)} className="btn btn-outline">
            Add To Card
          </button>
          <button onClick={() => addtoCard(detals)}>
            <img
              className="w-12 border-2 rounded-full p-2 hover:bg-slate-500"
              src="https://img.icons8.com/?size=48&id=86721&format=png"
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeatailsCard;
