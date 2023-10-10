import React, { useEffect, useState } from "react";
import miFetch from "./Fetching";

const CatImg = () => {
  const [image, setImage] = useState("");
  const [button, setButton] = useState(true);

  useEffect(() => {
    miFetch("https://api.thecatapi.com/v1/images/search")
      .then((data) => {
        setImage(data[0].url);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <div>
        <img src={image} alt="Cat" />
      </div>
    </>
  );
};

export default CatImg;
