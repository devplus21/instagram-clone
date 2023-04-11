import ClassDetail from 'components/Classroom/ClassDetail';
import HeaderDetail from 'components/Classroom/HeaderDetail';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { getClassroom } from 'redux/actions/classroomAction';
import { ClientRoutes } from 'routes';

export function ClassLayout() {
  const { id } = useParams();
  const [classroom, setClassroom] = useState([]);

  const { auth, detailClassroom } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getClassroom({ detailClassroom, id, auth }));

    if (detailClassroom.length > 0) {
      const newArr = detailClassroom.filter(
        (classroom) => classroom._id === id,
      );
      setClassroom(newArr);
    }
  }, [detailClassroom, dispatch, id, auth]);
  return (
    <div className="client">
      {classroom.map((classroom) => (
        <>
          <HeaderDetail key={classroom._id} classroom={classroom} />
          <Outlet />
        </>
      ))}
    </div>
  );
}
