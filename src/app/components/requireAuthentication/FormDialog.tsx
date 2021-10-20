import React, { useState, ChangeEvent } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { useTranslation } from 'react-i18next';

const KEY = 'revisited';

export default function FormDialog(props: {
  isAuthenticated: boolean;
  setAuthenticationState: (isAuthenticated: boolean) => void;
}) {
  const { t } = useTranslation();
  const [key, setKey] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const handleConfirm = () => {
    if (key === KEY) {
      setError(false);
      props.setAuthenticationState(true);
    } else {
      setKey('');
      setError(true);
    }
  };

  return (
    <Dialog open={!props.isAuthenticated}>
      <DialogContent>
        <DialogContentText>
          {t('requireAuthentication.message')}
        </DialogContentText>
        <TextField
          value={key}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setKey(event.target.value)
          }
          autoFocus
          margin="dense"
          label={t('requireAuthentication.key')}
          type="password"
          fullWidth
          variant="standard"
          error={error && !key}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleConfirm}>
          {t('requireAuthentication.confirm')}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
