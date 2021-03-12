import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

import DateFnsUtils from '@date-io/date-fns';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiFormControl-root': {
      width: '90%',
      margin: theme.spacing(1),
    },
    '& .MuiButtonBase-root': {
      width: '90%',
      margin: theme.spacing(1),
    },
  },
}));

const RegisterForm = () => {

  const classes = useStyles();
  const [selectedDate, handleDateChange] = useState(new Date());
  const [complete, setComplete] = useState(false);
  const [error, setError] = useState('');
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const handleClick = () => {
    if (values.firstName === '' || values.lastName === '' || values.email === '' || values.phone === '') {
      setError('Complete all fields');
      setComplete(false);
    } else {
      setComplete(true);
      setError('');
    }
  }

  return (
    <>
      <form className={classes.root} id="form_register" noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          id="name_form"
          name="firstName"
          label="First Name"
          value={values.firstName}
          onChange={handleChange}
          variant="outlined"
        />
        <TextField
          id="lastname_form"
          name="lastName"
          label="Last Name"
          value={values.lastName}
          onChange={handleChange}
          variant="outlined"
        />
        <TextField
          id="email_form"
          name="email"
          label="Email"
          value={values.email}
          onChange={handleChange}
          variant="outlined"
          type="email"
        />
        <TextField
          id="phone_form"
          name="phone"
          label="Phone"
          value={values.phone}
          onChange={handleChange}
          variant="outlined"
          type="number"
        />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Date picker inline"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </MuiPickersUtilsProvider>
        <Button
          id="buttom_form"
          type="submit"
          variant="contained"
          color="primary"
          onClick={handleClick}
        >
          Register
        </Button>
      </form>
      {error !== '' && (
        <Typography component="p" id="error" style={{ color: 'red' }}>{error}</Typography>
      )}
      {complete && (
        <div id="completed">
          <Typography component="p">{values.firstName}</Typography>
          <Typography component="p">{values.lastName}</Typography>
          <Typography component="p">{values.email}</Typography>
          <Typography component="p">{values.phone}</Typography>
          <Typography component="p">{selectedDate.toDateString()}</Typography>
        </div>
      )}
    </>
  );
}

export default RegisterForm;