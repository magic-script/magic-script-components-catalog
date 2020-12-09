source ./utils.sh

clean_screen

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

speak 'android build done'
