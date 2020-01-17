import 'magic-script-polyfills';
import { process, require } from './global-scope.js'
import React from 'react';
import mxs from 'magic-script-components-lumin';
import { Platform } from 'magic-script-components';

import CatalogApp from '../src_app/catalog_app';

Platform.setNativeModule(new mxs.PlatformInformation());
mxs.bootstrap(<CatalogApp type='landscape' volumeSize={[1.0, 1.5, 0.5]} />);