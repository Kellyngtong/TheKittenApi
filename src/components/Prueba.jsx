import customFetch from "./Fetching"; // Assuming Prueba.jsx is in the same directory

const Prueba = () => {
  return (
    <>
      <h1>sexo</h1>
      {customFetch("https://catfact.ninja/fact")}
      <h2>anal</h2>
    </>
  );
};

export default Prueba;
