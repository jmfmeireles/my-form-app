import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { TableContainer, NoDataWrapper, TableCellHead } from './styles';
import { PersonData } from 'app/types';
import { getPersonRecords } from 'app/selectors';
import ViewMore from './ViewMore';

export default function DataTable(props: { isFormPage?: boolean }) {
  const { t } = useTranslation();
  const personRecords: PersonData[] = useSelector(getPersonRecords);
  return (
    <TableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCellHead variant="head">{t('formPage.name')}</TableCellHead>
            <TableCellHead variant="head" align="center">
              {t('formPage.country')}
            </TableCellHead>
            <TableCellHead variant="head" align="center">
              {t('formPage.birthdate')}
            </TableCellHead>
          </TableRow>
        </TableHead>
        <TableBody>
          {personRecords.map((person, index) => (
            <TableRow key={`${person.name}-${index}`}>
              <TableCell component="th" scope="row">
                {person.name} {person.surname}
              </TableCell>
              <TableCell align="center">{person.country}</TableCell>
              <TableCell align="center">
                {person.birthdate
                  ? new Date(person.birthdate).toLocaleDateString()
                  : ''}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {!personRecords.length && (
        <NoDataWrapper>{t('formPage.noData')}</NoDataWrapper>
      )}
      {personRecords.length > 0 && props.isFormPage && <ViewMore />}
    </TableContainer>
  );
}
