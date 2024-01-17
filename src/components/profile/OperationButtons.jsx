import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { FaBell, FaBellSlash, FaWifi } from 'react-icons/fa';
import { HiDotsVertical } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import profileApi from '../../api/profileApi';
import useAuth from '../../hooks/useAuth';

const OperationButtons = ({ defaultDataObject }) => {
    const { username, isNotify, isFollow } = defaultDataObject;

    const [notify, setNotify] = useState(false);
    const [follow, setFollow] = useState(false);
    const [spninng, SetSpninng] = useState(false);
    const { isLoggedIn } = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        setFollow(isFollow);
        setNotify(isNotify);
    }, [isNotify, isFollow]);

    const handelNotifyButton = async () => {
        if (!isLoggedIn) {
            navigate('/login?emsg=Please login to set Notification');
        } else {
            SetSpninng(false);
            try {
                const operationData = {
                    username: username,
                    status: !notify
                }
               const response = await profileApi.NotificationOperation(operationData);
               if(response.error){
                   toast.error(response?.error?.data?.message);
               }else{
                setNotify(!notify);
               }
                SetSpninng(false);
            } catch (error) {
                console.error('Error toggling Notify:', error);
            }
        }
    }
    const handelFollowButton = async () => {
        if (!isLoggedIn) {
            navigate('/login?emsg=Please login to follow');
        } else {
            SetSpninng(false);
            try {
                const operationData = {
                    username: username,
                    status: !follow
                }
                const response = await profileApi.FollowOperation(operationData);

                if(response.error){
                    toast.error(response?.error?.data?.message);
                }else{
                    setFollow(!follow);
                }
                SetSpninng(false);
            } catch (error) {
                console.error('Error toggling Notify:', error);
            }
        }
    }
    return (
        <div className="profile_buttons">
            <button onClick={handelNotifyButton} type='button' className="btn btn-dark no-shadow">
                {spninng ? <AiOutlineLoading3Quarters className='spinning_icon' /> :
                    notify ? <FaBellSlash /> : <FaBell />
                }
                {notify ? 'Notifyed' : 'Notify'}
            </button>
            <button type='button' onClick={handelFollowButton} className="btn btn-gray">
                
                {spninng ? <AiOutlineLoading3Quarters className='spinning_icon' /> :
                    follow ? <FaBellSlash /> : <FaWifi />
                }
                {follow ? 'Unfollow' : 'Follow'}


            </button>
            <button type='button' className="btn_more_bar">
                <HiDotsVertical />
            </button>

        </div>
    );
};

export default OperationButtons;