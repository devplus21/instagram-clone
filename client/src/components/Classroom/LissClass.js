import ClassCard from 'components/Classroom/ClassCard';
import React from 'react';
import LoadIcon from '../../assets/images/loading.gif';
import { POST_TYPES } from '../../redux/types/postTypes';
import { getDataAPI } from '../../utils/fetchData';
import LoadMoreBtn from 'components/LoadMoreBtn';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ListClass = () => {
  const { home_classroom, auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [load, setLoad] = useState(false);
  // console.log({ home_classroom });
  const handleLoadMore = async () => {
    setLoad(true);
    const res = await getDataAPI(
      `posts?limit=${home_classroom.page * 9}`,
      auth.token,
    );

    dispatch({
      type: POST_TYPES.GET_CLASSROOMS,
      payload: { ...res.data, page: home_classroom.page + 1 },
    });

    setLoad(false);
  };
  return (
    <div className="list_class">
      {home_classroom.classrooms.map((classroom) => (
        <ClassCard key={classroom._id} classroom={classroom} />
      ))}
      {load && (
        <img src={LoadIcon} alt="loading" className="d-block mx-auto my-4" />
      )}

      <LoadMoreBtn
        result={home_classroom.result}
        page={home_classroom.page}
        load={load}
        handleLoadMore={handleLoadMore}
      />
    </div>
  );
};
export default ListClass;
