#!/bin/bash

projectDir=`pwd`

echo "run android..."
react-native run-android --no-jetifier &
androidPID=$!

# Killing hanging node.exe processes that can hog resources.
echo "kill node.exe..."
taskkill /IM node.exe /T /F > /dev/null &

# Build folders can be left with wrong permissions after previous build.
echo "set write permissions for build directory..."
chmod 777 -R "$projectDir/android/app/build" &

echo "copy android source..."
androidSrc="$projectDir/../magic-script-components-react-native/android/src"
androidDst="$projectDir/node_modules/magic-script-components-react-native/android/"
rm -rf "$androidDst/src" &&
cp -rf "$androidSrc" "$androidDst" &

echo "copy component source..."
componentsSrc="$projectDir/../magic-script-components-react-native/components"
componentsDst="$projectDir/node_modules/magic-script-components-react-native/"
rm -rf "$componentsDst/components" &&
cp -rf "$componentsSrc" "$componentsDst" &

# Killing com.catalog app before running 'react-native run-android'
# reduces build time by several seconds.
echo "kill com.catalog app..." 
adb shell am force-stop com.catalog &

# Running jetifier in parallel to 'react-native run-android' 
# to save some time. Hopefully it'll jetify all files in time...
echo "start jetifier..."
npx jetify > /dev/null &

# Starting metro bundler asynchronously, so it can 
# load dependency tree while 'react-native run-android' 
# is running, saving some time.
echo "start metro bundler..."
react-native start > /dev/null &

wait $androidPID