import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollToTop from '../utils/routeChange';

const PageNotFound = ({showInfoText}) => {
    useEffect(() => {
        document.title = showInfoText+' - Longevity Catalyst';
      }, [showInfoText]);
    ScrollToTop();
    return (
        <div className='auto-fit' style={{textAlign:'center', padding:'90px 0'}}>
           <h1 >{showInfoText} </h1>
           <Link to='/' className='btn btn-dark ' style={{marginTop:'20px', display:'inline-block'}}>
                Go to Home
            </Link>
        </div>
    );
};

export default PageNotFound;