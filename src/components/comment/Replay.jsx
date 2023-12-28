import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { avatersFor } from '../../constants/avaters';
import useAuth from '../../hooks/UseAuth';
import dateTimeHel from '../../utils/dateTimeHel';
import ImageTagWithFallback from '../common/ImageTagWithFallback';
import EditDeleteReplay from './EditDeleteReplay';
import EditReplayFrom from './EditReplayFrom';

const Replay = ({ data, replayOperationData }) => {
    const { userInfo } = useAuth();
    const isReplayAuthor = (userInfo && userInfo.id === data?.User?.id) || false;

    const [isEditReplay, setIsEditReplay] = useState(false);
    const editDeleteOperationData = {
        handleDeleteReplay: replayOperationData.handleDeleteReplay,
        setIsEditReplay
    }
  const editOperationData = {
    handelEidtReplay: replayOperationData.handelEidtReplay,
    replayId: data?.id,
    defaultValue: data?.replyText,
    setIsEditReplay
  }
   

    return (
        <div className="comment_card replay_card">
            {/* card head  */}
            <div className="comment_card_head">
                <div className="commenter_info">
                    <Link to={`/${data?.User?.username}`}>
                    <ImageTagWithFallback src={data?.User?.profileImage} fallbackSrc={avatersFor.user} alt={data?.User?.username} golClass="user_thum_style" />
                    </Link>
                    <div className="post_user_fet">
                        <Link to={`/${data?.User?.username}`} className="user_name">{data?.User.username}</Link>
                    </div>
                    <span className="comment_time">
                        {dateTimeHel.calculateDurationFromNow(data?.createdAt)}
                    </span>
                </div>
                {/* <span className="comment_date">dfdf</span> */}
            </div>
            {/* card body  */}
            <div className="comment_card_body">

                {
                    isEditReplay ? (
                        <EditReplayFrom  editReplayOperationData={editOperationData}/>
                    ) : (
                        data?.replyText
                    )
                }


            </div>
            {/* card footer  */}
            <div className="comment_card_footer ">
                <div className="devide_buttons_wraper">
                    <div className="comment_box_buttons">

                        {/* <div className="post_arrow">
                            <button type="button">
                                <BiUpvote />
                            </button>
                            <span className="comment_vote_count">2.5K</span>
                            <button>
                                <BiDownvote />
                            </button>
                        </div> */}
                        {/* <button className="project_effective_button">
                            <RiShareForwardFill /> Share
                        </button> */}
                        {
                            isReplayAuthor && (
                                <EditDeleteReplay replayId={data.id} othersOperationData={editDeleteOperationData} />
                            )
                        }

                    </div>
                    {/* <div className="comment_box_buttons">
                        <button className="project_effective_button">
                            <LiaHeart />
                        </button>
                        <button className="project_effective_button">
                            <PiLinkSimpleHorizontalLight />
                        </button>
                    </div> */}
                </div>

            </div>

        </div>
    );
};

export default Replay;