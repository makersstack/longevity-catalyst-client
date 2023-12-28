import React, { useEffect, useState } from 'react';
import loadImageWithFallback from '../../utils/loadImageWithFallback';

const ImageTagWithFallback = ({ src, fallbackSrc, alt, golClass }) => {
    const [imageUrl, setImageUrl] = useState(fallbackSrc);

    useEffect(() => {
      const fetchImage = async () => {
        try {
          const loadedImageUrl = await loadImageWithFallback(src, fallbackSrc);
          setImageUrl(loadedImageUrl);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchImage();
    }, [src, fallbackSrc]);

    return <img src={imageUrl} alt={alt} className={`${golClass ? golClass : ""}`} />;
};

export default ImageTagWithFallback;