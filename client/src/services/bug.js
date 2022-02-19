import axios from "axios";

import { getBugs as getBugsReducer } from "Reducers/bug";

export const getBugs = async (dispatch) => {
  try {
    const response = await axios.get("/api/test/");
    dispatch(getBugsReducer(response.data.data));
  } catch (err) {
    console.log(err);
  }
};
