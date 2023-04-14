import { combineReducers } from 'redux';
import auth from './authReducer';
import alert from './alertReducer';
import theme from './themeReducer';
import profile from './profileReducer';
import {
  statusPostReducer,
  statusClassReducer,
  statusInviteReducer,
  statusExerciseReducer,
  statusForumReducer,
} from './statusReducer';

import homePosts from './postReducer';
import modal from './modalReducer';
import detailPost from './detailPostReducer';
import discover from './discoverReducer';
import suggestions from './suggestionsReducer';
import socket from './socketReducer';
import notify from './notifyReducer';
import message from './messageReducer';
import online from './onlineReducer';
import call from './callReducer';
import peer from './peerReducer';
import forum from './forumReducer';
import exercise from './exerciseReducer';
import home_classroom from './classroomReducer';
import detailClassroom from './detailClassroomReducer';
export default combineReducers({
  status_post: statusPostReducer,
  status_class: statusClassReducer,
  status_exercise: statusExerciseReducer,
  status_intive: statusInviteReducer,
  status_forum: statusForumReducer,
  auth,
  alert,
  theme,
  profile,
  exercise,
  home_classroom,
  detailClassroom,
  homePosts,
  modal,
  detailPost,
  discover,
  suggestions,
  socket,
  notify,
  message,
  online,
  call,
  forum,
  peer,
});
