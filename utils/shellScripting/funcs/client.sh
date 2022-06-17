createReactComponent() {
    local compName=$(readData "What is the component name?")
    
    compName="$(tr '[:lower:]' '[:upper:]' <<< ${compName:0:1})${compName:1}"
    local addr="client/src/components/$compName"
    local testFolderAddr="client/src/components/$compName/__test__"
    mkdir -p "$addr"
    mkdir -p "$testFolderAddr"
    
    local jsContext=$(getJsContext $compName)
    local indexContext="export { default } from \"./$compName\";"
    local testFileContext=$(getTestFileContext $compName)
    
    local innerJsFileAddr="client/src/components/$compName/$compName.js"
    local innerIndexFileAddr="client/src/components/$compName/index.js"
    local innersassFileAddr="client/src/components/$compName/$compName.module.scss"
    local innerTestFileAddr="client/src/components/$compName/__test__/$compName.test.js"
    
    echo "$jsContext" >> $innerJsFileAddr
    echo "$indexContext" >> "$innerIndexFileAddr"
    echo "$testFileContext" >> $innerTestFileAddr
    touch "$innersassFileAddr"
    
    echo "Done!"
    
    return 0
}

createReactBaseComponent() {
    local compName=$(readData "What is the component name?")
    
    compName="$(tr '[:lower:]' '[:upper:]' <<< ${compName:0:1})${compName:1}"
    local addr="client/src/baseComponents/$compName"
    local testFolderAddr="client/src/baseComponents/$compName/__test__"
    mkdir -p "$addr"
    mkdir -p "$testFolderAddr"
    
    local jsContext=$(getJsContext $compName)
    local indexContext="export { default } from \"./$compName\";"
    local testFileContext=$(getTestFileContext $compName)
    
    local innerJsFileAddr="client/src/baseComponents/$compName/$compName.js"
    local innerIndexFileAddr="client/src/baseComponents/$compName/index.js"
    local innersassFileAddr="client/src/baseComponents/$compName/$compName.module.scss"
    local innerTestFileAddr="client/src/baseComponents/$compName/__test__/$compName.test.js"
    
    echo "$jsContext" >> $innerJsFileAddr
    echo "$indexContext" >> "$innerIndexFileAddr"
    echo "$testFileContext" >> $innerTestFileAddr
    touch "$innersassFileAddr"
    
    echo "Done!"
    
    return 0
}

createReactPage() {
    local pageName=$(readData "What is the page name?")
    local pageUrl=$(readData "What is the page url?")
    
    pageName="$(tr '[:lower:]' '[:upper:]' <<< ${pageName:0:1})${pageName:1}"
    local addr="client/src/pages/$pageName"
    local testFolderAddr="client/src/pages/$pageName/__test__"
    mkdir -p "$addr"
    mkdir -p "$testFolderAddr"
    
    local jsContext=$(getJsPageContext $pageName)
    local indexContext="export { default } from \"./$pageName\";"
    local testFileContext=$(getTestFileContext $pageName)
    
    local innerJsFileAddr="client/src/pages/$pageName/$pageName.js"
    local innerIndexFileAddr="client/src/pages/$pageName/index.js"
    local innersassFileAddr="client/src/pages/$pageName/$pageName.module.scss"
    local innerTestFileAddr="client/src/pages/$pageName/__test__/$pageName.test.js"
    
    echo "$jsContext" >> $innerJsFileAddr
    echo "$indexContext" >> "$innerIndexFileAddr"
    echo "$testFileContext" >> $innerTestFileAddr
    touch "$innersassFileAddr"
    
    echo -en "${I_YELLOW}"
    echo "Do not forget to add the follwoings to the AppRoutes.js file:"
    echo -en "${I_GREEN}"
    echo "<Route path=\"/$pageUrl\" element={<$pageName />}></Route>"
    echo -en "${DEFAULT_COLOR}"
    
    return 0
}

buildClient() {
    local versioningOptions=("patch" "minor" "major" "none")
    local changeVersion=$(readData "How would you like to change your versioning(patch|minor|major:none)?")
    if [[ ${versioningOptions[*]} =~ $changeVersion ]]
    then
        [ $changeVersion == "patch" ] && cd client && npm run build-patch && cd ..
        [ $changeVersion == "minor" ] && cd client && npm run build-minor && cd ..
        [ $changeVersion == "major" ] && cd client && npm run build-major && cd ..
        [ $changeVersion == "none" ] && cd client && npm run build && cd ..
    else
        buildClient
    fi
}