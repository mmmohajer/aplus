import axios from "axios";

import { getBugs as getBugsReducer } from "Reducers/bug";
import { isLoading, isLoaded } from "Reducers/loading";

export const getBugs = async (dispatch) => {
  try {
    dispatch(isLoading());
    const response = await axios.get("/api/test/");
    if (response.data) {
      dispatch(getBugsReducer(response.data.data));
      dispatch(isLoaded());
    }
  } catch (err) {
    console.log(err);
    dispatch(isLoaded());
  }
};
