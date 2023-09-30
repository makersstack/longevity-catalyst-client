import React from 'react';
import { Link } from 'react-router-dom';

const ProjectFeed = () => {
  return (
    <>
      <div className="project_show_wrapper">
        {/* project side bar filter */}
        <div className="project_side_ber_container">
          <div className="project_side_bar">
            <form action="#" method="post">
              {/* Project Name  */}
              <div className="input_box">
                <label for="se-p">Search Project</label>
                <input id="se-p" type="text" placeholder="Project Name" />
              </div>
              {/* Categories */}
              <div className="input_box">
                <label for="p-categories">Categories</label>
                <select name="p-categories" id="p-categories">
                  <option value="">Select Categories</option>
                  <option value="">project 1</option>
                  <option value="">project 2</option>
                  <option value="">project 3</option>
                </select>
              </div>
              {/* Topic */}
              <div className="input_box">
                <label> Topic </label>

                <label className="plan basic-plan" for="opt1">
                  <input checked="" type="radio" name="plan" id="opt1" />
                  <div className="plan-content">
                    <div className="plan-details">
                      <p>1-25</p>
                    </div>
                  </div>
                </label>

                <label className="plan basic-plan" for="opt2">
                  <input type="radio" name="plan" id="opt2" />
                  <div className="plan-content">
                    <div className="plan-details">
                      <p>1-25</p>
                    </div>
                  </div>
                </label>

                <label className="plan basic-plan" for="opt3">
                  <input type="radio" name="plan" id="opt3" />
                  <div className="plan-content">
                    <div className="plan-details">
                      <p>51-100</p>
                    </div>
                  </div>
                </label>
                <label className="plan basic-plan" for="opt4">
                  <input type="radio" name="plan" id="opt4" />
                  <div className="plan-content">
                    <div className="plan-details">
                      <p>College Students</p>
                    </div>
                  </div>
                </label>
              </div>
              {/* Duration  */}
              <div className="input_box">
                <label for="p-categories">Duration</label>
                <select name="p-dura" id="p-dura">
                  <option value="">Select Role</option>
                  <option value="">option 1</option>
                  <option value="">option 2</option>
                  <option value="">option 3</option>
                </select>
              </div>
              {/* Required Skills */}
              <div className="input_box required_skills">
                <label> Required Skills </label>

                <label className="plan basic-plan" for="sk-opt1">
                  <input type="checkbox" name="skill" id="sk-opt1" />
                  <div className="plan-content">
                    <div className="plan-details">
                      <div className="plan-checked-icon">
                        <i className="check_icon fas fa-check"></i>
                      </div>
                      <p>Python</p>
                    </div>
                  </div>
                </label>

                <label className="plan basic-plan" for="sk-opt2">
                  <input type="checkbox" checked name="skill" id="sk-opt2" />
                  <div className="plan-content">
                    <div className="plan-details">
                      <div className="plan-checked-icon">
                        <i className="check_icon fas fa-check"></i>
                      </div>
                      <p>Machine learning</p>
                    </div>
                  </div>
                </label>

                <label className="plan basic-plan" for="sk-opt3">
                  <input type="checkbox" name="skill" id="sk-opt3" />
                  <div className="plan-content">
                    <div className="plan-details">
                      <div className="plan-checked-icon">
                        <i className="check_icon fas fa-check"></i>
                      </div>
                      <p>Molecular modeling</p>
                    </div>
                  </div>
                </label>
                <label className="plan basic-plan" for="sk-opt4">
                  <input type="checkbox" name="skill" id="sk-opt4" />
                  <div className="plan-content">
                    <div className="plan-details">
                      <div className="plan-checked-icon">
                        <i className="check_icon fas fa-check"></i>
                      </div>
                      <p>Cheminformatics</p>
                    </div>
                  </div>
                </label>
                <label className="plan basic-plan" for="sk-opt5">
                  <input type="checkbox" name="skill" id="sk-opt5" />
                  <div className="plan-content">
                    <div className="plan-details">
                      <div className="plan-checked-icon">
                        <i className="check_icon fas fa-check"></i>
                      </div>
                      <p>Pharmacology</p>
                    </div>
                  </div>
                </label>
              </div>
              {/* Funding Status */}
              <div className="input_box">
                <label> Funding Status </label>

                <label className="plan basic-plan" for="st-opt1">
                  <input checked="" type="radio" name="status" id="st-opt1" />
                  <div className="plan-content">
                    <div className="plan-details">
                      <p>30 days</p>
                    </div>
                  </div>
                </label>

                <label className="plan basic-plan" for="st-opt2">
                  <input type="radio" name="status" id="st-opt2" />
                  <div className="plan-content">
                    <div className="plan-details">
                      <p>60 days</p>
                    </div>
                  </div>
                </label>

                <label className="plan basic-plan" for="st-opt3">
                  <input type="radio" name="status" id="st-opt3" />
                  <div className="plan-content">
                    <div className="plan-details">
                      <p>90 days</p>
                    </div>
                  </div>
                </label>
                <label className="plan basic-plan" for="st-opt4">
                  <input type="radio" name="status" id="st-opt4" />
                  <div className="plan-content">
                    <div className="plan-details">
                      <p>No Contract</p>
                    </div>
                  </div>
                </label>
              </div>
              {/* Language */}
              <div className="input_box">
                <label for="Language">Language</label>
                <select name="Language" id="Language">
                  <option value="">Language</option>
                  <option value="">Language 1</option>
                  <option value="">Language 2</option>
                  <option value="">Language 3</option>
                </select>
              </div>

            </form>
          </div>
        </div>
        {/* project show container */}
        <div className="project_show_container">
          {/* project short filter */}
          <div className="project_short_filter">
            <button className="short_filter_button active">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M22.8371 10.3731C22.5657 10.1673 22.2944 9.95205 22.0324 9.73685C21.8078 9.55907 21.7423 9.34387 21.7985 9.03509C21.9014 8.47369 22.2195 7.9965 22.3973 7.46316C22.7903 6.24679 22.3692 5.49825 21.0967 5.25498C20.6569 5.17077 20.2078 5.12398 19.7587 5.06784C19.2534 5.00235 18.9821 4.72164 18.9259 4.21638C18.8792 3.76726 18.823 3.31813 18.7388 2.87837C18.4955 1.60585 17.6909 1.15673 16.4745 1.61521C16.0254 1.78363 15.5762 1.97077 15.1271 2.14854C14.6967 2.31697 14.3879 2.1579 14.1259 1.80235C13.7891 1.35322 13.4616 0.894743 13.0686 0.501761C12.4043 -0.171924 11.5996 -0.162567 10.9166 0.501761C10.6546 0.763749 10.4394 1.07252 10.2055 1.36258C9.38209 2.41053 9.32595 2.41989 8.11893 1.85849C7.66981 1.65264 7.21133 1.45615 6.74349 1.41872C6.05109 1.41872 5.5739 1.80235 5.33998 2.5041C5.15285 3.05615 5.1622 3.64562 5.06863 4.20702C4.98442 4.70293 4.74115 4.99299 4.22653 5.04913C3.80548 5.09591 3.39378 5.15205 2.98209 5.22691C1.55986 5.47954 1.13881 6.2655 1.65343 7.62223C1.83121 8.09007 2.0932 8.51112 2.18676 9.01638C2.2429 9.3158 2.18676 9.531 1.95285 9.71814C1.56922 10.0176 1.19495 10.317 0.811325 10.6164C-0.274055 11.4772 -0.264698 12.5158 0.820682 13.3766C1.18559 13.6667 1.55986 13.9567 1.92478 14.2374C2.16805 14.4246 2.2429 14.6491 2.17741 14.9766C2.06513 15.5099 1.78442 15.9591 1.60665 16.455C1.15752 17.6994 1.59729 18.4947 2.90723 18.738C3.30021 18.8129 3.71191 18.8222 4.10489 18.8971C4.85343 19.0374 4.93764 19.131 5.07799 19.8795C5.18092 20.4409 5.1622 21.0304 5.37741 21.5825C5.67682 22.3591 6.27565 22.6772 7.08033 22.4901C7.46396 22.4059 7.82887 22.2655 8.17507 22.0971C8.4277 21.9754 8.68969 21.8912 8.96103 21.8164C9.31659 21.7135 9.55986 21.8257 9.77507 22.0971C10.0464 22.4526 10.3271 22.8176 10.6078 23.1637C11.4686 24.2585 12.4979 24.2585 13.368 23.1637C13.6394 22.8176 13.9107 22.4807 14.1727 22.1252C14.4066 21.8164 14.6686 21.7041 15.0616 21.807C15.595 21.9474 16.0628 22.2374 16.5868 22.3965C17.7376 22.7614 18.4768 22.3497 18.7201 21.1708C18.8137 20.731 18.8324 20.2725 18.9166 19.8328C19.0476 19.131 19.1411 19.0468 19.8242 18.9064C20.3856 18.7942 20.9751 18.8222 21.5271 18.6164C22.3505 18.317 22.6873 17.7088 22.4815 16.8573C22.3879 16.4737 22.2476 16.1181 22.0792 15.7626C21.9575 15.5099 21.8827 15.2386 21.8078 14.9673C21.7236 14.6491 21.8172 14.4246 22.0604 14.2281C22.3131 14.0222 22.5751 13.8164 22.8277 13.6199C24.3809 12.469 24.3903 11.5521 22.8371 10.3731Z"
                />
              </svg>
              Latest
            </button>
            <button className="short_filter_button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="16"
                viewBox="0 0 26 16"
              >
                <path
                  d="M13.0137 0.31427C15.4324 0.351624 17.6083 1.22011 19.6067 2.55552C21.5678 3.85357 23.2394 5.47847 24.7055 7.30882C25.0791 7.77575 25.1164 8.16797 24.7803 8.57886C22.7164 11.1656 20.3258 13.3602 17.2721 14.7236C13.8542 16.2551 10.5483 15.8629 7.35457 14.0232C4.97324 12.6505 3.01215 10.8108 1.30321 8.68159C0.929664 8.21466 0.89231 7.82244 1.2285 7.41155C3.32966 4.77808 5.77636 2.55552 8.9141 1.20143C10.2122 0.641118 11.5756 0.342286 13.0137 0.31427ZM12.7055 2.02322C12.0985 1.98587 11.2114 2.17264 10.3616 2.46213C7.39192 3.48003 5.132 5.46913 3.10554 7.77575C2.93745 7.96252 3.00282 8.09326 3.14289 8.25201C4.74912 10.101 6.55146 11.7073 8.73667 12.8466C11.0433 14.0419 13.4246 14.3594 15.8993 13.4442C18.7476 12.3983 20.9328 10.4652 22.8939 8.23334C23.0993 7.99054 22.9779 7.8598 22.8285 7.68236C21.6145 6.27225 20.2604 5.01155 18.7102 3.98431C16.9826 2.84501 15.1336 2.03256 12.7055 2.02322Z"
                />
                <path
                  d="M13.0045 12.7812C10.3804 12.7812 8.21387 10.6147 8.21387 7.99989C8.21387 5.37577 10.3804 3.20923 12.9952 3.20923C15.6193 3.20923 17.7859 5.37577 17.7859 7.99055C17.7952 10.6147 15.6287 12.7812 13.0045 12.7812ZM12.9952 4.92752C11.2582 4.92752 9.93216 6.27226 9.93216 8.00923C9.93216 9.74619 11.2769 11.0723 13.0139 11.0723C14.7508 11.0723 16.0769 9.72752 16.0676 7.99055C16.0769 6.25359 14.7322 4.91818 12.9952 4.92752Z"
                />
              </svg>
              Most View
            </button>
            <button className="short_filter_button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="26"
                viewBox="0 0 25 26"
              >
                <path
                  d="M12.9879 0.925059C13.6379 0.862559 14.1629 1.16256 14.6129 1.57506C15.3879 2.28756 16.2754 2.48756 17.3004 2.43756C18.7254 2.37506 19.4004 2.85006 19.7754 4.21256C20.0629 5.26256 20.6004 6.00006 21.5129 6.60006C22.6754 7.36256 22.9379 8.18756 22.4379 9.51256C22.0629 10.5126 22.0504 11.4126 22.4379 12.4126C22.9379 13.7126 22.6879 14.4001 21.5629 15.2876C21.2254 15.5501 21.2254 15.7376 21.5254 16.0251C22.5254 17.0001 23.5004 17.9876 24.4879 18.9876C25.2629 19.7751 25.1629 20.2376 24.1629 20.6376C23.4879 20.9126 22.8129 21.1751 22.1254 21.4251C21.7379 21.5626 21.5129 21.8001 21.3629 22.1876C21.0879 22.9251 20.8004 23.6626 20.5004 24.4001C20.1754 25.1751 19.6754 25.2876 19.0754 24.6751C17.7754 23.3876 16.4754 22.1001 15.1879 20.7876C14.8629 20.4501 14.6129 20.3501 14.1754 20.6501C13.4004 21.1876 12.5504 21.1751 11.7754 20.6376C11.3629 20.3501 11.1254 20.4626 10.8129 20.7751C9.55045 22.0376 8.26295 23.3126 6.98795 24.5876C6.30045 25.2751 5.81295 25.1751 5.45045 24.2876C5.25045 23.8001 5.02545 23.3251 4.90045 22.8251C4.66295 21.8876 4.08795 21.3376 3.15045 21.1001C2.67545 20.9876 2.21295 20.7626 1.75045 20.5751C0.862947 20.2126 0.762947 19.7251 1.43795 19.0251C2.38795 18.0626 3.35045 17.1126 4.30045 16.1501C4.83795 15.6126 4.83795 15.6126 4.23795 15.1376C3.41295 14.4876 3.07545 13.6501 3.46295 12.6501C3.92545 11.4751 3.92545 10.3876 3.46295 9.21256C3.06295 8.17506 3.38795 7.25006 4.33795 6.66256C5.36295 6.03756 5.95045 5.20006 6.25045 4.03756C6.56295 2.85006 7.28795 2.32506 8.51295 2.41256C9.68795 2.48756 10.6754 2.21256 11.5379 1.42506C11.9379 1.08756 12.4129 0.875059 12.9879 0.925059ZM21.2504 8.60006C21.2504 8.08756 20.9629 7.86256 20.6629 7.68756C19.5254 7.02506 18.7879 6.10006 18.4879 4.78756C18.2754 3.86256 18.0379 3.70006 17.0629 3.77506C15.8004 3.88756 14.7504 3.51256 13.8004 2.70006C13.0879 2.10006 12.9129 2.10006 12.2254 2.68756C11.2504 3.52506 10.1879 3.88756 8.90045 3.78756C7.93795 3.71256 7.72545 3.87506 7.48795 4.82506C7.18795 6.05006 6.53795 6.95006 5.46295 7.61256C4.61295 8.13756 4.55045 8.30006 4.92545 9.20006C5.42545 10.4126 5.45045 11.5751 4.90045 12.7501C4.60045 13.3751 4.73795 13.8751 5.36295 14.2251C6.53795 14.8876 7.26295 15.8626 7.52545 17.1876C7.65045 17.8376 8.03795 18.1501 8.72545 18.0751C10.0379 17.9251 11.1629 18.2876 12.1754 19.1626C12.8879 19.7751 13.1254 19.7751 13.8629 19.1501C14.8504 18.3251 15.9254 17.9751 17.2004 18.0626C18.1504 18.1376 18.2754 18.0376 18.5129 17.1001C18.8129 15.8751 19.4504 14.9751 20.5254 14.3001C21.4254 13.7376 21.4504 13.6126 21.0504 12.6001C20.6129 11.5001 20.5504 10.4251 21.0504 9.33756C21.1504 9.07506 21.2004 8.78756 21.2504 8.60006ZM16.1004 19.5001C16.0754 19.5501 16.0629 19.6001 16.0379 19.6501C17.1129 20.7126 18.1629 21.7876 19.2504 22.8501C19.5754 23.1626 19.6504 22.7626 19.6879 22.5876C20.0254 21.0251 20.9504 20.0876 22.5254 19.7626C23.0004 19.6626 22.9504 19.4251 22.6379 19.1376C22.0504 18.5751 21.4879 17.9876 20.9129 17.4126C20.1379 16.6376 20.1379 16.6376 19.7879 17.6626C19.3254 19.0376 18.6879 19.5001 17.2629 19.5001C16.8754 19.5001 16.4879 19.5001 16.1004 19.5001ZM10.0379 19.5501C9.76295 19.5251 9.66295 19.4876 9.56295 19.5001C7.65045 19.7251 6.33795 19.0751 5.98795 17.0376C5.92545 16.7126 5.77545 16.6876 5.53795 16.9376C4.80045 17.7001 4.05045 18.4501 3.28795 19.1876C2.97545 19.4876 3.08795 19.6251 3.42545 19.7501C3.88795 19.9251 4.35045 20.1376 4.82545 20.2876C5.30045 20.4376 5.58795 20.7376 5.75045 21.2126C5.91295 21.7001 6.13795 22.1751 6.32545 22.6626C6.43795 22.9501 6.56295 23.0376 6.81295 22.7876C7.82545 21.7376 8.87545 20.7001 10.0379 19.5501Z"
                />
                <path
                  d="M15.8002 15.6126C15.4752 15.5751 15.1252 15.4001 14.8377 15.1751C13.5877 14.2001 12.3752 14.2126 11.1377 15.1876C10.9502 15.3376 10.7002 15.4376 10.4752 15.5251C9.82516 15.7876 9.33766 15.4126 9.43766 14.7126C9.53766 13.9751 9.66266 13.225 9.82516 12.5001C9.91266 12.1126 9.80016 11.8626 9.53766 11.6126C9.01266 11.1126 8.48766 10.6001 7.97516 10.0751C7.40016 9.47505 7.57516 8.88755 8.40016 8.73755C9.11266 8.60005 9.83766 8.50005 10.5627 8.42505C10.9377 8.38755 11.1627 8.22505 11.3252 7.88755C11.6377 7.22505 11.9752 6.58755 12.2877 5.92505C12.4377 5.63755 12.6127 5.37505 12.9752 5.36255C13.3752 5.35005 13.5627 5.61255 13.7127 5.92505C14.0127 6.53755 14.3377 7.15005 14.6252 7.77505C14.8002 8.17505 15.0502 8.38755 15.5127 8.42505C16.2127 8.47505 16.9127 8.58755 17.6127 8.73755C18.4252 8.90005 18.5877 9.48755 18.0127 10.0876C17.4877 10.6251 16.9502 11.1501 16.4127 11.6626C16.1752 11.8876 16.1002 12.1126 16.1752 12.4376C16.3377 13.1625 16.4502 13.9126 16.5627 14.6501C16.6377 15.2501 16.3502 15.6376 15.8002 15.6126ZM12.9877 7.65005C12.7752 8.06255 12.6002 8.33755 12.4877 8.65005C12.2252 9.37505 11.7627 9.77505 10.9627 9.77505C10.6752 9.77505 10.2002 9.72505 10.1127 10.0001C10.0002 10.325 10.4377 10.5376 10.6752 10.7376C11.2502 11.2126 11.4877 11.7625 11.2377 12.5001C11.1877 12.6375 11.1877 12.7876 11.1752 12.9251C11.1502 13.1251 11.0002 13.3626 11.1877 13.5001C11.3502 13.6126 11.5377 13.4125 11.6877 13.3126C12.5627 12.6625 13.4377 12.6501 14.3252 13.3001C14.4627 13.4001 14.6502 13.6001 14.8252 13.5001C15.0377 13.3751 14.8877 13.1251 14.8502 12.9251C14.6627 12.0876 14.5252 11.2875 15.3877 10.6876C15.6252 10.5251 16.0252 10.3001 15.9127 10.0001C15.8127 9.71255 15.3502 9.77505 15.0627 9.77505C14.2627 9.76255 13.7877 9.38755 13.5252 8.65005C13.3877 8.36255 13.2002 8.07505 12.9877 7.65005Z"
                />
              </svg>
              Top
            </button>
            <button className="short_filter_button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="18"
                viewBox="0 0 25 18"
              >
                <path
                  d="M19.5851 3.96225C18.6234 3.96225 17.7551 3.96225 16.8775 3.96225C16.0745 3.96225 15.7944 3.67281 15.7851 2.86052C15.7851 2.46838 15.7757 2.08557 15.7944 1.69343C15.8131 1.15191 16.1119 0.843795 16.644 0.843795C19.1463 0.834458 21.6578 0.834458 24.1601 0.843795C24.7016 0.843795 24.991 1.16124 24.991 1.70277C25.0004 4.205 25.0004 6.71657 24.991 9.2188C24.991 9.74166 24.7016 10.0218 24.1788 10.0404C23.7306 10.0591 23.2731 10.0498 22.8249 10.0404C22.19 10.0311 21.8913 9.74166 21.8726 9.09743C21.8539 8.35049 21.8633 7.60356 21.8633 6.85662C21.8633 6.68856 21.8633 6.5205 21.8633 6.32443C21.6298 6.3431 21.5458 6.51116 21.4338 6.6232C19.1556 8.90136 16.8495 11.1515 14.6086 13.467C13.759 14.3446 12.6853 14.41 11.8357 13.4483C11.1821 12.7014 10.4165 12.0478 9.74423 11.3196C9.44546 10.9928 9.2774 11.0675 9.00663 11.3382C7.27001 13.0935 5.51471 14.8395 3.75942 16.5948C3.02182 17.3324 2.71371 17.3324 1.97611 16.5948C1.74269 16.3614 1.50927 16.1373 1.28519 15.8945C0.911725 15.4837 0.893052 15.0449 1.28519 14.6528C3.6287 12.2999 5.95354 9.96574 8.29705 7.6409C8.93194 7.00601 9.81893 7.02468 10.4725 7.65958C11.3035 8.46253 12.1064 9.28416 12.9187 10.0965C13.1148 10.2925 13.2548 10.3766 13.4882 10.1338C15.4583 8.14509 17.447 6.16571 19.4264 4.18633C19.4637 4.14898 19.4917 4.09296 19.5851 3.96225Z"
                />
              </svg>
              Rising
            </button>
          </div>
          {/* project show area  */}
          <div className="project_show_cash">
            {/* single project card */}
            <div className="card">
              {/* card header */}
              <div className="card_header">
                <div className="post_auth_info">
                  <div className="profile_image">
                    <Link to='/profile-contributer'>
                      <img src="assets/img/user-1.png" alt="user_image"
                      />
                    </Link>
                  </div>
                  <div className="post_user_fet">
                    <Link to="/profile-contributer" className="user_name">
                      Esther Howard
                    </Link>
                    <div className="post-features">
                      <i className="fas fa-user"></i> Friends <span></span> 5
                      hours ago
                    </div>
                  </div>
                </div>
                <div className="post_arrow">
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M8 21V13H3L12 2L21 13H16V21H8ZM10 19H14V11H16.775L12 5.15L7.225 11H10V19Z"
                      />
                    </svg>
                  </button>
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M16 3L16 11L21 11L12 22L3 11L8 11L8 3L16 3ZM14 5L10 5L10 13L7.225 13L12 18.85L16.775 13L14 13L14 5Z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              {/* card body */}
              <div className="card_body">
                <h4 className="card_title">
                  AI-driven Drug Discovery for Neurodegenerative Diseases
                </h4>
                <p className="card_text">
                  Developing an AI-driven platform to screen and identify
                  potential drug candidates for the treatment of
                  neurodegenerative diseases.
                </p>
                <a href="project-details.html"
                >Learn more <i className="fas fa-arrow-right"></i
                ></a>
              </div>
              {/* card footer  */}
              <div className="card_footer">
                {/* project resourse   */}
                <div className="project_resourse">
                  <button className="project_effective_button">
                    <img src="assets/img/liked1.svg" alt='like' /> Like
                  </button>
                  <div className="project_reso_details">
                    <div className="likded_users">
                      <a href="#1"
                      ><img src="assets/img/user-2.png" alt="user 2"
                        /></a>
                      <a href="#2"
                      ><img src="assets/img/user-3.png" alt="user 2"
                        /></a>
                      <a href="#3"
                      ><img src="assets/img/user-4.png" alt="user 2"
                        /></a>
                    </div>
                    <p>and 312 peoples liked this post.</p>
                  </div>
                  <button className="project_effective_button">
                    <img src="assets/img/share.svg" alt='share' /> Share
                  </button>
                </div>
                {/* comment features   */}
                <div className="project_comment_features">
                  <button className="project_effective_button">
                    <img src="assets/img/comment.svg" alt='comment' /> Comment
                  </button>
                  <div className="post-features">
                    <Link to='/'>927 Comments</Link> <span></span>
                    <Link to='/'>20 Shares</Link>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </>
  );
};

export default ProjectFeed;