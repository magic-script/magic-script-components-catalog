import 'magic-script-polyfills';
import { process, require } from './global-scope.js'
import React from 'react';
import mxs from 'magic-script-components';

import BrowserApp from '../src_mobile/browser_app';

mxs.bootstrap(<BrowserApp type='landscape' volumeSize={[1.0, 1.5, 0.5]} />);