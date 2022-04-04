import React, { useState, useEffect } from "react";
import cx from "classnames";
import { useSelector } from "react-redux";

import styles from "./AdminRoute.module.scss";

const AdminRoute = ({ children }) => {
  const profile = useSelector((state) => state.profile);
  const [isAdmin, setIsAdmin] = useState(true);

  useEffect(() => {
    if (profile?.user?.groups?.includes("Admin")) {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }, [profile]);

  return <>{isAdmin ? children : ""}</>;
};

export default AdminRoute;
