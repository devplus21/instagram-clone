import { GLOBALTYPES } from '../actions/globalTypes';

export const statusPostReducer = (state = false, action) => {
  switch (action.type) {
    case GLOBALTYPES.STATUS_POST:
      return action.payload;
    default:
      return state;
  }
};
export const statusClassReducer = (state = false, action) => {
  switch (action.type) {
    case GLOBALTYPES.STATUS_CLASS:
      return action.payload;
    default:
      return state;
  }
};
export const statusInviteReducer = (state = false, action) => {
  switch (action.type) {
    case GLOBALTYPES.STATUS_INTIVE:
      return action.payload;
    default:
      return state;
  }
};
export const statusExerciseReducer = (state = false, action) => {
  switch (action.type) {
    case GLOBALTYPES.STATUS_EXERCISE:
      return action.payload;
    default:
      return state;
  }
};

export const statusForumReducer = (state = false, action) => {
  switch (action.type) {
    case GLOBALTYPES.STATUS_FORUM:
      return action.payload;
    default:
      return state;
  }
};
