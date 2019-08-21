# ARDemo project

This is a test project used for testing and development of [`react-native-magic-script`](https://github.com/magic-script/react-native-magic-script) module.

## Prerequisites

1. In order to run this project, you need to have React Native installed. Please follow [this link](https://facebook.github.io/react-native/docs/getting-started.html) to install React Native on your machine.

2. Make sure you have the [`react-native-magic-script`](https://github.com/magic-script/react-native-magic-script) module cloned to the same folder as this repo. Right now the `react-native-magic-script` module is locally linked with this project (see the value of `dependencies/react-native-magic-script` in `package.json` file).

3. Install the required packages.

     - Call either `npm install` or `yarn` from the main app folder.
     - NOTE: If, after run `npm install` the project does not build, please use `yarn` instead.

## Running the demo app (iOS)

1. Run iOS project in Xcode:

     - Open iOS project at `./ios/Catalog.xcworkspace` in Xcode.
     - Select **Catalog** as the active scheme. 
     -- NOTE: By default, the app compiles in debug mode. Debug mode requires the Metro Boundler to run during the app run. That means you need to have your device plugged in to your computer all the time. If you want your app to run as a standalone app, run it in release mode. You can change the mode under **Edit Scheme.../Run/Build Configuration**.
     - Run the app by pressing `Cmd+Shift+R` or by pressing the `Build and run` button.
     - If the app does not build (you get multiple errors) then press the `Build and run` button again. ¯\\_(ツ)\_/¯
     ![Build and run](docs/set_active_scheme.jpg)

2. Run **Metro Bundler** (unless it runs automatically):

     - From the app folder run: `react-native start`.

3. In the iOS simulator press `Cmd+R` to reload the app. For the device, you need to shake the device and select **Reload** to reload the app.

## Running the demo app (Android)

 Open a console and go to the project directory, then give the commands:
- `yarn`
- `react-native run-android`

In case of build problems do the following:
- remove the `react-native-magic-script` directory from `node_modules`,
- remove the `yarn.lock` file from the project directory,
- give the `yarn` and `react-native run-android` commands

or use the script:

**For Windows (save as .bat file for Windows)**

    set projectDir={path to magic-script-components-catalog folder}
    rd /s /q %projectDir%\node_modules\react-native-magic-script
    del /f %projectDir%\yarn.lock
    start cmd /k "cd /d %projectDir% & yarn & react-native run-android"

**For macOS (save as .sh file, make sure the file is in the project directory)**

     #!/bin/bash
     
     projectDir=`pwd`
     rm -rf "$projectDir/node_modules/react-native-magic-script"
     rm "$projectDir/yarn.lock"
     yarn
     react-native run-android

Or simply run from terminal while in the main directory: **./runAndroid.sh** 

*If the build still fails, remove the `build` directories from this project (`android/build` and `android/app/build`), as well as from the `react-native-magic-script/android`.
