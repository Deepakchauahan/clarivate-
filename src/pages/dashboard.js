import { Link } from "react-router-dom";
import FavContext from "../context/favContext";
import { useContext } from "react";
import PostItem from "../components/Item";

const Dashboard = () => {
  const { fav } = useContext(FavContext);

  return (
    <div className="page-main">
      <Link to={"/list"} className="back-btn">
        List Page
      </Link>
      <h2 className="fav-title"> Favorite List Items</h2>
      <div className="list">
        {fav.length > 0 ?
          fav.map((post, index) => (
            <div className="list-item">
              <img src={post.thumbnailUrl} alt="missing" />
              <h2>{post.title}</h2>
              <h3>Item id: {post.id}</h3>
            </div>
          )):<div className="no-list">
          <p>No Data</p></div>}
      </div>
    </div>
  );
};

export default Dashboard;
