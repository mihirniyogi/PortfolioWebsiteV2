import axios from "axios";

// pure function: takes in subpath, returns api response
async function fetchDataFromCMS(subpath: string) {
  const API_TOKEN = import.meta.env.VITE_STRAPI_API_TOKEN;
  const BASE_URL = import.meta.env.VITE_STRAPI_API_URL;

  const options = {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`, // Include the token in the headers
    },
  };

  const response = await axios
    .get(`${BASE_URL}${subpath}`, options)
    .then((res) => res.data);

  return response;
}

export default fetchDataFromCMS;
