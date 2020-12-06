import * as yup from 'yup';

export const LoginFormFields = {
  email: { name: 'email', type: 'email', icon: 'icon-at' },
  password: { name: 'password', type: 'password', icon: 'icon-lock' },
};

export const LoginFormSchema = yup.object().shape({
  [LoginFormFields.email.name]: yup
    .string()
    .trim()
    .required('This field is required')
    .email('Please enter a valid email address'),
  [LoginFormFields.password.name]: yup.string().trim().required('This field is required'),
});
