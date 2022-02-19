import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import cx from "classnames";

import styles from "./Home.module.scss";
import { getBugs } from "Services/bugs";
import {
  addNotification,
  removeNotification,
  clearNotifications,
} from "Reducers/general/notifications";
import { generateKey } from "Utils/helpers";

function Home() {
  const bugs = useSelector((state) => state.bugs);
  const dispatch = useDispatch();

  useEffect(() => {
    const key1 = generateKey();
    dispatch(
      addNotification({ key: key1, message: "This is first notification" })
    );
    dispatch(
      addNotification({
        key: generateKey(),
        message: "This is second notification",
      })
    );
    dispatch(
      addNotification({
        key: generateKey(),
        message: "This is third notification",
      })
    );
    dispatch(removeNotification({ key: key1 }));
    dispatch(clearNotifications());
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
