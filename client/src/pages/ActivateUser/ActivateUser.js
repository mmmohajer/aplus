import React, { useState, useEffect } from "react";
import cx from "classnames";

import PublicRoute from "Components/PublicRoute";
import ActivateUserComponent from "Components/ActivateUser";

import styles from "./ActivateUser.module.scss";

const ActivateUser = () => {
  return (
    <PublicRoute>
      <ActivateUserComponent />
    </PublicRoute>
  );
};

export default ActivateUser;
