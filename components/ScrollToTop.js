import { useState, useEffect } from 'react';
import { FaAngleUp } from 'react-icons/fa';
import styles from '../styles/scrollToTop.module.scss';

const ScrollToTop = () => {

  const [showTopBtn, setShowTopBtn] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            setShowTopBtn(true)
        } else {
            setShowTopBtn(false)
        }
    });
  }, []);
  
  const goToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
  };

  return (
      <div className={styles.topBtn}>
        { showTopBtn && <FaAngleUp className={styles.icon} onClick={goToTop} /> }
      </div>
  );
};

export default ScrollToTop;