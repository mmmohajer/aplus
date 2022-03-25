#!/bin/bash

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

createReactComponent() {
    local compName=$1
    
    compName="$(tr '[:lower:]' '[:upper:]' <<< ${compName:0:1})${compName:1}"
    local addr="client/src/components/$compName"
    mkdir -p "$addr"
    
    local jsContext=$(getJsContext $compName)
    local indexContext="export { default } from \"./$compName\";"
    
    local innerJsFileAddr="client/src/components/$compName/$compName.js"
    local innerIndexFileAddr="client/src/components/$compName/index.js"
    local innersassFileAddr="client/src/components/$compName/$compName.module.scss"
    
    echo "$jsContext" >> $innerJsFileAddr
    echo "$indexContext" >> "$innerIndexFileAddr"
    touch "$innersassFileAddr"
    
    echo "Done!"
    
    return 0
}