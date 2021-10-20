import React, { useState, useEffect } from 'react';

import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import {
  Controller,
  Control,
  FieldValues,
  RegisterOptions,
} from 'react-hook-form';
import { useTranslation } from 'react-i18next';

interface Country {
  code: number;
  name: string;
}

export default function SelectCountry(props: {
  property: string;
  required: boolean;
  control: Control<FieldValues, any>;
  rules: Omit<
    RegisterOptions<FieldValues, any>,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >;
}) {
  const { t } = useTranslation();
  const [countries, setCountries] = useState<Country[]>([]);
  const getAllCountries = async () => {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');
      const countriesData = await response.json();
      const relevantCountriesInfo: Country[] = countriesData.map(country => {
        return {
          code: country.area,
          name: country.name.common,
        };
      });
      setCountries(relevantCountriesInfo);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    getAllCountries();
  }, []);

  return (
    <Controller
      name={props.property}
      control={props.control}
      defaultValue=""
      rules={props.rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <FormControl fullWidth required={props.required} error={!!error}>
          <InputLabel>{t(`formPage.${props.property}`)}</InputLabel>
          <Select
            label={t(`formPage.${props.property}`)}
            value={value}
            onChange={onChange}
          >
            {countries.map(country => (
              <MenuItem key={country.code} value={country.name}>
                {country.name}
              </MenuItem>
            ))}
          </Select>
          {error && <FormHelperText>{error.message}</FormHelperText>}
        </FormControl>
      )}
    />
  );
}
