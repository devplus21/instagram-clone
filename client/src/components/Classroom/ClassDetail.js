import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UTC2 from '../../assets/images/uct2.png';
import { GLOBALTYPES } from '../../redux/actions/globalTypes';

import LoadIcon from '../../assets/images/loading.gif';
import Posts from '../home/Posts';
let scroll = 0;
const ClassDetail = ({ classroom }) => {
  const { homePosts } = useSelector((state) => state);

  window.addEventListener('scroll', () => {
    if (window.location.pathname === '/') {
      scroll = window.pageYOffset;
      return scroll;
    }
  });
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: scroll, behavior: 'smooth' });
    }, 100);
  }, []);
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div>
      {' '}
      <div className="main__wrapper">
        <div className="main-wrap">
          <div className="main__content">
            <div className="main__wrapper1">
              <div className="main__bgImage">
                <div className="main__emptyStyles" />
              </div>
              <div className="main__text">
                <h1 className="main__heading main__overflow">
                  Tên lớp:{' '}
                  <span style={{ textTransform: 'uppercase' }}>
                    {classroom.className}
                  </span>
                </h1>
                <div className="main__section main__overflow">
                  Môn học: {classroom.subject}
                </div>
                <div className="main__section main__overflow">
                  Học kì: {classroom.semester}
                </div>
              </div>
            </div>
          </div>
          <div className="main__announce">
            <div>
              <div className="main__status">
                <p>Mã lớp</p>
                <p>{classroom._id}</p>
                <span className="material-icons">content_copy</span>
              </div>
              <div className="main__status">
                <p>Sắp đến hạn</p>
                <p>Không có bài tập sắp hết hạn</p>
              </div>
            </div>
            <div className="main__announcementsWrapper">
              <div className="main__ancContent">
                <div
                  className="main__wrapper100"
                  onClick={() =>
                    dispatch({ type: GLOBALTYPES.STATUS_POST, payload: true })
                  }
                >
                  <Avatar src={auth.user.avatar} size="big-avatar" />
                  <div>Thông báo nội dung nào đó cho lớp học của bạn</div>
                </div>
              </div>
              <div className="main__announce ">
                {homePosts.loading ? (
                  <img
                    src={LoadIcon}
                    alt="loading"
                    className="d-block mx-auto"
                  />
                ) : homePosts.result === 0 && homePosts.posts.length === 0 ? (
                  <h2 className="text-center">Không Có Bài Đăng</h2>
                ) : (
                  <Posts />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ClassDetail;
