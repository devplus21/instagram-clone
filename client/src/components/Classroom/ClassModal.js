import { Button, Dialog, DialogActions, TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidV4 } from 'uuid';
import {
  createClassroom,
  updateClassroom,
} from '../../redux/actions/classroomAction';

// import './style.css';
const ClassModal = ({ openCreateClass, setOpenCreateClass }) => {
  const { auth, status, socket } = useSelector((state) => state);
  const [className, setClassName] = useState('');
  const [semester, setSemester] = useState('');
  const [room, setRoom] = useState('');
  const [subject, setSubject] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (status.onEdit) {
      dispatch(
        updateClassroom({ className, semester, subject, room, auth, status }),
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
    setOpenCreateClass(false);
  };

  useEffect(() => {
    if (status.onEdit) {
      setClassName(status.className);
      setSemester(status.semester);
      setSubject(status.subject);
      setRoom(status.room);
    }
  }, [status]);
  return (
    <Dialog
      onClose={() => setOpenCreateClass(false)}
      aria-labelledby="customized-dialog-title"
      open={openCreateClass}
      maxWidth="lg"
      className="form__dialog"
    >
      <div className="form">
        <p className="class__title">Tạo lớp học</p>

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
        <div className="form__dialog">
          <Button
            onClick={() => setOpenCreateClass(false)}
            color="primary"
            style={{ marginRight: '5px' }}
          >
            Hủy
          </Button>

          <Button
            onClick={handleSubmit}
            color="primary"
            variant="contained"
            style={{ marginLeft: '5px' }}
          >
            Tạo
          </Button>
        </div>
      </div>
    </Dialog>
  );
};

export default ClassModal;
