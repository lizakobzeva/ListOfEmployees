import Post from "entities/Post/ui/Post";
import style from "./LikedUsersPage.module.scss";
import { useEffect, useState } from "react";
import { useAppDispatch } from "app/providers/StoreProvider";
import { GetPosts } from "features/PostsOperations/model/services/GetPosts/GetPosts";
import { useSelector } from "react-redux";
import { getPostsSelector } from "features/LikedPostOperations/model/selectors/getPostsSelector/getPostsSelector";
import Loader from "shared/ui/Loader";
import { getAuthData } from "entities/User/model/selectors/getAuthData/getAuthData";
import { useNavigate } from "react-router-dom";
import { TOKEN_LOCALSTORAGE_KEY } from "shared/const/localStorage";

const LikedUsersPage = () => {
  const [posts, setPosts] = useState([
    { id: "", imageUrl: "", title: "", text: "", date: "" },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const authData = useSelector(getAuthData);
  const token = window.localStorage.getItem(TOKEN_LOCALSTORAGE_KEY);
  const LikedUsers = authData?.likedUsers ?? [];
  let AllUsersArray = [...posts].reverse().filter((post) => {
    return LikedUsers.includes(`${post.id}`);
  });

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
    setIsLoading(true);
    dispatch(GetPosts(0)).then((res) => {
      setPosts(res.payload);
      setIsLoading(false);
    });
  }, [authData?.id]);

  return isLoading ? (
    <Loader />
  ) : (
    <section className={`section container ${style.Posts}`}>
      {authData?.id ? (
        AllUsersArray.map((post) => (
          <Post
            like={LikedUsers.includes(`${post.id}`)}
            key={post.id}
            imageUrl={post.imageUrl}
            title={post.title}
            postId={post.id}
            text={post.text}
            date={post.date}
          />
        ))
      ) : (
        <h2>Log in to your account</h2>
      )}
    </section>
  );
};

export default LikedUsersPage;
