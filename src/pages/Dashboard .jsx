import { useEffect, useState } from "react";
import Das from "../components/Das";
import { getAllFavarets, removeFavorite } from "../utils";
import Card from "../components/Card";

const Dashboard = () => {
  const [product, setProduct] = useState([]);
  const [sort, setSort] = useState("");
  const [totalCost, setTotalCost] = useState(0);
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  useEffect(() => {
    const favarites = getAllFavarets();
    setProduct(favarites);
  }, []);

  useEffect(() => {
    const cost = product.reduce((acc, curr) => acc + curr.price, 0);
    setTotalCost(cost);
  }, [product]);

  const handleRemove = (product_id) => {
    removeFavorite(product_id);
    const favarites = getAllFavarets();
    setProduct(favarites);
  };

  const handaleSort = (sortType) => {
    setSort(sortType);
    if (sortType === "price") {
      const sortedreadList = [...product].sort((a, b) => a.price - b.price);
      setProduct(sortedreadList);
    }
    if (sortType === "purchase") {
      const sortedreadList = [...product].sort((a, b) => b.price - a.price);
      setProduct(sortedreadList);
    }
  };

  const handlePurchase = () => {
    setShowModal(true);
    setProduct([]);
    setTotalCost(0);
  };

  const closeModal = () => {
    setShowModal(false); // Hide the modal
  };

  return (
    <div>
      <div className="bg-[#9538E2]">
        <Das
          title={"Dashboard"}
          subtitle={
            "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
          }
          btn1={"Cart"}
          btn2={"Wishlist"}
        />
      </div>
      <div className="flex justify-between w-11/12 mx-auto my-10">
        <div>
          <h2 className="text-2xl font-bold">Cart</h2>
        </div>
        <div className="flex items-center space-x-10">
          <h2 className="text-2xl font-bold">Total cost: ${totalCost}</h2>
          <button
            onClick={() => {
              handaleSort("price");
            }}
            className="btn"
          >
            Sort by Price
          </button>
          <button onClick={handlePurchase} className="btn">
            Purchase
          </button>{" "}
          {/* Purchase button */}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-start gap-10 justify-center ml-10 mt-5 w-11/12">
        {product.map((gadgetcard) => (
          <Card
            handleRemove={handleRemove}
            key={gadgetcard.product_id}
            gadgetcard={gadgetcard}
          />
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-8 rounded shadow-lg max-w-sm text-center">
            <h2 className="text-2xl font-bold mb-4 ">Payment Successfully!</h2>
            <p>Thanks for purchasing. </p>
            <p>Total:$2449.96.</p>
            <button onClick={closeModal} className="mt-4 btn w-full">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
