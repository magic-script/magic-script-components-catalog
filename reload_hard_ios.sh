printf "\033c"

echo "1. Removing DerivedData..."
rm -fr ~/Library/Developer/Xcode/DerivedData/*
echo "2. Removing node_modules..."
rm -fr node_modules
echo "3. Removing Pods and Podfile.lock..."
rm -fr ios/Pods
rm -fr ios/Podfile.lock
rm -fr ios/*.xcworkspace
echo "4. Removing remote assets..."
rm -fr assets/fonts
rm -fr assets/lumin_system_icons
echo "5. Removing yarn.lock..."
rm -fr yarn.lock
echo "6. Installing..."
yarn
echo "7. Linking..."
react-native link
say -v Melina done
