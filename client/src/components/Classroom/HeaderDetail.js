import React from 'react';
import { Link } from 'react-router-dom';

import UTC2 from '../../assets/images/uct2.png';
import MenuRight from 'components/header/HeaderRight.js';

const HeaderDetail = ({ classroom }) => {
  return (
    <div className="header">
      <div className="header_left">
        <Link to="/" className="logo">
          {/* <img src={UTC2} alt="" /> */}
        </Link>
        <Link className="header-link" to="/">
          <p className="header-title"> {classroom.className}</p>
        </Link>
      </div>

      <ul className="menu">
        <li className="menu-item">
          <Link to={`/classroom/${classroom._id}`} className="btn menu-link">
            Bảng tin
          </Link>
        </li>

        <li className="menu-item">
          <Link
            to={`/classroom/${classroom._id}/exercise`}
            className="btn menu-link"
          >
            Bài tập
          </Link>
        </li>
        <li className="menu-item">
          <Link
            to={`/classroom/${classroom._id}/users`}
            className="btn menu-link"
          >
            Mọi người
          </Link>
        </li>

        <li className="menu-item">
          <Link
            to={`/classroom/${classroom._id}/meeting`}
            className="btn menu-link"
          >
            Meeting
          </Link>
        </li>

        {/* <li className="menu-item">
          <Link to={`/classroom/meeting`} className="btn menu-link">
            Cuộc thi
          </Link>
        </li> */}

        <li className="menu-item">
          <Link
            to={`/classroom/${classroom._id}/point`}
            className="btn menu-link"
          >
            Điểm
          </Link>
        </li>
      </ul>

      <MenuRight />
    </div>
  );
};

export default HeaderDetail;
