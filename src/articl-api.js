import axios from "axios";
axios.defaults.baseURL = "https://hn.algolia.com/api/v1";

export const fetchArticle = async (searchQuery, page) => {
  const response = await axios.get("/search", {
    params: {
      query: searchQuery,
      hitsPerPage: 10,
      page,
    },
  });
  return response.data.hits;
};
