import style from "./Avatar.module.scss";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useAppDispatch } from "app/providers/StoreProvider";
import UserSlice, { logout } from "entities/User/model/slice/UserSlice";
import { getAuthData } from "entities/User/model/selectors/getAuthData/getAuthData";
import { useSelector } from "react-redux";

// interface AvatarProps {
//   name: string;
// }

const Avatar = () => {
  const [name, setName] = useState("");
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const user = useSelector(getAuthData);

  useEffect(() => {
    if (user) {
      setName(user?.name);
    }
  }, [user]);

  const Logout = () => {
    dispatch(logout());
  };
  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className={style.menu}
    >
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={style.InAccount}>
          <h4>{name}</h4>
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="avatar" transform="translate(-1407 -182)">
              <circle
                id="Ellipse_16"
                data-name="Ellipse 16"
                cx="15"
                cy="15"
                r="15"
                transform="translate(1408 183)"
                fill="#e8f7f9"
                stroke="#333"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              />
              <g id="Group_49" data-name="Group 49">
                <circle
                  id="Ellipse_17"
                  data-name="Ellipse 17"
                  cx="4.565"
                  cy="4.565"
                  r="4.565"
                  transform="translate(1418.435 192.13)"
                  fill="#fff1b6"
                  stroke="#333"
                  stroke-miterlimit="10"
                  stroke-width="2"
                />
                <path
                  id="Path_53"
                  data-name="Path 53"
                  d="M1423,213a14.928,14.928,0,0,0,9.4-3.323,9.773,9.773,0,0,0-18.808,0A14.928,14.928,0,0,0,1423,213Z"
                  fill="#fff1b6"
                  stroke="#333"
                  stroke-miterlimit="10"
                  stroke-width="2"
                />
              </g>
            </g>
          </svg>
          {/* <Button onClick={() => Logout()}>Log Out</Button> */}
        </div>
      </motion.button>
      <motion.button
        className={style.subMenu}
        onClick={() => {
          setIsOpen(false);
          Logout();
        }}
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05,
            },
          },
          closed: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3,
            },
          },
        }}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
        <p>Log Out </p>
        <svg
          width="25px"
          height="25px"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 12H18M18 12L13 7M18 12L13 17"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </motion.button>
    </motion.nav>
  );
};

export default Avatar;
