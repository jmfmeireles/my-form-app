import React from 'react';

import { Avatar } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { LanguagesWrapper, LanguageOption } from './styles';
import { translationsJson } from 'locales/i18n';

export default function LanguageSwitcher() {
  const { t, i18n } = useTranslation();
  const handleLanguageChange = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
  };
  return (
    <LanguagesWrapper>
      {Object.keys(translationsJson).map(key => (
        <LanguageOption
          key={key}
          label={t(`i18nFeature.${key}`)}
          avatar={<Avatar>{key}</Avatar>}
          onClick={() => handleLanguageChange(key)}
          variant={i18n.language === key ? 'filled' : 'outlined'}
        />
      ))}
    </LanguagesWrapper>
  );
}
