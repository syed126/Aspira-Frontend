const Dashboard = () => {
    return (
      <>
      <div class="main-bg">
                                <div class="row">
                                    <div class="col-lg-9 col-md-12 col-sm-12 left-section">

                                        <div class="course-section">
                                            <div class="row">
                                                <div class="col-lg-3 col-md-3 col-sm-6 usercourse-1">
                                                    <div class="course book d-flex align-items-flex-start">
                                                        <div class="course-offer">
                                                            <img src="images/usergroup.png" alt=""/>
                                                        </div>
                                                        <div class="course-no">
                                                            <p class="font-16">Total Aspirants</p>
                                                            <h5 class="font-22">30</h5>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="col-lg-3 col-md-3 col-sm-6 usercourse-2">
                                                    <div class="course book d-flex align-items-flex-start">
                                                        <div class="course-offer">
                                                            <img src="images/book.png" alt=""/>
                                                        </div>
                                                        <div class="course-no">
                                                            <p class="font-16">Total Courses</p>
                                                            <h5 class="font-22">14</h5>

                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="col-lg-3 col-md-3 col-sm-6 usercourse-3">
                                                    <div class="course book d-flex align-items-flex-start">
                                                        <div class="course-offer">
                                                            <img src="images/profile-add.png" alt=""/>
                                                        </div>
                                                        <div class="course-no">
                                                            <p class="font-16">Students Enrolled</p>
                                                            <h5 class="font-22">56</h5>

                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="col-lg-3 col-md-3 col-sm-6 usercourse-4">
                                                    <div class="course book d-flex align-items-flex-start">
                                                        <div class="course-offer">
                                                            <img src="images/briefcase.png" alt=""/>
                                                        </div>
                                                        <div class="course-no">
                                                            <p class="font-16">Got Job</p>
                                                            <h5 class="font-22">09</h5>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="leader-board">

                                            <div class="row">
                                                <h5 class="font-22 fw_500">Leader Board</h5>
                                                <div class="col-lg-3 col-md-6 col-sm-12 pf-detail">

                                                    <div
                                                        class="rank-section d-flex justify-content-center align-items-center">
                                                        <h6 class="font-18 fw_600">Rank 01</h6>
                                                        <div class="rank-img">
                                                            <img src="images/rank-profile.jpg" alt=""/>
                                                            <p class="fon-16 fw-500" tank-content="1"></p>
                                                        </div>
                                                        <div class="pro-content">
                                                            <h3 class="font-14 fw_600">ID:AS0101</h3>
                                                            <h5 class="fon-18 fw_600">Mohan Das</h5>
                                                            <p class="font-14 fw_500">Ui Designer</p>
                                                        </div>

                                                    </div>

                                                </div>

                                                <div class="col-lg-9 col-md-6 col-sm-12 pf-table">
                                                    <div class="table-responsive rank-table">
                                                        <table class="table">
                                                            <thead>
                                                                <tr>
                                                                    <th scope="col">Rank</th>
                                                                    <th scope="col">Aspira Id</th>
                                                                    <th scope="col">Name</th>
                                                                    <th scope="col">Tech</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>02</td>
                                                                    <td>AS01010</td>
                                                                    <td>
                                                                        <span class="rank-table-img">
                                                                            <img src="images/profile-pic-one.png"/>
                                                                        </span>
                                                                        <span> Mohammed Abbas</span>
                                                                    </td>
                                                                    <td>React JS</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>03</td>
                                                                    <td>AS01410</td>
                                                                    <td>
                                                                        <span class="rank-table-img"><img
                                                                                src="images/profile-pic-two.png"/></span>
                                                                        <span> Sameer Sam</span>
                                                                    </td>
                                                                    <td>Python</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>04</td>
                                                                    <td>AS01080</td>
                                                                    <td>

                                                                        <span class="rank-table-img"><img
                                                                                src="images/profile-pic-three.png"/></span>
                                                                        <span> Varatharajan
                                                                        </span>
                                                                    </td>
                                                                    <td>React JS</td>
                                                                </tr>

                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="chart-section">
                                            <div class="row">
                                                <div class="col-lg-12 col-md-12 col-sm-12">
                                                    <div class="bar-chart">
                                                        <div class="bar-content d-flex justify-content-between">
                                                            <h5 class="font-18 fw_500">Progress Overview</h5>
                                                            <img src="images/search-zoom-in.png" class="search-bar"/>
                                                        </div>
                                                        <canvas id="myChart_two"></canvas>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-6 col-sm-12 right-section">
                                        <div class="right-wrapper">
                                            <div class="request-section d-flex justify-content-between">
                                                <h5 class="font-18 fw_500">Requests</h5>
                                                <h6 class="font-16 fw_600">See All</h6>
                                            </div>
                                            <div class="on-board">
                                                <div class="on-site d-flex justify-content-between align-items-center">
                                                    <div class="on-site-name d-flex align-items-center">
                                                        <div class="clock">
                                                            <img src="images/clock.png" alt=""/>
                                                        </div>
                                                        <div class="on-site-head">
                                                            <h5 class="font-16 fw_500">Himmad Ameen</h5>
                                                            <p class="font-14 fw_400">On-site (Full time)</p>
                                                        </div>
                                                    </div>
                                                    <div class="arrow-bg">
                                                        <img src="images/arrow-right.png" alt=""/>
                                                    </div>
                                                </div>


                                                <div class="on-site d-flex justify-content-between align-items-center">
                                                    <div class="on-site-name d-flex align-items-center">
                                                        <div class="clock">
                                                            <img src="images/clock.png" alt=""/>
                                                        </div>
                                                        <div class="on-site-head">
                                                            <h5 class="font-16 fw_500">Himmad Ameen</h5>
                                                            <p class="font-14 fw_400">On-site (Full time)</p>
                                                        </div>
                                                    </div>
                                                    <div class="arrow-bg">
                                                        <img src="images/arrow-right.png" alt=""/>
                                                    </div>
                                                </div>

                                                <div class="on-site d-flex justify-content-between align-items-center">
                                                    <div class="on-site-name d-flex align-items-center">
                                                        <div class="clock">
                                                            <img src="images/clock.png" alt=""/>
                                                        </div>
                                                        <div class="on-site-head">
                                                            <h5 class="font-16 fw_500">Himmad Ameen</h5>
                                                            <p class="font-14 fw_400">On-site (Full time)</p>
                                                        </div>
                                                    </div>
                                                    <div class="arrow-bg">
                                                        <img src="images/arrow-right.png" alt=""/>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="request-section d-flex justify-content-between">
                                                <h5 class="font-18 fw_500">Recent Projects</h5>
                                                <h6 class="font-16 fw_600">See All</h6>
                                            </div>

                                            <div class="projects d-flex justify-content-between align-items-center">
                                                <div class="on-site-name d-flex align-items-center">
                                                    <div class="netflix">
                                                        <img src="images/netflix-n.png" alt=""/>
                                                    </div>
                                                    <div class="netflix-head">
                                                        <h6 class="font-16 fw_500">Netflix Clone</h6>
                                                        <p class="font-14 fw_400">
                                                            <img src="images/scroll.png" alt=""/>
                                                            HTML,CSS,JS
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="edit">
                                                    <img src="images/edit.png" alt=""/>
                                                </div>
                                            </div>

                                            <div class="projects d-flex justify-content-between align-items-center">
                                                <div class="on-site-name d-flex align-items-center">
                                                    <div class="netflix">
                                                        <img src="images/android.png" alt=""/>
                                                    </div>
                                                    <div class="netflix-head">
                                                        <h6 class="font-16 fw_500">Android Mobile App</h6>
                                                        <p class="font-14 fw_400">
                                                            <img src="images/scroll.png" alt=""/>
                                                            React Native
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="edit">
                                                    <img src="images/edit.png" alt=""/>
                                                </div>
                                            </div>

                                            <div class="request-section d-flex justify-content-between">
                                                <h5 class="font-18 fw_500">Upcoming Events</h5>
                                                <h6 class="font-16 fw_600">See All</h6>
                                            </div>
                                            <div class="motivation-comment">
                                                <div class="motivation-session d-flex">
                                                    <div class="motiv">
                                                        <img src="images/motivation.png" alt=""/>
                                                    </div>
                                                    <div class="moti-head">
                                                        <h5 class="font-16 fw_500">Motivation Session</h5>
                                                        <p class="font-14 fw_400">
                                                            <img src="images/Calendar.png" alt=""/>
                                                            Jun 17 2023
                                                        </p>
                                                        <p class="font-14 fw_400">
                                                            <img src="images/clock-light.png" alt=""/>
                                                            10:00am - 11:30am
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="event-btn">
                                                    <a href="#">Start Event
                                                        <img src="images/arrow-right.png" alt=""/>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
      </>
    );
  };
  
  export default Dashboard;