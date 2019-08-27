printf "\033c"

rm -fr ~/Library/Developer/Xcode/DerivedData/*
echo "DerivedData removed"
rm -fr node_modules
echo "mode_modules removed"
rm -fr ios/Pods
rm -fr ios/Podfile.lock
echo "Pods and Podfile.lock removed"
rm -fr yarn.lock
echo "yarn.lock removed"
yarn
echo "yarn done"
say -v Melina done
