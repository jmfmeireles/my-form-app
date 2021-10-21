import React from 'react';

import { Button } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { ButtonWrapper } from './styles';

export default function ViewMore() {
  const history = useHistory();
  const { t } = useTranslation();

  const navigateToAllEntriesPage = () => history.push('revisited');

  return (
    <ButtonWrapper>
      <Button variant="outlined" onClick={navigateToAllEntriesPage}>
        {t('formPage.viewAllEntries')}
      </Button>
    </ButtonWrapper>
  );
}
