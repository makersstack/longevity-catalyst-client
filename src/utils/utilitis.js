export const genProjectLink = (projectId) => {
  const encodedId = btoa(projectId.toString());
  return encodedId;
};

export const decodeProjectLink = (encodedId) => {
  try {
    const decodedId = atob(encodedId);
    return decodedId;
  } catch (error) {
    console.error('Decoding error:', error);
    return null; // Return null or handle the error as per your requirement
  }
};
// password validation
const isPasswordValid = (password) => {
  return /^(?=.*[A-Z])(?=.*\d)(?=.*[@#$%])[A-Za-z\d@#$%]{8,}$/.test(password);
};

export const validatePassword = (password) => {
  if (password.length === 0) {
    return 'Password is Required';
  } else if (!isPasswordValid(password)) {
    return 'Password must contain at least one uppercase letter, one number, and one of "@#$%" characters. It should be at least 8 characters long.';
  }
  return ''; // Indicates no error
};

// For Scroll specific section
export const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);

  if (section) {
    window.scrollTo({
      top: section.offsetTop - 20, 
      behavior: 'smooth',
    });
  }
};

export const generateUniqueId = (title, id) => {
  const timestamp = new Date().getTime();
  const words = title.split(' ');
  const firstFourWords = words.slice(0, 10);
  const lowercaseWords = firstFourWords.map(word => word.toLowerCase());
  
  const concatenatedString = lowercaseWords.join('-') + '-' + timestamp + id;

  return concatenatedString;
};