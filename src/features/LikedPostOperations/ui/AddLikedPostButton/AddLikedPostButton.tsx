import { useAppDispatch } from "app/providers/StoreProvider";
import { getAuthData } from "entities/User/model/selectors/getAuthData/getAuthData";
import { AddLikedPost } from "features/LikedPostOperations/model/services/AddLikedPost/AddLikedPost";
import style from "./AddLikedPostButton.module.scss";
import { useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";

interface AddLikedPostButtonType {
  onClick?: () => void;
  active: boolean;
  postId: string;
}

const AddLikedPostButton = ({
  onClick,
  active,
  postId,
}: AddLikedPostButtonType) => {
  const dispatch = useAppDispatch();
  const authData = useSelector(getAuthData);
  let likedUsers: Array<string> = authData?.likedUsers
    ? authData?.likedUsers
    : [];

  const AddInCart = (active: boolean) => {
    if (!active) {
      likedUsers = [...likedUsers, `${postId}`];
    } else {
      likedUsers = likedUsers.filter((post) => {
        return post != `${postId}`;
      });
    }
    const userData = {
      id: authData?.id,
      likedUsers: likedUsers,
    };
    console.log(userData);
    dispatch(AddLikedPost(userData));
  };
  return (
    authData && (
      <button
        onClick={() => {
          onClick();
          AddInCart(active);
        }}
        className={classNames(style.iconButton, { [style.active]: active })}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          display="block"
          id="Heart"
        >
          <path d="M7 3C4.239 3 2 5.216 2 7.95c0 2.207.875 7.445 9.488 12.74a.985.985 0 0 0 1.024 0C21.125 15.395 22 10.157 22 7.95 22 5.216 19.761 3 17 3s-5 3-5 3-2.239-3-5-3z" />
        </svg>
      </button>
    )
  );
};

export default AddLikedPostButton;
