import { getBugs as getBugsReducer } from "Reducers/apiCalls/bugs";

export const getBugs = (dispatch, data) => {
  dispatch(getBugsReducer(data));
};
