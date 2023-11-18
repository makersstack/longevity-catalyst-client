import React, { useEffect, useState } from 'react';
import { AiOutlineLike } from 'react-icons/ai';
import { projectApi } from '../../api/ProjectApi';

const LikeButton = ({ projectId, userId }) => {
  const [liked, setLiked] = useState(false);
  
  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        // Fetch project details
        const projectDetails = await projectApi.getProject(projectId);

        console.log('Project details:', projectDetails.data);

        const likedStatus = await projectApi.likeProject(projectId);

        console.log('User liked status:', likedStatus.data);

        setLiked(likedStatus.data);
      } catch (error) {
        console.error('Error fetching project details:', error);
      }
    };

    fetchProjectDetails();
  }, [projectId, userId]);

  const handleLike = async () => {
    try {
      if (liked) {
        await projectApi.unlikeProject(projectId);
      } else {
        await projectApi.likeProject(projectId);
      }
      setLiked(!liked);
    } catch (error) {
      console.error('Error toggling like:', error);
    }
  };

  return (
    <button onClick={handleLike} className={liked ? 'project_effective_button liked' : 'project_effective_button'}>
      <AiOutlineLike />
      {liked ? 'Liked' : 'Like'}
    </button>
  );
};

export default LikeButton;
