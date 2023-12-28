import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { avatersFor } from '../../constants/avaters';
import { instance as axoisInstance } from '../../helpers/axios/axoisInstance';
import ImageTagWithFallback from '../common/ImageTagWithFallback';

const fetchLikes = async (postId) => {
  try {
    const response = await axoisInstance.get(`/api/likes/${postId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching likes:', error);
    return [];
  }
};

const ShowLikes = ({ postId }) => {
  const [likes, setLikes] = useState(0);
  const [likedUsers, setLikedUsers] = useState([]);

  useEffect(() => {
    fetchLikes(postId).then((data) => {
      setLikes(data.likes.length);
      setLikedUsers(data.users);
    });
  }, [postId]);

  return (
    <div className="project_reso_details">
      <div className="liked_users">
        {likedUsers.slice(-3).map((user, index) => (
          <Link to="/" key={index}>
            <ImageTagWithFallback src={user.profileImageUrl} fallbackSrc={avatersFor.user} alt={"userImage"} />
          </Link>
        ))}
      </div>
      <p>
        {likes} {likes === 1 ? 'person liked this post.' : 'people liked this post.'}
      </p>
    </div>
  );
};

export default ShowLikes;