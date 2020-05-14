// Add support for things like setTimeout, setInterval and fetch.
// Simply importing this sets all these as global definitions.
// They are declared in the .eslintrc so your editor won't complain.
import "magic-script-polyfills";
import process from "./global-scope.js";
import React from "react";
import { FileSystem, PlaneDetector, Platform } from 'magic-script-components';
import mxs from "magic-script-components-lumin";

// Load main app logic from the app class.
import CatalogApp from '../../src/app';

Platform.setPlatformInformation(new mxs.PlatformInformation());
Platform.setLinking(new mxs.NativeLinking());
PlaneDetector.setNativePlaneDetector(new mxs.NativePlaneDetector());
FileSystem.setNativeFileSystem(new mxs.NativeFileSystem());
mxs.bootstrap(<CatalogApp type='landscape' volumeSize={[1.0, 1.5, 0.5]} />);
