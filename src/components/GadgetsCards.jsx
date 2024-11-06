import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";

const GadgetsCards = () => {
  const data = useLoaderData();
  const { gadgetsCards } = useParams();
  const [gedcard,setgedcards]=useState([])
  
  useEffect(()=>{
    if(gadgetsCards){
      const filtercatagry =[...data].filter(
      card=>card.category===gadgetsCards
  )
  setgedcards(filtercatagry)
    }else{
      setgedcards(data.slice(0,9))
    }
    
  },[data,gadgetsCards])
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-start gap-10 justify-center ml-10 mt-5">
      {
        gedcard.map(gadgetcard=><Card key={gadgetcard.product_id} gadgetcard={gadgetcard}></Card>)
      }
    </div>
  );
};

export default GadgetsCards;
