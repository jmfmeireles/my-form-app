import React from 'react';

import { FormControl, TextField } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import {
  Controller,
  Control,
  FieldValues,
  RegisterOptions,
} from 'react-hook-form';
import { useTranslation } from 'react-i18next';

export default function BirthdatePicker(props: {
  property: string;
  required: boolean;
  control: Control<FieldValues, any>;
  rules: Omit<
    RegisterOptions<FieldValues, any>,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >;
}) {
  const { t } = useTranslation();
  return (
    <Controller
      name={props.property}
      control={props.control}
      defaultValue={null}
      rules={props.rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <FormControl fullWidth>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label={t(`formPage.${props.property}`)}
              disableFuture
              value={value}
              onChange={onChange}
              renderInput={params => (
                <TextField
                  required={props.required}
                  {...params}
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
            />
          </LocalizationProvider>
        </FormControl>
      )}
    />
  );
}
