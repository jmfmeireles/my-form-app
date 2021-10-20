import React from 'react';

import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import NameField from './NameField';
import SelectCountry from './SelectCountry';
import BirthdatePicker from './BirthdatePicker';
import { FormWrapper, ButtonGroup } from './styles';
import { PersonData } from '../../../../types';
import { actions as formDataActions } from '../../../../slice';
import { messageService } from '../../resources/MessageService';
import AgeHelper from '../../resources/helpers/AgeHelper';

const defaultPersonData: PersonData = {
  name: '',
  surname: '',
  birthdate: null,
  country: '',
};

export default function Form() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { handleSubmit, control, reset } = useForm();

  const onSubmit = (personData: PersonData) => {
    dispatch(formDataActions.addPerson(personData));
    reset(defaultPersonData);
    messageService.sendMessage(AgeHelper.getGreetingsMessage(personData));
  };

  const rules = { required: t('formPage.requiredField') };

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <NameField
        property="name"
        required
        control={control}
        rules={{ ...rules, maxLength: 50 }}
      />
      <NameField
        property="surname"
        required
        control={control}
        rules={{ ...rules, maxLength: 50 }}
      />
      <SelectCountry
        property="country"
        required
        control={control}
        rules={rules}
      />
      <BirthdatePicker
        property="birthdate"
        required
        control={control}
        rules={rules}
      />
      <ButtonGroup>
        <Button variant="contained" onClick={handleSubmit(onSubmit)}>
          {t('formPage.submit')}
        </Button>
        <Button variant="outlined" onClick={() => reset(defaultPersonData)}>
          {t('formPage.clear')}
        </Button>
      </ButtonGroup>
    </FormWrapper>
  );
}
