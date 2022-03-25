import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import cx from "classnames";

import styles from "./Home.module.scss";
import { getBugs } from "Services/bugs";
import { addAlertItem } from "Utils/notifications";

function Home() {
  const bugs = useSelector((state) => state.bugs);
  const dispatch = useDispatch();

  useEffect(() => {
    addAlertItem(dispatch, "This is first notification", "success");
    addAlertItem(dispatch, "This is second notification", "error");
    addAlertItem(dispatch, "This is third notification", "danger");
  }, []);
  return (
    <>
      <div>
        <p>This is the homepage for your new app!</p>
        <p>Test env var {process.env.TEST}</p>
        <button onClick={() => getBugs(dispatch)}>Get Bugs</button>
      </div>
      <div className="footer">Footer</div>
    </>
  );
}

export default Home;
