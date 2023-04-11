import { GLOBALTYPES } from '../types/globalTypes';

const statusExerciseReducer = (state = false, action) => {
  switch (action.type) {
    case GLOBALTYPES.STATUS_EXERCISE:
    case GLOBALTYPES.STATUS_EXERCISE:
      return action.payload;
    default:
      return state;
  }
};

export default statusExerciseReducer;
