import { CLASSROOM_TYPES } from '../types/classroomTypes';
import { EditData } from '../types/globalTypes';

const detailClassroomReducer = (state = [], action) => {
  switch (action.type) {
    case CLASSROOM_TYPES.GET_CLASSROOM:
      return [...state, action.payload];
    case CLASSROOM_TYPES.UPDATE_CLASSROOM:
      return EditData(state, action.payload._id, action.payload);
    default:
      return state;
  }
};

export default detailClassroomReducer;
