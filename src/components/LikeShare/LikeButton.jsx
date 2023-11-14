import React, { useState } from 'react';
import { AiOutlineLike } from 'react-icons/ai';
import { instance } from '../../helpers/axios/axoisInstance';

const LikeButton = ({ postId }) => {
  const [liked, setLiked] = useState(false);

  const handleLike = async () => {
    try {
      // Send a request to like or unlike the post
      if (liked) {
        // If already liked, send an "unlike" request
        await instance.post(`/api/unlike/${postId}`);
      } else {
        // If not liked, send a "like" request
        await instance.post(`/api/like/${postId}`);
      }

      // Toggle the liked state
      setLiked(!liked);
    } catch (error) {
      console.error('Error liking/unliking the post:', error);
    }
  };

  return (
    <button onClick={handleLike}>
      <AiOutlineLike /> {liked ? 'Unlike' : 'Like'}
    </button>
  );
};

export default LikeButton;
