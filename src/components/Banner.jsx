import Header from "./Header";

const Banner = () => {
  return (
    <div className="relative mb-64">
      <div className=" bg-[#9538E2]  h-[500px] rounded-3xl  mx-auto">
        <Header
          title={"Upgrade Your Tech Accessorize with Gadget Heaven Accessories"}
          subtitle={
            "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
          }
          button={"Shop Now"}
        />
      </div>

      <div className="flex justify-center absolute left-48 top-80">
        <img
          className="bg-cover h-[400px] top-5  border-gray-50 border-2 p-2 rounded-3xl"
          src="https://i.ibb.co.com/wycdzzV/Rectangle-1.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
