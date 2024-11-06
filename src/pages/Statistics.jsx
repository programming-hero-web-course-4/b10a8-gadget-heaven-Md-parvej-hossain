import { useLoaderData } from "react-router-dom";
import Stati from "../components/Stati";
import Titlesubtile from "../components/Titlesubtile";

const Statistics = () => {
  const data = useLoaderData();
  return (
    <div>
      <Titlesubtile
        title={"Statistics"}
        subtitle={
          "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
        }
      ></Titlesubtile>
      <div className="flex justify-center my-10">
        <Stati></Stati>
      </div>
    </div>
  );
};

export default Statistics;
