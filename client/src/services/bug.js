import axios from "axios";

import { getBugs as getBugsReducer } from "Reducers/bug";

export const getBugs = async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:9001/api/bugs");
    dispatch(getBugsReducer(response.data));
  } catch (err) {
    console.log(err);
  }
};
