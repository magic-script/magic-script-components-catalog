import React from 'react';
import { MagicScript } from './proxy';
import BrowserApp from './src/browser_app';

MagicScript.registerApp('ARDemo', <BrowserApp />, false);
