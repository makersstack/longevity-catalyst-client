import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the top of the page with smooth scrolling when the route changes
    const scrollOptions = {
      top: 0,
      behavior: 'smooth', // Add smooth scrolling behavior
    };
    window.scrollTo(scrollOptions);
  }, [location]);

  return null;
}

export default ScrollToTop;
