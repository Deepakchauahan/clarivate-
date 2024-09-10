import { useContext } from "react";
import FavContext from "../context/favContext";

const PostItem = ({ post, handlerFav }) => {
  const { fav } = useContext(FavContext);

  const isFav = fav.some((favItem) => favItem.id === post.id);

  return (
    <div className="list-item">
      <img src={post.thumbnailUrl} alt="missing" />
      <h2>{post.title}</h2>
      <h3>Item id: {post.id}</h3>
      <button className="fav-btn" onClick={() => handlerFav(post)}>
        {isFav ? "Unfavorite" : "Favorite"}
      </button>
    </div>
  );
};

export default PostItem;
