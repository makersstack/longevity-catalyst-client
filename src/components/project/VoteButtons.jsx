import React, { useEffect, useState } from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { BiDownvote, BiUpvote } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { projectApi } from '../../api';
import useAuth from '../../hooks/useAuth';
import formatNumber from '../../utils/NumberCountFormate';

const VoteButtons = ({ projectId, VoteByUser,voteCounts }) => {
    const [voteStUp, setVoteStUp] = useState(false);
    const [voteStDown, setvoteStDown] = useState(false);
    const [upSpninng, SetUpSpninng] = useState(false);
    const [downSpninng, SetDownSpninng] = useState(false);
    const { isLoggedIn } = useAuth();
    const navigate = useNavigate();

    const [upCount, setUpCount] = useState(voteCounts?.up || 0);
    const [downCount, setdownCount] = useState(voteCounts?.down || 0);

   

    useEffect(() => {
        if (VoteByUser === "up") {
            setVoteStUp(true);
            setvoteStDown(false);
        }
        if (VoteByUser === "down") {
            setvoteStDown(true);
            setVoteStUp(false);
        }
    }, [VoteByUser]);

    const handelUpVote = async () => {
        SetUpSpninng(true);
        if (!isLoggedIn) {
            navigate('/login?emsg=Please login to Up vote projects');
        } else {
            try {
                const operationData = {
                    projectId: projectId,
                    voteType: "up",
                    status: !voteStUp
                }
                const response = await projectApi.VoteOperation(operationData);
          
                if(response.data.success){
                    setUpCount(response.data.data.up);
                    setdownCount(response.data.data.down);
                }

                setVoteStUp(!voteStUp);
                setvoteStDown(false);
                SetUpSpninng(false);
            } catch (error) {
                console.error('Error toggling vote:', error);
            }
        }
    }
    const handelDownVote = async () => {
        SetDownSpninng(true);
        if (!isLoggedIn) {
            navigate('/login?emsg=Please login to down vote projects');
        } else {
            try {

                const operationData = {
                    projectId: projectId,
                    voteType: "down",
                    status: !voteStDown
                }
                const response = await projectApi.VoteOperation(operationData);
                if(response.data.success){
                    setUpCount(response.data.data.up);
                    setdownCount(response.data.data.down);
                }

                setvoteStDown(!voteStDown);
                setVoteStUp(false);
                SetDownSpninng(false);
            } catch (error) {
                console.error('Error toggling vote:', error);
            }
        }
    }
    return (
        <div className="post_arrow">
            <button type="button" onClick={handelUpVote} className={`project_effective_button al_voteBtn btnVoteUp ${voteStUp ? 'voteStActive' : ''}`}>
                {upSpninng ? <AiOutlineLoading3Quarters className='spinning_icon' /> : <BiUpvote />}
                <span className='al_voteCount'>{formatNumber(upCount)}</span>
            </button>
            <button type="button" onClick={handelDownVote} className={`project_effective_button al_voteBtn btnVoteDown ${voteStDown ? 'voteStActive' : ''}`}>
                {downSpninng ? <AiOutlineLoading3Quarters className='spinning_icon' /> : <BiDownvote />}
                <span className='al_voteCount'>{formatNumber(downCount)}</span>
            </button>
        </div>
    );
};

export default VoteButtons;