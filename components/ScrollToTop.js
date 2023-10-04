import { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa";
import styles from "../styles/scrollToTop.module.scss";

const ScrollToTop = () => {
  const [isShowTopBtn, setIsShowTopBtn] = useState(false);
  const windowOffsetYValue = 400;

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleScroll = () => {
    window.scrollY > windowOffsetYValue
      ? setIsShowTopBtn(!isShowTopBtn)
      : setIsShowTopBtn(isShowTopBtn);
  };

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.topBtn}>
      {isShowTopBtn && <FaAngleUp className={styles.icon} onClick={goToTop} />}
    </div>
  );
};

export default ScrollToTop;
