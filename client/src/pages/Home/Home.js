import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import cx from "classnames";

import styles from "./Home.module.scss";

import { getBugs } from "Services/bugs";
import { addAlertItem } from "Utils/notifications";
import useApiCalls from "Hooks/useApiCalls";

function Home() {
  const bugs = useSelector((state) => state.bugs);
  const dispatch = useDispatch();

  const [sendBugReq, setSendBugReq] = useState(false);

  useEffect(() => {
    addAlertItem(dispatch, "This is first notification", "success");
    addAlertItem(dispatch, "This is second notification", "error");
    addAlertItem(dispatch, "This is third notification", "danger");
  }, []);

  const { data, error } = useApiCalls(sendBugReq, "GET", "/api/test/");

  useEffect(() => {
    if (data) {
      getBugs(dispatch, data.data);
    }
  }, [data]);

  return (
    <>
      <div>
        <p>This is the homepage for your new app!</p>
        <p>Test env var {process.env.TEST}</p>
        <button onClick={() => setSendBugReq(true)}>Get Bugs</button>
      </div>
      <div className="footer">Footer</div>
    </>
  );
}

export default Home;
