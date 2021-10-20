import React from 'react';

import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

import Header from 'app/components/Header';
import Footer from 'app/components/Footer';
import { PageWrapper, TableWrapper } from './components/styles';
import Form from './components/Form';
import DataTable from '../../components/DataTable';
import ToastMessage from './components/ToastMessage';

export function FormPage() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('formPage.title')}</title>
        <meta name="description" content={t('formPage.description')} />
      </Helmet>
      <Header />
      <PageWrapper>
        <Form />
        <TableWrapper>
          <DataTable isFormPage />
        </TableWrapper>
        <ToastMessage />
      </PageWrapper>
      <Footer />
    </>
  );
}
