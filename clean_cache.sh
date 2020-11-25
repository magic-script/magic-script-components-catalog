printf "\033c"

echo "1. cleaning local cache..."
rm -fr reactnative/ios/Pods
rm -fr reactnative/ios/Podfile.lock
rm -fr reactnative/ios/*.xcworkspace
rm -fr reactnative/node_modules
rm -fr reactnative/package-lock.json
rm -fr reactnative/yarn.lock

echo "2. cleaning watchman cache..."
watchman watch-del-all

echo "3. cleaning global cache..."
rm -rf ~/Library/Developer/Xcode/DerivedData
rm -rf $TMPDIR/react-native-packager-cache-*
rm -rf $TMPDIR/metro-bundler-cache-*
rm -rf $TMPDIR/react-*
rm -rf node_modules/

echo "4. verifying cache..."
npm cache verify

say -v Melina "clean cache done"
