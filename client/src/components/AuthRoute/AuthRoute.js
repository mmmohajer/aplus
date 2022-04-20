import React, { useState, useEffect } from "react";
import cx from "classnames";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Div, Paragraph } from "basedesign-iswad";

import styles from "./AuthRoute.module.scss";

const AuthRoute = ({ children }) => {
  const navigate = useNavigate();

  const isAuthenticated = useSelector((state) => state.isAuthenticated);

  const [time, setTime] = useState(5);

  useEffect(() => {
    if (!isAuthenticated) {
      let currentTime = time;
      if (time > 0) {
        setTimeout(() => {
          currentTime -= 1;
          setTime(currentTime);
        }, 1000);
      }
      if (time === 0) {
        navigate("/");
      }
    }
  }, [isAuthenticated, time]);

  return (
    <>
      {isAuthenticated ? (
        children
      ) : (
        <Div>
          <Paragraph> The content of this page is private</Paragraph>
          <Paragraph>You will be redirected to home page in {time}s</Paragraph>
        </Div>
      )}
    </>
  );
};

export default AuthRoute;
