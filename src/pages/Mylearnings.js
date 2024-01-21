const Mylearnings = () => {
  return (
    <>
      <div className="main-bg learning-section">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 p-0">
                <div className="stack-tablecontent">
                  <div className="tech-stack d-flex justify-content-between">
                    <h5 className="font-22 fw_500">Tech Stack</h5>
                    <div className="warning d-flex justify-content-center align-items-center">
                      <div className="msg-show">
                        <img src="" />
                      </div>
                      <p className="font-16 fw_500">
                        Tech stack has been Added Successfully
                      </p>
                      <div className="close-icon">
                        <img src="" />
                      </div>
                    </div>
                    <div className="add-btn">
                      <a
                        className="btn add-stack"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#stack"
                      >
                        + Add Tech Stack
                      </a>
                    </div>
                  </div>

                  <div className="table-responsive any-role">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Technology ID</th>
                          <th>Technology Name</th>
                          <th>Stages</th>
                          <th>Description</th>
                          <th>Thumbnail</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>01</td>
                          <td>ASTS0101</td>
                          <td>Web Development</td>
                          <td>04</td>
                          <td className="text-co">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit
                            </p>
                          </td>
                          <td>
                            <div className="web-stack">
                              <img src="" alt="" loding="lazy" />
                            </div>
                          </td>
                          <td className="stack-output">
                            <span>
                              <a href="courseviewpage.html">
                                <img src="" />
                              </a>
                            </span>
                            <span>
                              <a
                                type="button"
                                className="btn re-submit"
                                data-bs-toggle="modal"
                                data-bs-target="#stack-edit"
                              >
                                <img src="" />
                              </a>
                            </span>
                            <span>
                              <a
                                type="button"
                                className="btn re-submit"
                                data-bs-toggle="modal"
                                data-bs-target="#mailsent"
                              >
                                <img src="" />
                              </a>
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="pagenation-section">
                    <div className="pagnation-left">
                      <h3>Show</h3>
                      <div className="select-icon">
                        <select className="pagnation-count">
                          <option value="5">5</option>
                          <option value="10">10</option>
                          <option value="15">15</option>
                          <option value="20">20</option>
                        </select>
                      </div>
                      <h3>Last Entries</h3>
                    </div>
                    <nav aria-label="Page navigation example">
                      <ul className="pagination">
                        <li className="page-item">
                          <a className="page-link" href="#">
                            Prev.
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link  active" href="#">
                            1
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            2
                          </a>
                        </li>

                        <li className="page-item">
                          <a className="page-link" href="#">
                            ...
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            16
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            Next
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="del-msg d-flex justify-content-center align-items-center">
                <div className="warning d-flex justify-content-center align-items-center">
                  <div className="msg-show">
                    <img src="" />
                  </div>
                  <p className="font-16 fw_500">Tech stack has been deleted</p>
                  <div className="close-icon">
                    <img src="" />
                  </div>
                </div>
              </div>

              <div className="del-msg d-flex justify-content-center align-items-center">
                <div className="warning d-flex justify-content-center align-items-center">
                  <div className="msg-show">
                    <img src="" />
                  </div>
                  <p className="font-16 fw_500">
                    Tech stack has been Updated Successfully
                  </p>
                  <div className="close-icon">
                    <img src="" />
                  </div>
                </div>
              </div>

              <div className="del-msg d-flex justify-content-center align-items-center">
                <div className="warning d-flex justify-content-center align-items-center">
                  <div className="msg-show">
                    <img src="" />
                  </div>
                  <p className="font-16 fw_500">
                    Tech stack has been Added Successfully
                  </p>
                  <div className="close-icon">
                    <img src="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
    </>
  );
};

export default Mylearnings;
