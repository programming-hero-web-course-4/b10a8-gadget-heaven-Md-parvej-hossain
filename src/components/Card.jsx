import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { IoMdCloseCircle } from "react-icons/io";
const Card = ({ gadgetcard ,handleRemove}) => {
  const { pathname } = useLocation();
  const { product_title, product_image, product_id, price } = gadgetcard || {};

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={product_image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{product_title}</h2>
        <p>Price: ${price}</p>
        <div className="card-actions">
          <Link
            to={`/details/${product_id}`}
            onClick={() => {}}
            className="btn bg-[#9637E1] rounded-3xl text-white px-6 "
          >
            Details
          </Link>
        </div>
      </div>
      {pathname === "/dashboard" && (
        <div onClick={()=>{handleRemove(product_id)}} className="absolute -top-5 -right-5 p-2 bg-warning rounded-full cursor-pointer">
          <IoMdCloseCircle size={25} />
        </div>
      )}
    </div>
  );
};

export default Card;
