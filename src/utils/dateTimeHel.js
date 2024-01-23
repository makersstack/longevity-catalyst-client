function calculateDurationFromNow(createdAt) {
  const createdAtTime = new Date(createdAt).getTime();
  const currentTime = new Date().getTime();
  const duration = currentTime - createdAtTime;

  const years = Math.floor(duration / (1000 * 60 * 60 * 24 * 365));
  const remainingDurationAfterYears = duration % (1000 * 60 * 60 * 24 * 365);

  const months = Math.floor(remainingDurationAfterYears / (1000 * 60 * 60 * 24 * 30));
  const remainingDurationAfterMonths = remainingDurationAfterYears % (1000 * 60 * 60 * 24 * 30);

  const days = Math.floor(remainingDurationAfterMonths / (1000 * 60 * 60 * 24));
  const hours = Math.floor((remainingDurationAfterMonths % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((remainingDurationAfterMonths % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingDurationAfterMonths % (1000 * 60)) / 1000);

  if (years > 0) {
    return `${years} year${years > 1 ? 's' : ''} ago`;
  } else if (months > 0) {
    return `${months} month${months > 1 ? 's' : ''} ago`;
  } else if (days > 0) {
    return `${days} day${days > 1 ? 's' : ''} ago`;
  } else if (hours > 0) {
    return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  } else if (minutes > 0) {
    return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  } else {
    return `${seconds} second${seconds !== 1 ? 's' : ''} ago`;
  }
}



const formatDateToString = (dateString, options) => {
  const date = new Date(dateString);
  const day = date.getUTCDate().toString().padStart(2, '0');
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const month = months[date.getUTCMonth()];
  const year = date.getUTCFullYear();

  if (options?.day === false) {
    return `${month} ${year}`;
  } else {
    return `${day} ${month} ${year}`;
  }

};


const dateTimeHel = {
  calculateDurationFromNow,
  formatDateToString
}
export default dateTimeHel;