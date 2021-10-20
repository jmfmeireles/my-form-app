import * as React from 'react';

import { useTranslation } from 'react-i18next';

import { AppNameAndDescriptionWrapper, Title, Description } from './styles';

export default function AppNameAndDescription() {
  const { t } = useTranslation();

  return (
    <AppNameAndDescriptionWrapper>
      <Title>{t('app.title')}</Title>
      <Description>{t('app.description')}</Description>
    </AppNameAndDescriptionWrapper>
  );
}
