import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";
axios.defaults.params = {
  client_id: "v4cJpPaSB54IXvHpABJQOFCzef8P-w1gIlaOpcybTko",
};

export const fetchApi = async (searchQuery, page) => {
  const response = await axios.get("/photos", {
    params: {
      query: searchQuery,
      per_page: 2,
      page,
    },
  });
  return response.data;
};
