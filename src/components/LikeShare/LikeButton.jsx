import React, { useEffect, useState } from 'react';
import { AiOutlineLike, AiOutlineLoading3Quarters } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { projectApi } from '../../api';
import useAuth from '../../hooks/useAuth';


const LikeButton = ({ projectId, isLikedByUser }) => {
  const [liked, setLiked] = useState(false);
  const [spninng, SetSpninng] = useState(false);
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    setLiked(isLikedByUser);
  }, [isLikedByUser]);


  const handleLike = async () => {
    SetSpninng(true);
    if (!isLoggedIn) {
      navigate('/login?emsg=Please login to like projects');
    } else {
      try {
        const operationData = {
          projectId: projectId,
          status: !liked
        }
        await projectApi.likeOperation(operationData);
        setLiked(!liked);
        SetSpninng(false);
      } catch (error) {
        console.error('Error toggling like:', error);
      }
    }

  };

  return (
    <button onClick={handleLike} className={liked ? 'project_effective_button liked' : 'project_effective_button'}>

      {spninng ? <AiOutlineLoading3Quarters className='spinning_icon' /> : <AiOutlineLike />}

      {liked ? 'Liked' : 'Like'}
    </button>
  );
};

export default LikeButton;
