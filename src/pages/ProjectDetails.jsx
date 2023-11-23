import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { projectApi } from '../api';
import '../assets/styles/projectDetails.css';
import CommentBox from '../components/comment/CommentBox';

import { PiCheckThin } from 'react-icons/pi';
import { avatersFor } from '../constants/avaters';
import ScrollToTop from '../utils/RouteChange';
import dateTimeHel from '../utils/dateTimeHel';
const ProjectDetails = () => {
  ScrollToTop();
  const [loading, setLoading] = useState(true)
  const [projectData, setProjectData] = useState(null);
  const { projectId } = useParams(); 
  const navigate = useNavigate();


  useEffect(() => {
    const fetchSingleProject = async () => {
      try {
        const response = await projectApi.getSingleProject(projectId);
        if (response && response.data && response.data.success) {
          setProjectData(response.data.data); 
        } else{
          navigate('/404');
        }
      } catch (error) {
        console.error('Error fetching project:', error);
        
      } finally {
        setLoading(false); 
      }
    };

    fetchSingleProject(); 
  }, [navigate, projectId]);

  return (

    <div>
      {
        loading ? (<div className='al_loader_container'><div className="loader"></div></div>) : (
          <section className="full_widht_project_details_area section_padding">
            <div className="container">
              <div className="project_details_wrapper">
                {/* Project left show box  */}
                <div className="project_show_left_box">
                  {/* show details content */}
                  <div className="show_project_details">
                    {/* project head */}
                    <div className="project_details_head">
                      <span className="project_time">{dateTimeHel.formatDateToString(projectData?.createdAt)}</span>
                      <div className="post_auth_info">
                        <div className="profile_image">
                          <Link to={`/${projectData?.User?.username}`}>
                            <img src={projectData?.User?.profileImage || avatersFor.user} alt={projectData?.User?.full_name} />
                          </Link>
                        </div>
                        <div className="post_user_fet">
                          <Link to={`/${projectData?.User?.username}`} title={projectData?.User?.username} className="user_name">
                            {projectData?.User?.full_name}
                          </Link>
                          {/* [todo] */}
                          <div className="user_title">As an {projectData?.User?.role}</div>
                        </div>
                      </div>
                      <h2>{projectData?.project_name}</h2>
                      <p>
                        {projectData?.project_desc}
                      </p>
                      <Link to="#" className="btn btn-light head_btn">Schedule a Meeting</Link>
                    </div>
                    {/* project details show */}
                    <div className="project_details_show">
                      {/* single block */}
                      {/* [todo] */}
                      {/* {projectData?.required_skill_list && (
                        <div className="details_block">
                          <h5 className="block_title">Experience Required :</h5>
                          {
                            JSON.parse(projectData?.required_skill_list).map((skill, index) => (
                              <p key={index}>{skill}</p>
                            ))
                          }

                        </div>
                      )} */}


                      {/* single block */}
                      {projectData?.final_deliverable_details && (
                        <div className="details_block">
                          <h5 className="block_title">Description of Final Deliverable :</h5>
                          <ul>
                            {
                              JSON.parse(projectData?.final_deliverable_details).map((det, index) => (
                                <li key={index}>
                                  {det}
                                </li>
                              ))
                            }
                          </ul>
                        </div>
                      )}

                      {/* single block */}
                      {projectData?.relevant_link && (
                        <div className="details_block">
                          <h5 className="block_title">Links to Relevant date :</h5>
                          <ul>
                            <li>
                              <Link target='_blank' to={projectData?.relevant_link}>{projectData?.relevant_link}</Link>
                            </li>
                          </ul>
                        </div>
                      )}

                      {/* single block */}
                      {projectData?.relevant_literature_link && (
                        <div className="details_block">
                          <h5 className="block_title">Links to Relevant Literature :</h5>
                          <ul>
                            {
                              JSON.parse(projectData?.relevant_literature_link).map((link, index) => (
                                <li key={index}>
                                  <Link target='_blank' to={link}>{link}</Link>
                                </li>
                              ))
                            }
                          </ul>
                        </div>
                      )}

                      {/* single block */}
                      {projectData?.other_included && (
                        <div className="details_block">
                          <h5 className="block_title">Additional Information :</h5>
                          <p>
                            {projectData?.other_included}
                          </p>
                        </div>
                      )}

                      {/* single block add comment button  */}

                    </div>
                  </div>
                  {/* project details outer box  */}
                  <div className="project_outer_box">
                    {/* pin box  */}


                    {/* comment box  */}
                    <div className="details_block">
                      <CommentBox />
                    </div>
                  </div>
                </div>
                {/* Sidebar */}
                <div className="project_side_ber_container">
                  <div className="project_side_bar side_ber_style_2">
                    <form action="/" method="post">
                      <div className="input_box">
                        <h4> Affiliation : </h4>

                        <div className="input_box_keywords">
                          <p className='show_ct'>{projectData?.affiliation}</p>
                        </div>
                      </div>

                      <div className="input_box">
                        <h4> Keywords : </h4>
                        <div className="input_box_keywords">
                          {
                            JSON.parse(projectData?.project_keywords).map((key, index) => (
                              <p className='show_ct' key={index}>{key}</p>
                            ))
                          }
                        </div>
                      </div>

                      <div className="input_box">
                        <h4> Onsite Requirement : </h4>

                        <div className="input_box_keywords">
                          <p className='show_ct'>{projectData?.onsite_work ? 'Yes' : 'No'}</p>
                        </div>
                      </div>

                      <div className="input_box">
                        <h4>Project Type : </h4>
                        <div className="input_box_keywords">
                          <p className='show_ct'>{projectData?.projecType}</p>
                        </div>
                      </div>

                      <div className="input_box">
                        <h4>Member Needed : </h4>
                        {/* [todo] */}
                        <div className="input_box_keywords">

                          <p className='show_ct'>3-4</p>
                        </div>
                      </div>


                      <div className="input_box">
                        <h4>Primary Category : </h4>
                        <div className="input_box_keywords">
                          <p className='show_ct'>{projectData?.Category.category_name ? projectData?.Category.category_name : 'N/A'}</p>
                        </div>
                      </div>
                      {projectData?.required_skill_list && (
                        <div className="input_box required_skills">
                          <h4> Required Skills </h4>
                          <div className="required_skills_tags">
                            {
                              JSON.parse(projectData?.required_skill_list).map((skill, index) => (
                                <div className="required_skill_single" key={index}>
                                  <PiCheckThin />
                                  <p>{skill}</p>
                                </div>
                              ))
                            }
                          </div>
                        </div>
                      )}
                      <div className="input_box">
                        <h4>Deadline : </h4>

                        <div className="input_box_keywords">
                          <p className='show_ct'> {projectData?.p_deadline ? dateTimeHel.formatDateToString(projectData?.p_deadline) : 'Flexible'} </p>
                        </div>
                      </div>
                      <div className="input_box">
                        <h4>Expected Duration : </h4>
                        <div className="input_box_keywords">
                          <p className='show_ct'>{projectData?.expectedTimeProject ? projectData?.expectedTimeProject : 'Flexible'}</p>
                        </div>
                      </div>
                      <div className="input_box">
                        <h4>Time to Start : </h4>
                        <div className="input_box_keywords">
                          <p className='show_ct'>{projectData?.readyToStart ? projectData?.readyToStart : 'N/A'}</p>
                        </div>
                      </div>
                      <div className="input_box">
                        <h4>Project Submitted :</h4>
                        <div className="input_box_keywords">
                          <p className='show_ct'>{dateTimeHel.formatDateToString(projectData?.createdAt)}</p>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
      }

    </div>
  );
};

export default ProjectDetails;