import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

import { getLocalStorage } from "Utils/auth";
import { TOKEN_SPACE_WORD } from "Constants/vars";
import { isLoading, isLoaded } from "Reducers/general/loading";
import { showErrorAPIAlert } from "Utils/notifications";

const useApiCalls = ({
  sendReq,
  setSendReq,
  method,
  url,
  bodyData,
  headers,
  useDefaultHeaders = true,
  showLoading = false,
  showErrorMessage = true,
}) => {
  const dispatch = useDispatch();

  const [data, setData] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const sendRequest = async () => {
      if (Boolean(parseInt(process.env.WITHOUT_DOCKER))) {
        url = `${process.env.API_BASE_URL_WITHOUT_DOCKER}${url}`;
      }

      const accessToken = getLocalStorage("access_token");
      if (useDefaultHeaders && accessToken) {
        if (!headers) {
          headers = { Authorization: `${TOKEN_SPACE_WORD} ${accessToken}` };
        } else {
          headers["Authorization"] = `${TOKEN_SPACE_WORD} ${accessToken}`;
        }
      }
      try {
        let res;
        if (showLoading) {
          dispatch(isLoading());
        }
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
        setError(err.response);
        dispatch(isLoaded());
        if (showErrorMessage) {
          showErrorAPIAlert(err.response, dispatch);
        }
      }
      setSendReq(false);
    };
    if (sendReq) {
      sendRequest();
    }
  }, [sendReq]);
  return { data, error };
};

export default useApiCalls;
