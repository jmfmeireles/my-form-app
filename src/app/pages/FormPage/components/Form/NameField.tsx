import React from 'react';

import { TextField } from '@mui/material';
import {
  Controller,
  Control,
  FieldValues,
  RegisterOptions,
  FieldError,
} from 'react-hook-form';
import { useTranslation } from 'react-i18next';

export default function NameField(props: {
  property: string;
  required: boolean;
  control: Control<FieldValues, any>;
  rules: Omit<
    RegisterOptions<FieldValues, any>,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >;
}) {
  const { t } = useTranslation();

  const getErrorMessage = (error: FieldError) => {
    return error.type === 'maxLength'
      ? t('formPage.maxLengthExceeded')
      : error.message;
  };
  return (
    <Controller
      name={props.property}
      control={props.control}
      defaultValue=""
      rules={props.rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          label={t(`formPage.${props.property}`)}
          value={value}
          onChange={onChange}
          error={!!error}
          helperText={error ? getErrorMessage(error) : null}
          variant="outlined"
          required={props.required}
        />
      )}
    />
  );
}
