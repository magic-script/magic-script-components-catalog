printf "\033c"

echo "1. Updating .babelrc for iOS..."
babelrcPath=".babelrc"
babelrcPluginName="        \/\/ \"@babel\/plugin-proposal-class-properties\""
sed -i '' "5 s/.*/$babelrcPluginName/" $babelrcPath

echo "2. Updating babel.config.js for iOS..."
babelConfigPath="babel.config.js"
babelConfigExportName="  presets: ['module:metro-react-native-babel-preset'],"
sed -i '' "2 s/.*/$babelConfigExportName/" $babelConfigPath

echo "3. Removing DerivedData..."
rm -fr ~/Library/Developer/Xcode/DerivedData/*
echo "4. Removing node_modules..."
rm -fr node_modules
echo "5. Removing Pods and Podfile.lock..."
rm -fr ios/Pods
rm -fr ios/Podfile.lock
rm -fr ios/*.xcworkspace
echo "6. Removing remote assets..."
rm -fr assets/fonts
rm -fr assets/lumin_system_icons
echo "7. Removing yarn.lock..."
rm -fr yarn.lock
echo "8. Installing..."
yarn
echo "9. Linking..."
react-native link
say -v Melina done
