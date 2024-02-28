import { useEffect, useState } from "react";
import ArticleList from "../ArticleList/ArticleList";
import css from "./App.module.css";
import { fetchArticle } from "../../articl-api";
import SearchForm from "../SearchForm/SearchForm";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (searchQuery === "") {
      return;
    }

    async function getData() {
      try {
        setIsLoading(true);
        setError(false);
        const data = await fetchArticle(searchQuery, page);
        setArticles((prevArticles) => {
          return [...prevArticles, ...data];
        });
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [searchQuery, page]);

  const hendleSearch = (newQuery) => {
    setSearchQuery(newQuery);
    setPage(1);
    setArticles([]);
  };

  const hendleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <>
      <h1>Hello World!</h1>
      <SearchForm onSearch={hendleSearch} />

      {error && <b>Opss... error</b>}
      <div className={css.title}>
        {articles.length > 0 && <ArticleList items={articles} />}
      </div>
      {articles.length > 0 && !isLoading && (
        <button onClick={hendleLoadMore}>Load more</button>
      )}
      {isLoading && <b>Loading articles...</b>}
    </>
  );
}

//  useEffect(() => {
//    async function getArticles() {
//      const data = await fetchArticle();

//      setArticles(data);
//    }
//    getArticles();
//  }, []);
