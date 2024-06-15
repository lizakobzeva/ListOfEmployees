import Post from "entities/Post/ui/Post";
import style from "./AllUsers.module.scss";
import { useEffect, useState } from "react";
import { useAppDispatch } from "app/providers/StoreProvider";
import { GetPosts } from "features/PostsOperations/model/services/GetPosts/GetPosts";
import { useSelector } from "react-redux";
import Loader from "shared/ui/Loader";
import { getAuthData } from "entities/User/model/selectors/getAuthData/getAuthData";
import { useNavigate } from "react-router-dom";
import { TOKEN_LOCALSTORAGE_KEY } from "shared/const/localStorage";
import Pagination from "shared/ui/Pagination";
import { getActivePage } from "entities/Post/model/selectors/getActivePage";

const AllUsers = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([{ id: "", imageUrl: "", title: "" }]);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
  const token = window.localStorage.getItem(TOKEN_LOCALSTORAGE_KEY);
  const authData = useSelector(getAuthData);
  const activePage = useSelector(getActivePage);
  const likedUsers = authData?.likedUsers ?? [];
  let AllUsersArray = [...posts].reverse();

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
    setIsLoading(true);
    dispatch(GetPosts(activePage)).then((res) => {
      setPosts(res.payload);
      setIsLoading(false);
    });
  }, [token, activePage]);

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <section className={`section container ${style.AllUsersPage}`}>
        <div className={style.AllUsers}>
          {AllUsersArray.map((post) => (
            <Post
              like={likedUsers.includes(`${post.id}`)}
              key={post.id}
              imageUrl={post.imageUrl}
              title={post.title}
              postId={post.id}
            />
          ))}
        </div>
        <Pagination />
      </section>
    </>
  );
};

export default AllUsers;
