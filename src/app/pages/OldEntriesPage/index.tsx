import React, { useEffect } from 'react';

import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import Header from 'app/components/Header';
import Footer from 'app/components/Footer';
import DataTable from 'app/components/DataTable';
import { actions as formDataActions } from '../../slice';

export function OldEntriesPage() {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(formDataActions.getRecordsFromSessionStorage());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>{t('formPage.title')}</title>
        <meta name="description" content={t('formPage.description')} />
      </Helmet>
      <Header />
      <DataTable />
      <Footer />
    </>
  );
}
