import React, { useState, useRef, useEffect } from 'react';
import { TextField } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { GLOBALTYPES } from '../redux/actions/globalTypes';
import { createPost, updatePost } from '../redux/actions/postAction';
import Icons from './Icons';
import { v4 as uuidV4 } from 'uuid';
import { imageShow, videoShow } from '../utils/mediaShow';
import {
  createClassroom,
  updateClassroom,
} from '../redux/actions/classroomAction';

const StatusModal = () => {
  const { auth, theme, status_class, socket } = useSelector((state) => state);

  const [className, setClassName] = useState('');
  const [semester, setSemester] = useState('');
  const [room, setRoom] = useState('');
  const [subject, setSubject] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (status_class.onEdit) {
      dispatch(
        updateClassroom({
          className,
          semester,
          subject,
          room,
          auth,
          status_class,
        }),
      );
    } else {
      dispatch(
        createClassroom({ className, semester, subject, room, auth, socket }),
      );
    }

    setClassName('');
    setSemester('');
    setSubject('');
    setRoom('');
    dispatch({ type: GLOBALTYPES.STATUS_CLASS, payload: false });
  };

  useEffect(() => {
    if (status_class.onEdit) {
      setClassName(status_class.className);
      setSemester(status_class.semester);
      setSubject(status_class.subject);
      setRoom(status_class.room);
    }
  }, [status_class]);

  return (
    <div className="status_modal">
      <form onSubmit={handleSubmit}>
        <div className="status_header">
          <h5 className="m-0">Tạo Bài Đăng</h5>
          <span
            onClick={() =>
              dispatch({
                type: GLOBALTYPES.STATUS,
                payload: false,
              })
            }
          >
            &times;
          </span>
        </div>
        <div className="form__inputs">
          <TextField
            id="filled-basic"
            label="Tên lớp học (bắt buộc)"
            className="form__input"
            variant="filled"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
          />

          <TextField
            id="filled-basic"
            label="Môn học"
            className="form__input"
            variant="filled"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <TextField
            id="filled-basic"
            label="Học kì"
            className="form__input"
            variant="filled"
            value={semester}
            onChange={(e) => setSemester(e.target.value)}
          />

          <TextField
            id="filled-basic"
            label="Phòng"
            className="form__input"
            variant="filled"
            value={room}
            onChange={(e) => setRoom(e.target.value)}
          />
        </div>

        <div className="status_footer">
          <button className="btn btn-secondary w-100" type="submit">
            Đăng
          </button>
          <button
            className="btn btn-secondary w-100"
            type="submit"
            onClick={() =>
              dispatch({
                type: GLOBALTYPES.STATUS_CLASS,
                payload: false,
              })
            }
          >
            Hủy
          </button>
        </div>
      </form>
    </div>
  );
};

export default StatusModal;
