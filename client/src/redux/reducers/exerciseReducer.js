import { EXERCISE_TYPES } from '../types/exerciseTypes';
import { EditData, DeleteData } from '../types/globalTypes';

const initialState = {
  loading: false,
  exercises: [],
  result: 0,
  page: 2,
};

const exerciseReducer = (state = initialState, action) => {
  switch (action.type) {
    case EXERCISE_TYPES.CREATE_EXERCISE:
      return {
        ...state,
        exercises: [action.payload, ...state.exercises],
      };
    case EXERCISE_TYPES.LOADING_EXERCISE:
      return {
        ...state,
        loading: action.payload,
      };
    case EXERCISE_TYPES.GET_EXERCISES:
      return {
        ...state,
        exercises: action.payload.exercises,
        result: action.payload.result,
        page: action.payload.page,
      };
    case EXERCISE_TYPES.UPDATE_EXERCISE:
      return {
        ...state,
        exercises: EditData(
          state.exercises,
          action.payload._id,
          action.payload,
        ),
      };
    case EXERCISE_TYPES.DELETE_EXERCISE:
      return {
        ...state,
        exercises: DeleteData(state.exercises, action.payload._id),
      };
    default:
      return state;
  }
};

export default exerciseReducer;
