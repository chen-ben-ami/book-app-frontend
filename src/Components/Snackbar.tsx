import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import Alert from "./Alert"
import { setErrorMessage, setSuccessMessage } from '../State/Action/App';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));
interface IProps {
  text: string,
  level: "error" | "success" | "info" | "warning" | undefined,
}
const AppSnackbars: React.FunctionComponent<IProps> = ({ text, level }) => {
  const dispatch: Dispatch = useDispatch();
  const classes = useStyles();
  const alertMode: "error" | "success" | "info" | "warning" | undefined = useSelector((state: any) => state.app.alertMode);

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    if (alertMode === "error") dispatch(setErrorMessage('', undefined))
    else if (alertMode === 'success') dispatch(setSuccessMessage('', undefined))
  };

  return (
    <div className={classes.root}>
      <Snackbar open={alertMode !== undefined ? true : false} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={level}>
          {text}
        </Alert>
      </Snackbar>
    </div>
  )
}
export default AppSnackbars;