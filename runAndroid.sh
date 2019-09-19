#!/bin/bash

projectDir=`pwd`
rm -rf "$projectDir/node_modules/magic-script-components-react-native"
rm "$projectDir/yarn.lock"
yarn
react-native run-android