import { useState } from 'react';
import LoadIcon from '../../assets/images/loading.gif';
import ListClass from 'components/Classroom/LissClass';
// import Header from 'components/Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { Menu, MenuItem } from '@material-ui/core';
import React from 'react';
import ClassModal from '../../components/Classroom/ClassModal';
import { GLOBALTYPES } from '../../redux/actions/globalTypes';
import JoinClass from 'components/JoinClass';
import './style.css';
import Helmet from '../../components/Helmet';
const Classrooms = () => {
  const [openJoinClass, setOpenJoinClass] = useState(false);
  const [openCreateClass, setOpenCreateClass] = useState(false);
  const dispatch = useDispatch();
  const { home_classroom } = useSelector((state) => state);

  return (
    <Helmet title="Danh sách lớp">
      {/* <Header /> */}
      <div className="home_page ">
        {/* <div className="home_page_middle">
          {homeClasses.loading ? (
            <img src={LoadIcon} alt="loading" className="d-block mx-auto my-4" />
          ) : homeClasses.result === 0 && homeClasses.posts.length === 0 ? (
            <h4 className="text-center text-danger" style={{ padding: '10px' }}>
              Chưa có bài viết nào
            </h4>
          ) : (sta
            <Posts />
          )}
        </div> */}
        <div className="header_class">
          <button
            className="btn"
            onClick={() =>
              dispatch({ type: GLOBALTYPES.STATUS_CLASS, payload: true })
            }
          >
            Tạo lớp học
          </button>

          <button className="btn" onClick={() => setOpenJoinClass(true)}>
            Tham gia lớp học
          </button>

          {openJoinClass && (
            <JoinClass
              openJoinClass={openJoinClass}
              setOpenJoinClass={setOpenJoinClass}
            />
          )}
        </div>

        <div className="main__announce ">
          {home_classroom.loading ? (
            <img src={LoadIcon} alt="loading" className="d-block mx-auto" />
          ) : home_classroom.result === 0 &&
            home_classroom.classrooms.length === 0 ? (
            <h2 className="text-center">Không Có Bài Đăng</h2>
          ) : (
            <ListClass />
          )}
        </div>
      </div>
    </Helmet>
  );
};

export default Classrooms;
