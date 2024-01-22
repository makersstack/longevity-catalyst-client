import React, { useEffect, useState } from 'react';
import { BsArrowUp } from 'react-icons/bs';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const YOffset = window.scrollY;
    if (YOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className='scrollToTop'>
      {
        isVisible && (
          <button className='scroll-to-top-button' onClick={scrollToTop}>
            <BsArrowUp  />
          </button>
        )
      }
    </div>
  );
};

export default ScrollToTopButton;