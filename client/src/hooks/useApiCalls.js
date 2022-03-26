import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

import { isLoading, isLoaded } from "Reducers/general/loading";

const useApiCalls = (sendReq, method, url, bodyData, headers) => {
  const dispatch = useDispatch();

  const [data, setData] = useState();
  const [error, setError] = useState();

  useEffect(async () => {
    if (sendReq) {
      try {
        let res;
        dispatch(isLoading());
        if (method.toLowerCase() === "get") {
          res = await axios.get(url, headers && { headers });
        } else if (method.toLowerCase() === "post") {
          res = await axios.post(
            url,
            bodyData && bodyData,
            headers && { headers }
          );
        } else if (method.toLowerCase() === "put") {
          res = await axios.put(
            url,
            bodyData && bodyData,
            headers && { headers }
          );
        } else if (method.toLowerCase() === "patch") {
          res = await axios.patch(
            url,
            bodyData && bodyData,
            headers && { headers }
          );
        } else if (method.toLowerCase() === "delete") {
          res = await axios.delete(
            url,
            bodyData && bodyData,
            headers && { headers }
          );
        }
        if (res?.data) {
          setData(res.data);
        }
        dispatch(isLoaded());
      } catch (err) {
        console.log(err);
        setError(err);
        dispatch(isLoaded());
      }
    }
  }, [sendReq]);
  return { data, error };
};

export default useApiCalls;
