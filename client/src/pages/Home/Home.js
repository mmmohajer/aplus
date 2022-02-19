import React from "react";
import { useSelector, useDispatch } from "react-redux";
import cx from "classnames";

import styles from "./Home.module.scss";
import { getBugs } from "Services/bug";

function Home() {
  const bug = useSelector((state) => state.bug);
  const dispatch = useDispatch();
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
