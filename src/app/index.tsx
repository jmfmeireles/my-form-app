/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';

import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { useInjectReducer } from 'utils/redux-injectors';
import { useTranslation } from 'react-i18next';
import { ThemeProvider as MaterialUiThemeProvider } from '@mui/material/styles';

import { GlobalStyle } from '../styles/global-styles';
import { materialUiTheme } from 'styles/theme/themes';
import { NotFoundPage } from './pages/NotFoundPage/Loadable';
import { sliceKey, reducer } from './slice';
import { FormPage } from './pages/FormPage/Loadable';
import { OldEntriesPage } from './pages/OldEntriesPage/Loadable';

export function App() {
  const { i18n, t } = useTranslation();
  useInjectReducer({ key: sliceKey, reducer: reducer });

  return (
    <MaterialUiThemeProvider theme={materialUiTheme}>
      <BrowserRouter>
        <Helmet
          titleTemplate="%s"
          defaultTitle={t('app.title')}
          htmlAttributes={{ lang: i18n.language }}
        >
          <meta name="description" content={t('app.description')} />
        </Helmet>

        <Switch>
          <Route
            exact
            path={process.env.PUBLIC_URL + '/'}
            component={FormPage}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + '/revisited'}
            component={OldEntriesPage}
          />
          <Route component={NotFoundPage} />
        </Switch>
        <GlobalStyle />
      </BrowserRouter>
    </MaterialUiThemeProvider>
  );
}
