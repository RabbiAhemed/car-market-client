import React from "react";
import Banner from "../../components/Banner/Banner";
import CarArticles from "../../components/CarArticles/CarArticles";
import Categories from "../../components/Categories/Categories";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import Support from "../../components/Support/Support";
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Categories></Categories>
      <CarArticles></CarArticles>
      <Support></Support>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;
