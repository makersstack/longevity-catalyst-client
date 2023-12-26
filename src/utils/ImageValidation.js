const ValidateImageSize = (selectedImage, maxWidth, maxHeight) => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
            const imageSize = {
                width: img.width,
                height: img.height
            };
            if (imageSize.width > maxWidth || imageSize.height > maxHeight) {
                resolve(true);
            } else {
                resolve(false);
            }
        };
        img.onerror = (error) => {
            reject(error);
        };
        img.src = URL.createObjectURL(selectedImage);
    });
};

export default ValidateImageSize;

