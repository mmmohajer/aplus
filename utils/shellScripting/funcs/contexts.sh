getJsContext() {
    local compName=$1
    compName="$(tr '[:lower:]' '[:upper:]' <<< ${compName:0:1})${compName:1}"

    local jsContext="""import React from \"react\";
import cx from \"classnames\";

import styles from \"./$compName.module.scss\";

const $compName = () => {
  return (
    <>
      <div>$compName</div>
    </>
  );
};

export default $compName;
"""
    echo "$jsContext"
}

getAppsContext() {
local appName=$1

echo """from django.apps import AppConfig


class AppConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = '$appName'
"""
}

getUrlsContext() {
echo """from django.urls import path, include
from rest_framework import routers
"""
}

