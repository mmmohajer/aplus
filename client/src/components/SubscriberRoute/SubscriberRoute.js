import React, { useEffect, useState } from "react";
import cx from "classnames";
import { useSelector } from "react-redux";

import styles from "./SubscriberRoute.module.scss";

const SubscriberRoute = ({ children }) => {
  const profile = useSelector((state) => state.profile);
  const [isSubscriber, setIsSubscriber] = useState(true);

  useEffect(() => {
    if (profile?.user?.groups?.includes("Subscriber")) {
      setIsSubscriber(true);
    } else {
      setIsSubscriber(false);
    }
  }, [profile]);

  return <>{isSubscriber ? children : ""}</>;
};

export default SubscriberRoute;
