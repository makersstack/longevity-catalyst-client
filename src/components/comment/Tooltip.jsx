import React, { useEffect, useState } from 'react';

const Tooltip = ({ text, children }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="tooltip-container">
      {children}
      {!isMobile && <div className="tooltip">{text}</div>}
    </div>
  );
};

export default Tooltip;
