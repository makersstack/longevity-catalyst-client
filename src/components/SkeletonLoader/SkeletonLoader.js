import PropTypes from 'prop-types';
import React from 'react';
import './SkeletonLoader.css';

function SkeletonLoader({ type, count }) {
  const renderSkeletons = () => {
    const skeletons = [];

    for (let i = 0; i < count; i++) {
      skeletons.push(
        <div key={i} className={`skeleton-${type}`}></div>
      );
    }

    return skeletons;
  };

  return <div className="skeleton-loader">{renderSkeletons()}</div>;
}

SkeletonLoader.propTypes = {
  type: PropTypes.oneOf(['header', 'content']),
  count: PropTypes.number,
};

SkeletonLoader.defaultProps = {
  type: 'content',
  count: 1,
};

export default SkeletonLoader;
