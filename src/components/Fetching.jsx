// "https://catfact.ninja/fact"

//const url = "https://catfact.ninja/fact";

const urlFetch = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
};

export default urlFetch;
