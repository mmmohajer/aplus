import React, { useState, useEffect } from "react";
import cx from "classnames";
import { Div } from "basedesign-iswad";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import useApiCalls from "Hooks/useApiCalls";
import { GOOGLE_AUTH_URL } from "Constants/vars";
import {
  GOOGLE_AUTH_TOKEN_API_ROUTE,
  GOOGLE_AUTH_HANDLE_TOKEN_API_ROUTE,
} from "Constants/apiRoutes";
import { loginUser } from "Utils/auth";

import styles from "./GoogleAuth.module.scss";

const GoogleAuth = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  const [code, setCode] = useState("");
  const [sendGoogleAuthReq, setSendGoogleAuthReq] = useState(false);
  const [sendGetProfileReq, setSendGetProfileReq] = useState(false);
  const [accessToken, setAccessToken] = useState("");
  const [tokenId, setTokenId] = useState("");

  useEffect(() => {
    if (searchParams?.get("code")) {
      setCode(searchParams.get("code"));
    }
  }, [searchParams]);

  const bodyData = { code };

  const { data, error } = useApiCalls({
    sendReq: sendGoogleAuthReq,
    setSendReq: setSendGoogleAuthReq,
    method: "POST",
    url: GOOGLE_AUTH_TOKEN_API_ROUTE,
    bodyData,
  });

  useEffect(() => {
    if (code) {
      setSendGoogleAuthReq(true);
    }
  }, [code]);

  useEffect(() => {
    if (data) {
      setAccessToken(data["Authorization Data"]["access_token"]);
      setTokenId(data["Authorization Data"]["id_token"]);
    }
  }, [data]);

  const bodyProfileData = { access_token: accessToken, id_token: tokenId };

  const { data: profileData, error: profileError } = useApiCalls({
    sendReq: sendGetProfileReq,
    setSendReq: setSendGetProfileReq,
    method: "POST",
    url: GOOGLE_AUTH_HANDLE_TOKEN_API_ROUTE,
    bodyData: bodyProfileData,
  });

  useEffect(() => {
    if (accessToken.length && tokenId.length) {
      setSendGetProfileReq(true);
    }
  }, [accessToken, tokenId]);

  useEffect(() => {
    if (profileData) {
      loginUser(profileData["access"], profileData["refresh"], dispatch);
    }
  }, [profileData]);

  return (
    <>
      <Div>
        <a href={`${GOOGLE_AUTH_URL}`}>Continue With Google</a>
      </Div>
    </>
  );
};

export default GoogleAuth;
