import React, { useEffect, useState } from "react";
import cx from "classnames";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Div, Paragraph } from "basedesign-iswad";

import styles from "./SubscriberRoute.module.scss";

const SubscriberRoute = ({ children }) => {
  const navigate = useNavigate();

  const profile = useSelector((state) => state.profile);
  const [isSubscriber, setIsSubscriber] = useState(true);
  const [time, setTime] = useState(5);
  let interval;

  useEffect(() => {
    if (profile?.user?.groups?.includes("Subscriber")) {
      setIsSubscriber(true);
    } else {
      setIsSubscriber(false);
    }
  }, [profile]);

  useEffect(() => {
    if (!isSubscriber) {
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
  }, [isSubscriber, time]);

  return (
    <>
      {isSubscriber ? (
        children
      ) : (
        <Div>
          <Paragraph> content of this page is private</Paragraph>
          <Paragraph>You will be redirected to home page in {time}s</Paragraph>
        </Div>
      )}
    </>
  );
};

export default SubscriberRoute;
