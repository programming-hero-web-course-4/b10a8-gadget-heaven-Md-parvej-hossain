import React, { useEffect, useState } from "react";
import Titlesubtile from "../components/Titlesubtile";
import { useLoaderData, useParams } from "react-router-dom";
import DeatailsCard from "../components/DeatailsCard";

const Details = () => {
  const data = useLoaderData();
  const { product_id } = useParams();
  const [detals, setDetalse] = useState({});
  useEffect(() => {
    const singleData = data.find((detal) => detal.product_id == product_id);
    setDetalse(singleData);
  }, [data, product_id]);

  return (
    <div className="relative mb-80">
      <div>
        <Titlesubtile
          title={"Product Details"}
          subtitle={
            "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
          }
        ></Titlesubtile>
      </div>

      <div className="absolute left-32 top-48">
        <DeatailsCard detals={detals}></DeatailsCard>
      </div>
    </div>
  );
};

export default Details;
