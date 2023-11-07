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

// Example usage
// const selectedImage = /* provide the selected image */;
// const maxWidth = 800;
// const maxHeight = 800;

// ValidateImageSize(selectedImage, maxWidth, maxHeight)
//     .then((isValid) => {
//         if (isValid) {
//             console.log('Image dimensions are valid');
//         } else {
//             console.log('Image dimensions are invalid');
//         }
//     })
//     .catch((error) => {
//         console.error('Error occurred during image validation:', error);
//     });
