import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { Drawer, Box, IconButton } from '@material-ui/core';

const HeaderMenu = () => {
  return (
    <div className="header_control">
      {/* tổng hợp (classroom + meet) */}
      <Link to="/classrooms" className="btn header-link">
        Lớp học
      </Link>

      {/* giống với confeession theo dạng bài viết và admin sẽ duyệt bài viết đó (confeession)*/}
      <Link to="/forum" className="btn header-link">
        Diễn đàn
      </Link>
      {/* tô màu những việc cần làm trong tuần dựa vào thời khóa biểu đã đăng ký trước đó (Trello) */}
      <Link to="/message" className="btn header-link ">
        Tin nhắn
      </Link>
      <Link to="/about" className="btn header-link">
        Về chúng tôi
      </Link>
      {/* giống tng thông báo (UTC2) */}
    </div>
  );
};

export default HeaderMenu;
