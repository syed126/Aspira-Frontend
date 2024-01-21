import { Outlet, Link } from "react-router-dom";
import "../style/css/style.css";
import "../style/css/bootstrap.min.css";
import "../style/css/variable.css";
import "../style/css/responsive.css";

const Sidebar = () => {
  return (
    <>
      <div className="asp-admin">
        <div className="user-dashboard">
          <div className="row">
            <div className="col-12 d-flex p-0 table_scroll" id="wrapper">
              <div className="primary-bg menu-section">
                <div className="top-head text-center">
                  <img
                    src="images/dashboard-logo.png"
                    alt="aspira_logo"
                    className="as-logo"
                  />
                </div>
                <div className="mobile-logo">
                  <img src="" alt="" />
                </div>
                <div className="text-truncate" id="side-wrapper">
                  <div className="left-nav top-nav admin">
                    <div className="list-group list-group-flush">
                      <ul className="menus">
                        <li>
                            <Link to="/dashboard" className="list-group-item list-group-item-action">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g id="vuesax/linear/home">
                                <g id="home">
                                  <path
                                    id="Vector"
                                    d="M10 15V12.5"
                                    stroke="white"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    id="Vector_2"
                                    d="M8.39172 2.35004L2.61672 6.97504C1.96672 7.4917 1.55006 8.58337 1.69172 9.40004L2.80006 16.0334C3.00006 17.2167 4.13339 18.175 5.33339 18.175H14.6667C15.8584 18.175 17.0001 17.2084 17.2001 16.0334L18.3084 9.40004C18.4417 8.58337 18.0251 7.4917 17.3834 6.97504L11.6084 2.35837C10.7167 1.6417 9.27506 1.6417 8.39172 2.35004Z"
                                    stroke="white"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </g>
                              </g>
                            </svg>
                            <span> Dashboard</span>
                            </Link>
                        </li>

                        <li>
                        <Link to="/mylearnings" className="list-group-item list-group-item-action">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g id="vuesax/linear/note-2">
                                <g id="note-2">
                                  <path
                                    id="Vector"
                                    d="M18.05 8.69992L17.2333 12.1833C16.5333 15.1916 15.15 16.4083 12.55 16.1583C12.1333 16.1249 11.6833 16.0499 11.2 15.9333L9.79999 15.5999C6.32499 14.7749 5.24999 13.0583 6.06665 9.57493L6.88332 6.08326C7.04999 5.37493 7.24999 4.75826 7.49999 4.24993C8.47499 2.23326 10.1333 1.69159 12.9167 2.34993L14.3083 2.67493C17.8 3.49159 18.8667 5.21659 18.05 8.69992Z"
                                    stroke="#ADB4BF"
                                    stroke-width="1.2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    id="Vector_2"
                                    d="M12.5498 16.1583C12.0331 16.5083 11.3831 16.8 10.5915 17.0583L9.2748 17.4917C5.96646 18.5583 4.2248 17.6667 3.1498 14.3583L2.08313 11.0667C1.01646 7.75833 1.8998 6.00833 5.20813 4.94167L6.5248 4.50833C6.86646 4.4 7.19146 4.30833 7.4998 4.25C7.2498 4.75833 7.0498 5.375 6.88313 6.08333L6.06646 9.575C5.2498 13.0583 6.3248 14.775 9.7998 15.6L11.1998 15.9333C11.6831 16.05 12.1331 16.125 12.5498 16.1583Z"
                                    stroke="#ADB4BF"
                                    stroke-width="1.2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    id="Vector_3"
                                    d="M10.5332 7.1084L14.5749 8.1334"
                                    stroke="#ADB4BF"
                                    stroke-width="1.2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    id="Vector_4"
                                    d="M9.7168 10.3333L12.1335 10.9499"
                                    stroke="#ADB4BF"
                                    stroke-width="1.2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </g>
                              </g>
                            </svg>
                            <span> My Learnings</span>
                          </Link>
                        </li>

                        <li>
                            <Link to="/aspirant-progress" className="list-group-item list-group-item-action">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g id="vuesax/linear/book">
                                <g id="book">
                                  <path
                                    id="Vector"
                                    d="M2.91669 15V5.83333C2.91669 2.5 3.75002 1.66666 7.08335 1.66666H12.9167C16.25 1.66666 17.0834 2.5 17.0834 5.83333V14.1667C17.0834 14.2833 17.0834 14.4 17.075 14.5167"
                                    stroke="#ADB4BF"
                                    stroke-width="1.2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    id="Vector_2"
                                    d="M5.29169 12.5H17.0834V15.4167C17.0834 17.025 15.775 18.3333 14.1667 18.3333H5.83335C4.22502 18.3333 2.91669 17.025 2.91669 15.4167V14.875C2.91669 13.5667 3.98335 12.5 5.29169 12.5Z"
                                    stroke="#ADB4BF"
                                    stroke-width="1.2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    id="Vector_3"
                                    d="M6.66669 5.83334H13.3334"
                                    stroke="#ADB4BF"
                                    stroke-width="1.2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    id="Vector_4"
                                    d="M6.66669 8.75H10.8334"
                                    stroke="#ADB4BF"
                                    stroke-width="1.2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </g>
                              </g>
                            </svg>
                            <span>Aspirants Progress</span>
                          </Link>
                        </li>

                        <li>
                            <Link to="/new-aspirant" className="list-group-item list-group-item-action">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g id="vuesax/linear/user-add">
                                <g id="user-add">
                                  <path
                                    id="Vector"
                                    d="M9.99998 10C12.3012 10 14.1666 8.13452 14.1666 5.83333C14.1666 3.53215 12.3012 1.66667 9.99998 1.66667C7.69879 1.66667 5.83331 3.53215 5.83331 5.83333C5.83331 8.13452 7.69879 10 9.99998 10Z"
                                    stroke="#ADB4BF"
                                    stroke-width="1.2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    id="Vector_2"
                                    d="M2.84167 18.3333C2.84167 15.1083 6.05 12.5 10 12.5C10.8 12.5 11.575 12.6083 12.3 12.8083"
                                    stroke="#ADB4BF"
                                    stroke-width="1.2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    id="Vector_3"
                                    d="M18.3334 15C18.3334 15.2667 18.3 15.525 18.2334 15.775C18.1584 16.1083 18.025 16.4333 17.85 16.7167C17.275 17.6833 16.2167 18.3333 15 18.3333C14.1417 18.3333 13.3667 18.0083 12.7834 17.475C12.5334 17.2583 12.3167 17 12.15 16.7167C11.8417 16.2167 11.6667 15.625 11.6667 15C11.6667 14.1 12.025 13.275 12.6084 12.675C13.2167 12.05 14.0667 11.6667 15 11.6667C15.9834 11.6667 16.875 12.0917 17.475 12.775C18.0084 13.3667 18.3334 14.15 18.3334 15Z"
                                    stroke="#ADB4BF"
                                    stroke-width="1.2"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <g id="Group">
                                    <path
                                      id="Vector_4"
                                      d="M16.2417 14.9833H13.7584"
                                      stroke="#ADB4BF"
                                      stroke-width="1.2"
                                      stroke-miterlimit="10"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    />
                                    <path
                                      id="Vector_5"
                                      d="M15 13.7667V16.2583"
                                      stroke="#ADB4BF"
                                      stroke-width="1.2"
                                      stroke-miterlimit="10"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    />
                                  </g>
                                </g>
                              </g>
                            </svg>
                            <span> New Registration</span>
                          </Link>
                        </li>

                        <li>
                            <Link to="/events" className="list-group-item list-group-item-action">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g id="vuesax/linear/calendar-2">
                                <g id="calendar-2">
                                  <path
                                    id="Vector"
                                    d="M6.66669 1.66667V4.16667"
                                    stroke="#ADB4BF"
                                    stroke-width="1.2"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    id="Vector_2"
                                    d="M13.3333 1.66667V4.16667"
                                    stroke="#ADB4BF"
                                    stroke-width="1.2"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    id="Vector_3"
                                    d="M2.91669 7.575H17.0834"
                                    stroke="#ADB4BF"
                                    stroke-width="1.2"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    id="Vector_4"
                                    d="M17.5 7.08333V14.1667C17.5 16.6667 16.25 18.3333 13.3333 18.3333H6.66667C3.75 18.3333 2.5 16.6667 2.5 14.1667V7.08333C2.5 4.58333 3.75 2.91667 6.66667 2.91667H13.3333C16.25 2.91667 17.5 4.58333 17.5 7.08333Z"
                                    stroke="#ADB4BF"
                                    stroke-width="1.2"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    id="Vector_5"
                                    d="M9.99626 11.4167H10.0037"
                                    stroke="#ADB4BF"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    id="Vector_6"
                                    d="M6.91191 11.4167H6.91939"
                                    stroke="#ADB4BF"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    id="Vector_7"
                                    d="M6.91191 13.9167H6.91939"
                                    stroke="#ADB4BF"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </g>
                              </g>
                            </svg>
                            <span> Events & Info</span>
                          </Link>
                        </li>

                        <li>
                            <Link to="/master-data" className="list-group-item list-group-item-action">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g id="vuesax/linear/layer">
                                <g id="layer">
                                  <path
                                    id="Vector"
                                    d="M10.8417 2.43333L15.7583 4.61667C17.175 5.24167 17.175 6.275 15.7583 6.9L10.8417 9.08333C10.2833 9.33333 9.36666 9.33333 8.80833 9.08333L3.89166 6.9C2.475 6.275 2.475 5.24167 3.89166 4.61667L8.80833 2.43333C9.36666 2.18333 10.2833 2.18333 10.8417 2.43333Z"
                                    stroke="#ADB4BF"
                                    stroke-width="1.2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    id="Vector_2"
                                    d="M2.5 9.16666C2.5 9.86666 3.025 10.675 3.66667 10.9583L9.325 13.475C9.75833 13.6667 10.25 13.6667 10.675 13.475L16.3333 10.9583C16.975 10.675 17.5 9.86666 17.5 9.16666"
                                    stroke="#ADB4BF"
                                    stroke-width="1.2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    id="Vector_3"
                                    d="M2.5 13.3333C2.5 14.1083 2.95833 14.8083 3.66667 15.125L9.325 17.6417C9.75833 17.8333 10.25 17.8333 10.675 17.6417L16.3333 15.125C17.0417 14.8083 17.5 14.1083 17.5 13.3333"
                                    stroke="#ADB4BF"
                                    stroke-width="1.2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </g>
                              </g>
                            </svg>
                            <span> Master data</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col p-0 page-wrapper">
        <div id="main-page-wrapper">
          <nav className="navbar navbar-expand-lg dashboard-content">
            <div className="header-content">
              <div className="mobile-logo top">
                <img src="" alt="" />
              </div>
              <div className="d-flex align-items-center justify-content-center mobile-menu">
                <i className="fa-solid fa-bars" id="menu-bar"></i>
                <h3 className="font-22 fw_600">My Learnings</h3>
              </div>
              <div
                className="profile d-flex align-items-center"
                id="navbar-notifi"
              >
                <button
                  type="button"
                  className="btn Notification_btn"
                  data-bs-toggle="modal"
                  data-bs-target="#notification_popup"
                >
                  <div className="notify-circle">
                    <img src="" alt="notification" />
                  </div>
                </button>

                <div className="profile-page d-flex justify-content-center align-items-center">
                  <div className="profile-section">
                    <img src="" alt="" />
                  </div>
                  <div className="dropdown pf-content">
                    <h3 className="font-12">ADMIN 1</h3>
                    <button className="dropbtn">
                      Rio Johnson
                      <span>
                        <img src="" alt="" />
                      </span>
                    </button>
                  </div>
                  <div className="dropdown-content">
                    <a href="profilecreation.html">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="user">
                          <g id="vuesax/linear/user">
                            <g id="user_2">
                              <path
                                id="Vector"
                                d="M10 10.0003C12.3012 10.0003 14.1667 8.13485 14.1667 5.83366C14.1667 3.53247 12.3012 1.66699 10 1.66699C7.69885 1.66699 5.83337 3.53247 5.83337 5.83366C5.83337 8.13485 7.69885 10.0003 10 10.0003Z"
                                stroke="#767A7A"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                id="Vector_2"
                                d="M17.1583 18.3333C17.1583 15.1083 13.95 12.5 10 12.5C6.05001 12.5 2.84167 15.1083 2.84167 18.3333"
                                stroke="#767A7A"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </g>
                          </g>
                        </g>
                      </svg>
                      My profile
                    </a>

                    <a href="admin-login.html">
                      {" "}
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="vuesax/linear/logout">
                          <g id="logout">
                            <path
                              id="Vector"
                              d="M7.4165 6.29995C7.67484 3.29995 9.2165 2.07495 12.5915 2.07495H12.6998C16.4248 2.07495 17.9165 3.56662 17.9165 7.29162V12.725C17.9165 16.45 16.4248 17.9416 12.6998 17.9416H12.5915C9.2415 17.9416 7.69984 16.7333 7.42484 13.7833"
                              stroke="#ADB4BF"
                              stroke-width="1.2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              id="Vector_2"
                              d="M12.4999 10H3.0166"
                              stroke="#ADB4BF"
                              stroke-width="1.2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              id="Vector_3"
                              d="M4.87516 7.20825L2.0835 9.99992L4.87516 12.7916"
                              stroke="#ADB4BF"
                              stroke-width="1.2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </g>
                        </g>
                      </svg>
                      Logout
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <Outlet />          
          <div className="footer d-flex justify-content-between">
            <p className="font-12 fw_400 copyright">
              <img src="" alt="copyright" />
              2023 AspiraSys. All Rights Reserved.
            </p>
            <p className="font-12 fw_400 version">v.05</p>
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

export default Sidebar;
