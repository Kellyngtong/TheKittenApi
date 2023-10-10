import React, { useEffect, useState } from "react";

import miFetch from "./Fetching";

const CatFact = () => {
  const [fact, setFact] = useState("");
  const [button, setButton] = useState(true);

  function toggledButton() {
    setButton(!button);
  }

  useEffect(() => {
    miFetch("https://catfact.ninja/fact")
      .then((data) => {
        setFact(data.fact);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [button]);

  return (
    <>
      <div>
        <p>{fact}</p>
        <button onClick={toggledButton}>Click</button>
      </div>
    </>
  );
};

export default CatFact;
