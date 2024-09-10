import { useContext, useEffect, useState } from "react";
import PostItem from "../components/Item";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import FavContext from "../context/favContext";

const List = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const { fav, setFav } = useContext(FavContext);

  const fetchPost = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/albums/1/photos?_page=${page}&amp;_limit=20`
    );
    const data = await response.json();
    setPosts([...posts, ...data]);
    setPage((prev) => prev + 1);
  };
 const handlerFav = (value) => {
  const isFav = fav.some((favItem) => favItem.id === value.id);

  if (isFav) {
    setFav(fav.filter((favItem) => favItem.id !== value.id));
  } else {
    setFav([...fav, value]);
  }
};

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div className="page-main">
      <Link to={"/"} className="back-btn">
        Back
      </Link>
      <InfiniteScroll
        dataLength={posts.length}
        next={fetchPost}
        hasMore={true}
        loader={<h4 className="loading">Loading...</h4>}
      >
        <div className="list">
          {posts.length>0 &&
            posts.map((post, index) => <PostItem post={post} key={index} handlerFav={handlerFav} fav={fav}/>)}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default List;
