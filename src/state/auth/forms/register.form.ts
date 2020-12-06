import * as yup from 'yup';

const PASSWORD_LENGTH_ERROR_MESSAGE = 'Password must be equal or greater than 8 characters';
const ALPHABETS_ERROR_MESSAGE = '[1] Name must contains alphabets and spaces only';
const INVALID_EMAIL_ERROR = 'Please enter valid email';
const REQUIRED_FIELD = 'This field is required';

export const RegisterFormFields = {
  firstName: { name: 'firstName', type: 'text', icon: 'icon-user' },
  lastName: { name: 'lastName', type: 'text', icon: 'icon-user' },
  email: { name: 'email', type: 'email', icon: 'icon-at' },
  password: { name: 'password', type: 'password', icon: 'icon-lock' },
  company: { name: 'company', type: 'text', icon: 'icon-building' },
};

export const RegisterFormSchema = yup.object().shape({
  [RegisterFormFields.email.name]: yup
    .string()
    .trim()
    .email(INVALID_EMAIL_ERROR)
    .required(REQUIRED_FIELD),
  [RegisterFormFields.password.name]: yup
    .string()
    .trim()
    .test(
      RegisterFormFields.password.name,
      PASSWORD_LENGTH_ERROR_MESSAGE,
      (value: any) => value.length >= 8,
    )
    .required(REQUIRED_FIELD),
  [RegisterFormFields.firstName.name]: yup
    .string()
    .trim()
    .test(
      RegisterFormFields.firstName.name,
      ALPHABETS_ERROR_MESSAGE.replace('[1]', 'First'),
      (value: any) => value.match(/^[A-Za-z ]+$/),
    )
    .required(REQUIRED_FIELD),
  [RegisterFormFields.lastName.name]: yup
    .string()
    .trim()
    .test(
      RegisterFormFields.lastName.name,
      ALPHABETS_ERROR_MESSAGE.replace('[1]', 'Last'),
      (value: any) => value.match(/^[A-Za-z ]+$/),
    )
    .required(REQUIRED_FIELD),
  [RegisterFormFields.company.name]: yup
    .string()
    .trim()
    .test(
      RegisterFormFields.company.name,
      ALPHABETS_ERROR_MESSAGE.replace('[1]', 'Company'),
      (value: any) => value.match(/^[A-Za-z ]+$/),
    )
    .required(REQUIRED_FIELD),
});
