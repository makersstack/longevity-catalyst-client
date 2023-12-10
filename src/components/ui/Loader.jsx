import React from 'react';
import '../../assets/styles/Loader.css';
import useLoading from '../../hooks/useLoading';

const Loader = () => {
  const { isLoading } = useLoading();

  return isLoading ? <div className='loader_container'>
    <div className="loader">
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
    </div>
  </div> : null;
};

export default Loader;
