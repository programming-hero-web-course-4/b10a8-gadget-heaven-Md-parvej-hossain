const Das = ({ title, subtitle, btn1, btn2 }) => {
  return (
    <div className="text-center gap-y-5 w-9/12 mx-auto text-white py-10 space-y-8 ">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p text-base py-5>
        {subtitle}
      </p>
      <div className="space-x-5">
        <button className="text-xl font-bold btn  rounded-3xl px-10 text-[#9538E2]">
          {btn1}
        </button>
        <button className="text-xl font-bold btn rounded-3xl px-10 text-[#9538E2]">
          {btn2}
        </button>
      </div>
    </div>
  );
};

export default Das;
