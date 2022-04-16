import React, { useState, useLayoutEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { getLocalStorage, setLocalStorage } from "Utils/auth";
import { authenticated, notAuthenticated } from "Services/auth";
import { getProfile } from "Services/profile";
import useApiCalls from "Hooks/useApiCalls";
import { ACCESS_TOKEN_CHEANGE_TIME } from "Constants/vars";
import {
  REFRESH_TOKEN_API_ROUTE,
  MY_PROFILE_API_ROUTE,
} from "Constants/apiRoutes";

import AppRoutes from "./AppRoutes";
import Loading from "Components/Loading";
import Alert from "Components/Alert";

function App() {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.loading);
  const isAuthenticated = useSelector((state) => state.isAuthenticated);

  const [accessToken, setAccessToken] = useState(
    getLocalStorage("access_token")
  );
  const [refreshToken, setRefreshToken] = useState(
    getLocalStorage("refresh_token")
  );
  const [sendGetCurUserReq, setSendGetCurUserReq] = useState(false);
  const [sendrefreshTokenReq, setSendRefreshTokenReq] = useState(false);

  const { data: refreshData, error: refreshError } = useApiCalls({
    sendReq: sendrefreshTokenReq,
    setSendReq: setSendRefreshTokenReq,
    method: "POST",
    url: REFRESH_TOKEN_API_ROUTE,
    bodyData: { refresh: refreshToken },
    showLoading: false,
    showErrorMessage: false,
  });

  const { data: profileData, error: profileError } = useApiCalls({
    sendReq: sendGetCurUserReq,
    setSendReq: setSendGetCurUserReq,
    method: "GET",
    url: MY_PROFILE_API_ROUTE,
  });

  useLayoutEffect(() => {
    if (accessToken) {
      authenticated(dispatch);
    } else {
      notAuthenticated(dispatch);
    }
  }, []);

  useLayoutEffect(() => {
    if (isAuthenticated) {
      setAccessToken(getLocalStorage("access_token"));
      setRefreshToken(getLocalStorage("refresh_token"));
      setSendGetCurUserReq(true);
      setInterval(() => {
        setSendRefreshTokenReq(true);
        setSendRefreshTokenReq(false);
      }, ACCESS_TOKEN_CHEANGE_TIME);
    }
  }, [isAuthenticated]);

  useLayoutEffect(() => {
    if (profileData) {
      getProfile(dispatch, profileData);
    }
  }, [profileData]);

  useLayoutEffect(() => {
    if (refreshData) {
      setLocalStorage("access_token", refreshData["access"]);
    }
  }, [refreshData]);

  return (
    <BrowserRouter>
      {loading && <Loading />}
      <Alert />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
