import React, { useState, useEffect } from "react";
import cx from "classnames";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Div, Paragraph } from "basedesign-iswad";

import styles from "./AdminRoute.module.scss";

const AdminRoute = ({ children }) => {
  const navigate = useNavigate();

  const profile = useSelector((state) => state.profile);
  const [isAdmin, setIsAdmin] = useState(true);
  const [time, setTime] = useState(5);
  let interval;

  useEffect(() => {
    if (profile?.user?.groups?.includes("Admin")) {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }, [profile]);

  useEffect(() => {
    if (!isAdmin) {
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
  }, [isAdmin, time]);

  return (
    <>
      {isAdmin ? (
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

export default AdminRoute;
