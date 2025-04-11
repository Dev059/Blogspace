import { useContext} from "react";

import HeroSection from "../miniComponents/HeroSection.jsx";
import TrendingBlogs from "../miniComponents/TrendingBlogs";
import PopularAuthors from "../miniComponents/PopularAuthors";
import { Context } from "../../main";
import LatestBlogs from "../miniComponents/LatestBlogs"

const Home = () => {
  const { mode, blogs } = useContext(Context);
  const filteredBlogs = blogs.slice(0, 6);
  return (
    <>
      <article className={mode === "dark" ? "dark-bg" : "light-bg"}>
        <HeroSection />
        <TrendingBlogs />
        <LatestBlogs heading={"Latest Blogs"} blogs={filteredBlogs} />
        <PopularAuthors />
      </article>
    </>
  );
};

export default Home;