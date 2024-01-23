import React, { useState } from 'react';
import { FaRegCommentDots } from 'react-icons/fa';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { RiShareForwardFill } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';
import { avatersFor } from '../../constants/avaters';
import { baseUrl } from '../../globals';
import formatNumber from '../../utils/NumberCountFormate';
import dateTimeHel from '../../utils/dateTimeHel';
import ImageTagWithFallback from '../common/ImageTagWithFallback';

import { MdPublic } from 'react-icons/md';

import LikeButton from '../likeShare/LikeButton';
import SocailModal from '../ui/SocailModal';
import MoreOptionButtons from './MoreOptionButtons';
import VoteButtons from './VoteButtons';

const ProjectCard = ({ project, othersOperationData }) => {
    const navigation = useNavigate();
    // For modal
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <div className="card" key={project.id}>
            {/* card header */}
            <div className="card_header">
                <div className="post_auth_info">
                    <div className="profile_image">
                        <button onClick={() => navigation(`/${project?.User?.username}`)}>
                            <ImageTagWithFallback src={project?.User?.profileImage} fallbackSrc={avatersFor.user} alt={project?.User?.username} />
                        </button>
                    </div>
                    <div className="post_user_fet">
                        <button onClick={() => navigation(`/${project?.User?.username}`)} className="user_name">
                            {project?.User?.full_name}
                        </button>
                        <div className="post-features">
                            <MdPublic /> {project?.status} <span></span> {dateTimeHel.calculateDurationFromNow(project.createdAt)}
                        </div>
                    </div>
                </div>
                <div className="al_pHeader_buttons_area">
                    <VoteButtons projectId={project.id} VoteByUser={project?.VoteByUser} voteCounts={project?.voteCounts} />
                    <MoreOptionButtons projectId={project.id} openModal={openModal} ButtonsOperation={othersOperationData} />
                </div>

            </div>
            {/* card body */}
            <div className="card_body">
                <Link to={`/project/${project.id}`}>
                    <h4 className="card_title">{project.project_name}</h4>
                </Link>
                <p className="card_text">
                    {project.project_desc}
                </p>
                <Link to={`/project/${project.id}`} className='al_project_learn_more'>
                    Learn more <HiArrowNarrowRight />
                </Link>
            </div>
            {/* card footer */}
            <div className="card_footer">
                {/* project resource */}
                <div className="project_resourse">
                    <LikeButton projectId={project.id} isLikedByUser={project?.isLikedByUser} />
                    <div className="project_reso_details">
                        <div className="likded_users">
                            {project?.likedUsers && project?.likedUsers.slice(-3).map((likedUser, index) => (
                                <Link to={`/${likedUser?.username}`} key={index}>
                                    <ImageTagWithFallback src={likedUser?.profileImage} fallbackSrc={avatersFor.user} alt={likedUser?.username} />
                                </Link>
                            ))}

                        </div>
                        {
                            project?.totalLikes && project?.totalLikes !== 0 ? project?.totalLikes <= 3 ? <p>liked this post.</p> : <p> and {formatNumber(project?.totalLikes - 3)} people liked this post.</p> : <p>Nobody has liked this yet.</p>
                        }
                    </div>
                    {/* For Share */}
                    <SocailModal isOpen={isModalOpen} closeModal={closeModal} postLink={`${baseUrl}project/${project.id}`} />
                    <button className="project_effective_button" onClick={openModal}>
                        <RiShareForwardFill /> Share
                    </button>
                </div>
                {/* comment features */}
                <div className="project_comment_features">
                    {/* <button className="project_effective_button">
                        <FaRegCommentDots /> Comment */}
                    <Link to={`/project/${project.id}`} className='project_effective_button'>
                        <FaRegCommentDots /> Comment
                    </Link>
                    {/* </button> */}
                    <div className="post-features">
                        <p>{project?.commentsCount} Comments</p>
                        {/* <p>{project.sharesCount} Shares</p> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;