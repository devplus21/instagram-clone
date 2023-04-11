import Helmet from 'components/Helmet';
import Header from 'components/header/Header';
import { useEffect } from 'react';

let scroll = 0;

const News = () => {
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

  return (
    <Helmet title="Trang chủ">
      <div className="home_page ">News</div>
    </Helmet>
  );
};

export default News;
