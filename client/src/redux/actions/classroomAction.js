import {
  deleteDataAPI,
  getDataAPI,
  patchDataAPI,
  postDataAPI,
} from '../../utils/fetchData';
import { GLOBALTYPES } from '../actions/globalTypes';
import { CLASSROOM_TYPES } from '../types/classroomTypes';
import { removeNotify } from './notifyAction';

export const createClassroom =
  ({ className, semester, subject, room, auth }) =>
  async (dispatch) => {
    // console.log({ className, semester, subject, room, auth })
    try {
      dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } });

      const res = await postDataAPI(
        'classrooms',
        { className, semester, subject, room },
        auth.token,
      );

      dispatch({
        type: CLASSROOM_TYPES.CREATE_CLASSROOM,
        payload: { ...res.data.newClassroom, user: auth.user },
      });

      dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: false } });
    } catch (err) {
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: { error: err.response.data.msg },
      });
    }
  };

export const getClassrooms = (token) => async (dispatch) => {
  try {
    dispatch({ type: CLASSROOM_TYPES.LOADING_CLASSROOM, payload: true });
    const res = await getDataAPI('classrooms', token);

    dispatch({
      type: CLASSROOM_TYPES.GET_CLASSROOMS,
      payload: { ...res.data, page: 2 },
    });

    dispatch({ type: CLASSROOM_TYPES.LOADING_CLASSROOM, payload: false });
  } catch (err) {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: { error: err.response.data.msg },
    });
  }
};

export const updateClassroom =
  ({ className, semester, subject, room, auth, status }) =>
  async (dispatch) => {
    try {
      dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } });

      const res = await patchDataAPI(
        `classroom/${status._id}`,
        {
          className,
          semester,
          subject,
          room,
        },
        auth.token,
      );

      dispatch({
        type: CLASSROOM_TYPES.UPDATE_CLASSROOM,
        payload: res.data.newClassroom,
      });

      dispatch({ type: GLOBALTYPES.ALERT, payload: { success: res.data.msg } });
    } catch (err) {
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: { error: err.response.data.msg },
      });
    }
  };

export const getClassroom =
  ({ detailClassroom, id, auth }) =>
  async (dispatch) => {
    console.log({ detailClassroom });
    if (detailClassroom.every((classroom) => classroom._id !== id)) {
      try {
        const res = await getDataAPI(`classroom/${id}`, auth.token);
        dispatch({
          type: CLASSROOM_TYPES.GET_CLASSROOM,
          payload: res.data.classroom,
        });
      } catch (err) {
        dispatch({
          type: GLOBALTYPES.ALERT,
          payload: { error: err.response.data.msg },
        });
      }
    }
  };

export const deleteClassroom =
  ({ classroom, auth, socket }) =>
  async (dispatch) => {
    dispatch({ type: CLASSROOM_TYPES.DELETE_CLASSROOM, payload: classroom });

    try {
      const res = await deleteDataAPI(`classroom/${classroom._id}`, auth.token);

      // Notify
      const msg = {
        id: classroom._id,
        text: 'đã thêm bài viết mới.',
        recipients: res.data.newClassroom.user.followers,
        url: `/classroom/${classroom._id}`,
      };
      dispatch(removeNotify({ msg, auth, socket }));
    } catch (err) {
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: { error: err.response.data.msg },
      });
    }
  };
