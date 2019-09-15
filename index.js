import React from 'react';
import { MagicScript } from './proxy_mobile';
import CatalogApp from './src_app/catalog_app';

MagicScript.registerApp('Catalog', <CatalogApp />, false);
