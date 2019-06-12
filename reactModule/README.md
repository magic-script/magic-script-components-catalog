
# react-native-ar-library

## Getting started

`$ npm install react-native-ar-library --save`

### Mostly automatic installation

`$ react-native link react-native-ar-library`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-ar-library` and add `RNArLibrary.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNArLibrary.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNArLibraryPackage;` to the imports at the top of the file
  - Add `new RNArLibraryPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-ar-library'
  	project(':react-native-ar-library').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-ar-library/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-ar-library')
  	```

#### Windows
[Read it! :D](https://github.com/ReactWindows/react-native)

1. In Visual Studio add the `RNArLibrary.sln` in `node_modules/react-native-ar-library/windows/RNArLibrary.sln` folder to their solution, reference from their app.
2. Open up your `MainPage.cs` app
  - Add `using Ar.Library.RNArLibrary;` to the usings at the top of the file
  - Add `new RNArLibraryPackage()` to the `List<IReactPackage>` returned by the `Packages` method


## Usage
```javascript
import RNArLibrary from 'react-native-ar-library';

// TODO: What to do with the module?
RNArLibrary;
```
  