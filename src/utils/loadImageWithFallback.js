const loadImageWithFallback = async (imageUrl, defaultUrl) => {
    try {
      const img = new Image();
      img.src = imageUrl;
  
      await new Promise((resolve, reject) => {
        img.onload = () => resolve(img.src);
        img.onerror = () => reject(defaultUrl);
      });
  
      return img.src;
    } catch (error) {
      return defaultUrl;
    }
  };
  
  export default loadImageWithFallback;
  