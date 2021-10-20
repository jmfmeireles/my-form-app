import * as React from 'react';

import { Wrapper } from './styles';
import AppNameAndDescription from './AppNameAndDescription';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  return (
    <Wrapper>
      <AppNameAndDescription />
      <LanguageSwitcher />
    </Wrapper>
  );
}
