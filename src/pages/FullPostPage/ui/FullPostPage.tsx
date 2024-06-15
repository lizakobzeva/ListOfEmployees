import { useNavigate, useParams } from "react-router-dom";
import style from "./FullPostPage.module.scss";
import { useEffect, useState } from "react";
import { useAppDispatch } from "app/providers/StoreProvider";
import { GetPost } from "features/PostsOperations/model/services/GetPost/GetPost";
import Loader from "shared/ui/Loader";
import AddLikedPostButton from "features/LikedPostOperations/ui/AddLikedPostButton/AddLikedPostButton";
import { useSelector } from "react-redux";
import { getAuthData } from "entities/User/model/selectors/getAuthData/getAuthData";
import { TOKEN_LOCALSTORAGE_KEY } from "shared/const/localStorage";

const FullPostPage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const authData = useSelector(getAuthData);
  const [activeLike, setActiveLike] = useState(false);
  const token = window.localStorage.getItem(TOKEN_LOCALSTORAGE_KEY);
  const [post, setPost] = useState({
    imageUrl: "",
    title: "",
    text: "",
    date: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
    setIsLoading(true);
    dispatch(GetPost(params.id)).then((res) => {
      setPost(res.payload);
      setIsLoading(false);
    });
    authData?.likedUsers.map((post) => console.log(typeof post, post));
    console.log(params.id);
    if (authData?.likedUsers.includes(params.id)) {
      console.log("active");
      setActiveLike(true);
    }
  }, [params]);

  return isLoading ? (
    <Loader />
  ) : (
    <div className={` section ${style.FullPostPage}`}>
      <img className={style.FullPostImage} src={`${post.imageUrl}`} alt="" />

      <div className={style.cardHeader}>
        <h2>{post.title}</h2>
        <AddLikedPostButton
          postId={params.id}
          active={activeLike}
          onClick={() => {
            setActiveLike(!activeLike);
            console.log("like");
          }}
        />
      </div>

      <p className={style.text}>{post.text}</p>
    </div>
  );
};

export default FullPostPage;
