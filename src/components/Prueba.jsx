import customFetch from "./Fetching"; // Assuming Prueba.jsx is in the same directory

const Prueba = () => {
  return (
    <>
      <h1>Hola</h1>
      {customFetch("https://catfact.ninja/fact")}
      <h2>Mundo</h2>
    </>
  );
};

export default Prueba;
