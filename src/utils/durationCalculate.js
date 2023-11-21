function calculateDurationFromNow(createdAt) {
    const createdAtTime = new Date(createdAt).getTime();
    const currentTime = new Date().getTime();
    const duration = currentTime - createdAtTime;
  
    const hours = Math.floor(duration / (1000 * 60 * 60));
    const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((duration % (1000 * 60)) / 1000);
  
    if (hours > 0) {
      return `${hours} hours ago`;
    } else if (minutes > 0) {
      return `${minutes} minutes ago`;
    } else {
      return `${seconds} seconds ago`;
    }
  }

export default calculateDurationFromNow;