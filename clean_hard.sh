printf "\033c"

echo "1. cleaning root folder..."
rm -fr node_modules
rm -fr package-lock.json

echo "2. cleaning lumin folder..."
rm -fr lumin/.out
rm -fr lumin/bin
rm -fr lumin/node_modules
rm -fr lumin/package-lock.json

echo "3. cleaning reactnative folder..."
rm -fr reactnative/ios/Pods
rm -fr reactnative/ios/Podfile.lock
rm -fr reactnative/ios/*.xcworkspace
rm -fr reactnative/node_modules
rm -fr reactnative/package-lock.json

say -v Melina "clean done"
