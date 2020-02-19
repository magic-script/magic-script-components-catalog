// Add support for things like setTimeout, setInterval and fetch.
// Simply importing this sets all these as global definitions.
// They are declared in the .eslintrc so your editor won't complain.
import "magic-script-polyfills";
import process from "./global-scope.js";
import React from "react";
import mxs from "magic-script-components-lumin";

// Load main app logic from the app class.
import CatalogApp from './app';

mxs.bootstrap(<CatalogApp type='landscape' volumeSize={[1.0, 1.5, 0.5]} />);
