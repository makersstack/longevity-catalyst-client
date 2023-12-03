import React, { useEffect, useState } from 'react';
import { AiOutlineLike, AiOutlineLoading3Quarters } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { projectApi } from '../../api';
import useAuth from '../../hooks/UseAuth';


const LikeButton = ({ projectId,isLikedByUser }) => {
  const [liked, setLiked] = useState(false);
  const [lLodgin, SetlLodgin] = useState(false);
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    setLiked(isLikedByUser);
  }, [isLikedByUser]);

  // useEffect(() => {
  //   const setDefaultLiked = async () => {
  //     if(isLoggedIn){
  //       try {
  //         const res = await projectApi.getLikeStateByUser(projectId);
  //         console.log(res);
  //       } catch (error) {
  //         console.error('Error fetching like status:', error);
  //       }
  //     }
  //   };

  //   setDefaultLiked();
  // }, [projectId,isLoggedIn]);

  const handleLike = async () => {
    SetlLodgin(true);
    if (!isLoggedIn) {
      navigate('/login?emsg=Please login to like projects');
    } else {
      try {
        const operationData = {
          projectId: projectId,
          status: !liked
        }
        const response = await projectApi.likeOperation(operationData);
        setLiked(!liked);
        SetlLodgin(false);
      } catch (error) {
        console.error('Error toggling like:', error);
      }
    }

  };

  return (
    <button onClick={handleLike} className={liked ? 'project_effective_button liked' : 'project_effective_button'}>
      
      {lLodgin ? <AiOutlineLoading3Quarters  className='spinning_icon'/> : <AiOutlineLike />}
     
      {liked ? 'Liked' : 'Like'}
    </button>
  );
};

export default LikeButton;
