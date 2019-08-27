printf "\033c"

rm -fr ~/Library/Developer/Xcode/DerivedData/*
echo "1. DerivedData removed"
rm -fr node_modules
echo "2. node_modules removed"
rm -fr ios/Pods
rm -fr ios/Podfile.lock
echo "3. Pods and Podfile.lock removed"
rm -fr yarn.lock
echo "4. yarn.lock removed"
echo "5. Installing..."
yarn
say -v Melina done
