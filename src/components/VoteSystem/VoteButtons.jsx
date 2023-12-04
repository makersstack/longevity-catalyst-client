import React, { useEffect, useState } from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { BiDownvote, BiUpvote } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { projectApi } from '../../api';
import useAuth from '../../hooks/UseAuth';

const VoteButtons = ({ projectId, VoteByUser }) => {
    const [voteStUp, setVoteStUp] = useState(false);
    const [voteStDown, setvoteStDown] = useState(false);
    const [upSpninng, SetUpSpninng] = useState(false);
    const [downSpninng, SetDownSpninng] = useState(false);
    const { isLoggedIn } = useAuth();
    const navigate = useNavigate();

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
                console.log(response);

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
                console.log(response);

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
            <button type="button" onClick={handelUpVote} className={voteStUp ? 'voteStActive' : ''}>
                {upSpninng ? <AiOutlineLoading3Quarters className='spinning_icon' /> : <BiUpvote />}
            </button>
            <button onClick={handelDownVote} className={voteStDown ? 'voteStActive' : ''}>
                {downSpninng ? <AiOutlineLoading3Quarters className='spinning_icon' /> : <BiDownvote />}
            </button>
        </div>
    );
};

export default VoteButtons;