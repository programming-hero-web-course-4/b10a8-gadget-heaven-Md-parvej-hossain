import toast from "react-hot-toast";

//get all product from local strage
const getAllFavarets = () => {
  const all = localStorage.getItem("fabarets");

  if (all) {
    const fabarets = JSON.parse(all);
    console.log(fabarets);
    return fabarets;
  } else {
    return [];
  }
};
//add a product to local storage
const addFabaret = (product) => {
  const fabarets = getAllFavarets();
  const isExits = fabarets.find(
    (item) => item.product_id == product.product_id
  );
  if (isExits) return toast.error("Product alresdy exists");
  fabarets.push(product);
  localStorage.setItem("fabarets", JSON.stringify(fabarets));
  toast.success("Successfully Added!");
};
//remob a product to local storage
const removeFavorite=(product_id)=>{
  const fabarets = getAllFavarets();
  const remained=fabarets.filter(product=>product.product_id!=product_id)
  localStorage.setItem("fabarets", JSON.stringify(remained));
  toast.success("Successfully Removed!");
}


export { addFabaret, getAllFavarets ,removeFavorite};
