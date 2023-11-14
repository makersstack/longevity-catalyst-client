import React, { useEffect, useState } from 'react';
import { instance as axoisInstance } from '../../helpers/axios/axoisInstance';

const Vote = ({ postId }) => {
  const [voteType, setVoteType] = useState(null); 
  const [voteCount, setVoteCount] = useState(0); 

  useEffect(() => {
    getVoteData(postId);
  }, [postId]);

  const getVoteData = async (postId) => {
    try {
      const response = await axoisInstance.get(`/api/vote/${postId}`);
      const { upVoteCount, downVoteCount, userVote } = response.data;

      setVoteCount(upVoteCount - downVoteCount);
      setVoteType(userVote);
    } catch (error) {
      console.error('Error fetching vote data:', error);
    }
  };

  const handleVote = async (newVoteType) => {
    try {
      const response = await axoisInstance.post(`/api/vote/${postId}`, { voteType: newVoteType });
      const { upVoteCount, downVoteCount, userVote } = response.data;

      setVoteCount(upVoteCount - downVoteCount);
      setVoteType(userVote);
    } catch (error) {
      console.error('Error updating vote:', error);
    }
  };

  return (
    <div>
      <button
        onClick={() => handleVote('up')}
        disabled={voteType === 'up'}
      >
        Upvote
      </button>
      <button
        onClick={() => handleVote('down')}
        disabled={voteType === 'down'}
      >
        Downvote
      </button>
      <p>Votes: {voteCount}</p>
    </div>
  );
};

export default Vote;
