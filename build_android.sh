printf "\033c"

echo "building app..."
npm install

cd reactnative
npm install
# react-native run-android
# cd ../

cd android
./gradlew clean
./gradlew assembleDebug
# ./gradlew assembleRelease
cd ../../

say -v Melina 'android build done'
