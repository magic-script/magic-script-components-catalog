#!/bin/bash

projectDir=`pwd`
rm -rf "$projectDir/node_modules/react-native-magic-script"
rm "$projectDir/yarn.lock"
yarn
react-native run-android