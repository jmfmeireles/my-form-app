/**
 * Asynchronously loads the component for HomePage
 */

import * as React from 'react';
import { lazyLoad } from 'utils/loadable';
import { LoadingIndicator } from 'app/components/LoadingIndicator';
import { requireAuthentication } from 'app/components/requireAuthentication';

export const OldEntriesPage = lazyLoad(
  () => import('./index'),
  module => requireAuthentication(module.OldEntriesPage),
  {
    fallback: <LoadingIndicator />,
  },
);
