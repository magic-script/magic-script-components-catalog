printf "\033c"

echo "1. Removing DerivedData..."
rm -fr ~/Library/Developer/Xcode/DerivedData/*
echo "2. Removing node_modules..."
rm -fr node_modules
echo "3. Removing Pods and Podfile.lock..."
rm -fr ios/Pods
rm -fr ios/Podfile.lock
echo "4. Removing yarn.lock..."
rm -fr yarn.lock
echo "5. Installing..."
yarn
say -v Melina done
