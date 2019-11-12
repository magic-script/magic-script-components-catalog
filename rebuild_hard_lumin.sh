printf "\033c"

echo "1. Updating .babelrc for ML1..."
babelrcPath=".babelrc"
babelrcPluginName="        \"@babel\/plugin-proposal-class-properties\""
sed -i '' "5 s/.*/$babelrcPluginName/" $babelrcPath

echo "2. Updating babel.config.js for ML1..."
babelConfigPath="babel.config.js"
babelConfigExportName="  \/\/ presets: ['module:metro-react-native-babel-preset'],"
sed -i '' "2 s/.*/$babelConfigExportName/" $babelConfigPath

echo "3. removing .out..."
rm -fr .out
echo "4. removing bin..."
rm -fr bin
echo "5. building app..."
magic-script build
magic-script install
magic-script run

say -v Melina done
