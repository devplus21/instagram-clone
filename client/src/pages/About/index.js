import Helmet from 'components/Helmet';
import Header from 'components/header/Header';

import React from 'react';

const About = () => {
  return (
    <Helmet title="Giới thiệu">
      <Header />
      <div className="home_page ">
        Google Classroom làm được gì? Bạn có biết gã khổng lồ Google dành hẳn
        một phạm trù lớn cho giáo dục đó là G Suite?. G Suite là một bộ ứng dụng
        năng suất điện toán đám mây và các công cụ phần mềm cộng tác dành cho hệ
        thống giáo dục. Nó bao gồm các ứng dụng web phổ biến của Google như
        Gmail, Google Drive, Google Hangouts, Google Calendar, và Google Docs
        được thiết kế chuyên biệt cho môi trường giáo dục và đào tạo. G suite là
        một “hệ sinh thái” dành cho môi trường giáo dục đào tạo nên nó là rất
        lớn, mất nhiều thì giờ để hiểu hết về nó. Trong tài liệu viết nhanh này
        tôi không đi sâu vào G suite mà chỉ tập trung vào một sản phẩm nhỏ là
        Google Classroom với mong muốn giúp các quý thầy cô tổ chức, quản lý tốt
        việc dạy học trực tuyến của mình. Trở lại câu hỏi Google Classroom làm
        được gì? GCR giúp bạn tổ chức dạy học trực tuyến miễn phí với vai trò
        giáo viên và tham gia lớp học với vai trò của học viên. Hãy xem các công
        việc mà GCR giúp bạn:
        <p>
          Đối với giáo viên:
          <br />
          - Tạo mới lớp học đơn giản, nhanh
          <br />
          - Quản lý và điều khiển lớp học qua luồng
          <br />
          - Hỗ trợ thiết kế tài liệu giảng dạy từ nhiều nguồn khác nhau
          <br />
          - Tạo và đăng nhanh video giảng dạy.
          <br />
          - Giao bài tập cho học sinh Tạo bài tập, bài kiểm tra 1 tiết, 15p…
          ngay trên lớp cho học sinh
          <br />
          - Tạo bài tập, kiểm tra chấm điểm trực tuyến
          <br />
          - Giao các bài tập, bài kiểm tra về nhà
          <br />
          - Quản lý các tương tác, trao đổi trong lớp.
          <br />
          - Quản lý hoạt động từng cá nhân học sinh
          <br />
          - Quản lý bài kiểm tra, điểm của học sinh
          <br />
          - Thông báo tình trạng học tập với gia đình học sinh qua gmail
          <br />
        </p>
        <p>
          Đối với học sinh, sinh viên <br />
          Tham gia một hoặc nhiều lớp học <br />
          Theo dõi tương tác với giảng viên, với lớp thông qua luồng (timeline){' '}
          <br />
          Tham gia làm các bài tập, tự nguyện và bắt buộc khi giáo viên giao.{' '}
          <br />
          Biết ngay điểm số sau khi hoàn thành bài kiểm tra (với đề tự động
          chấm). <br />
          Học mọi lúc, mọi nơi ngay cả khi đang di chuyển. <br />
          Tận dụng các thiết bị có thể truy cập mạng trong gia đình để học.
          <br />
        </p>
      </div>
    </Helmet>
  );
};

export default About;
