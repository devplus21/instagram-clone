import ClassCard from 'components/Classroom/ClassCard';
import React from 'react';
import { useSelector } from 'react-redux';

const ListClass = () => {
  const { homeClassroom } = useSelector((state) => state);
  // console.log({ homeClassroom })
  return (
    <div className="list_class">
      {homeClassroom.classrooms.map((classroom) => (
        <ClassCard key={classroom._id} classroom={classroom} />
      ))}
    </div>
  );
};
export default ListClass;
