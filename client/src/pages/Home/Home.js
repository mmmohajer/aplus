import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import cx from "classnames";
import { Div, Paragraph } from "basedesign-iswad";

import { addAlertItem } from "Utils/notifications";
import PublicRoute from "Components/PublicRoute";

import styles from "./Home.module.scss";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    addAlertItem(dispatch, "This is first notification", "success");
    addAlertItem(dispatch, "This is second notification", "error");
    addAlertItem(dispatch, "This is third notification", "danger");
  }, []);

  return (
    <PublicRoute>
      <Div>
        <Paragraph>This is the homepage for your new app!</Paragraph>
        <Paragraph>Test env var {process.env.TEST}</Paragraph>
      </Div>
      <Div className="footer">Footer</Div>
    </PublicRoute>
  );
}

export default Home;
