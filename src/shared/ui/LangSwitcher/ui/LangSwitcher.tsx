import style from "./LangSwitcher.module.scss";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import i18n from "i18next";

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

export default function LangSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const toogleLang = (lang: string) => {
    i18n.changeLanguage((i18n.language = lang));
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
        Language
        <motion.div
          className={style.arrow}
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 },
          }}
          transition={{ duration: 0.2 }}
          style={{ originY: 0.55 }}
        >
          <svg width="15" height="15" viewBox="0 0 20 20">
            <path d="M0 7 L 20 7 L 10 16" />
          </svg>
        </motion.div>
      </motion.button>
      <motion.ul
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
        <motion.li
          onClick={() => {
            toogleLang("ru");
            setIsOpen(false);
          }}
          variants={itemVariants}
        >
          <p className={i18n.language == "ru" ? style.active : ""}>Русский</p>
        </motion.li>
        <motion.li
          onClick={() => {
            toogleLang("en");
            setIsOpen(false);
          }}
          variants={itemVariants}
        >
          <p className={i18n.language == "en" ? style.active : ""}>English</p>
        </motion.li>
      </motion.ul>
    </motion.nav>
  );
}
