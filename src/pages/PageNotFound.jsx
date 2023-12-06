import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollToTop from '../utils/RouteChange';

const PageNotFound = () => {
    useEffect(() => {
        document.title = '404 Page not Found - Longevity Catalyst';
      }, []);
    ScrollToTop();
    return (
        <div className='auto-fit' style={{textAlign:'center', padding:'90px 0'}}>
           <h1 >Page not Found !</h1>
           <Link to='/' className='btn btn-dark '>
                Go to Home
            </Link>
        </div>
    );
};

export default PageNotFound;