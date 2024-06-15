import { Link } from "react-router-dom";
import style from "./Post.module.scss";
import { useState } from "react";
import AddLikedPostButton from "features/LikedPostOperations/ui/AddLikedPostButton/AddLikedPostButton";

interface PostType {
  imageUrl: string;
  title: string;
  postId: string;
  like: boolean;
}
const Post = ({ imageUrl, title, postId, like }: PostType) => {
  const [activeLike, setActiveLike] = useState(like);
  return (
    <div className={style.cardList}>
      <article className={style.card}>
        <figure className={style.cardImage}>
          <img src={`${imageUrl}`} alt="" />
        </figure>
        <div className={style.cardHeader}>
          <Link to={`/${postId}`}>{title}</Link>
        </div>

        <div className={style.cardFooter}>
          <AddLikedPostButton
            postId={postId}
            active={activeLike}
            onClick={() => {
              setActiveLike(!activeLike);
              console.log("like");
            }}
          />
        </div>
      </article>
    </div>
  );
};

export default Post;
