import * as yup from 'yup';

const ValidationSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, 'username must be at least 3 characters')
    .required('username is required'),
  email: yup
    .string()
    .email('invalid email')
    .required('email is required'),
  password: yup
    .string()
    .min(6, 'password must be at least 6 characters')
    .required('password is required'),
});

export default ValidationSchema