import React, { useState, useEffect } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Article from "./Article";
import "./App.css";
const App = () => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMoreData, setHasMoreData] = useState(true);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = () => {
    const url = `http://localhost:3001/api/photo-gallery-feed-page/${page}`;

    axios
      .get(url)
      .then((response) => {
        const { data } = response;
        const articlesData = data && data.nodes ? data.nodes : [];

        if (articlesData.length === 0) {
          setHasMoreData(false); // No more data available
        } else {
          setArticles((prevArticles) => [...prevArticles, ...articlesData]);
          setPage((prevPage) => prevPage + 1);
        }
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
      });
  };
  return (
    <div className="">
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchArticles}
        hasMore={hasMoreData}
        loader={<h4>Loading...</h4>}
      >
        {articles.map((article) => (
          <Article key={article.nid} {...article} />
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default App;
