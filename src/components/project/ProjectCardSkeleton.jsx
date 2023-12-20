import React from 'react';
import '../../assets/styles/skeleton.css';
const ProjectCardSkeleton = () => {
    return (
        <div className="card al_projectCardSkeleton" >
            {/* card header */}
            <div className="card_header">
                <div className="post_auth_info">
                    <div className="profile_image skeleton">
                    </div>
                    <div className="post_user_fet">
                        <div className="user_name skeleton">

                        </div>
                        <div className="post-features skeleton">

                        </div>
                    </div>
                </div>
                <div className="al_pHeader_buttons_area ">
                    <div className="al_voteBtn skeleton"></div>
                    <div className="al_voteBtn skeleton"></div>
                    <div className="project_more_btn skeleton"></div>
                </div>

            </div>
            {/* card body */}
            <div className="card_body">

                <div className="card_title skeleton"></div>
                <div className="card_text skeleton"></div>

                <div className='al_project_learn_more skeleton'></div>
            </div>
            {/* card footer */}
            <div className="card_footer">
                <div className="project_resourse ">
                    <div className="project_effective_button skeleton" ></div>
                    <div className="project_reso_details">
                        <div className="likded_users ">
                            <div className="skeleton"></div>
                            <div className="skeleton"></div>
                            <div className="skeleton"></div>
                        </div>
                        <div className='al_sk_project_reso skeleton'></div>
                    </div>
                    <div className="project_effective_button skeleton" ></div>
                </div>
                {/* comment features */}
                <div className="project_comment_features">
                    <div className='project_effective_button skeleton'></div>

                        <div className="post-features">
                            <p className='skeleton'></p> 
                            <span className='skeleton'></span>
                            <p className='skeleton'></p>
                        </div>
                    </div>
                </div>
            </div>
            );
};

            export default ProjectCardSkeleton;