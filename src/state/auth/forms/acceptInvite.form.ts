import * as yup from 'yup';

const ALPHABETS_ERROR_MESSAGE = '[1] Name must contains alphabets and spaces only';
const REQUIRED_FIELD = 'This field is required';

export const AcceptInviteFormFields = {
  firstName: { name: 'firstName', type: 'text', icon: 'icon-user' },
  lastName: { name: 'lastName', type: 'text', icon: 'icon-user' },
  email: { name: 'email', type: 'email', icon: 'icon-at' },
  password: { name: 'newPassword', type: 'password', icon: 'icon-lock' },
  confirmPassword: { name: 'confirmNewPassword', type: 'password', icon: 'icon-lock' },
};

export const AcceptInviteFormSchema = yup.object().shape({
  [AcceptInviteFormFields.firstName.name]: yup
    .string()
    .trim()
    .test(
      AcceptInviteFormFields.firstName.name,
      ALPHABETS_ERROR_MESSAGE.replace('[1]', 'First'),
      (value: any) => value.match(/^[A-Za-z ]+$/),
    )
    .required(REQUIRED_FIELD),
  [AcceptInviteFormFields.lastName.name]: yup
    .string()
    .trim()
    .test(
      AcceptInviteFormFields.lastName.name,
      ALPHABETS_ERROR_MESSAGE.replace('[1]', 'Last'),
      (value: any) => value.match(/^[A-Za-z ]+$/),
    )
    .required(REQUIRED_FIELD),
  [AcceptInviteFormFields.password.name]: yup
    .string()
    .trim()
    .test(
      AcceptInviteFormFields.password.name,
      'Password must be of at least 8 characters',
      (value: any) => value.length >= 8,
    )
    .required('This field is required'),
  [AcceptInviteFormFields.confirmPassword.name]: yup
    .string()
    .trim()
    .test(
      AcceptInviteFormFields.confirmPassword.name,
      'Confirm Password must be of at least 8 characters',
      (value: any) => value.length >= 8,
    )
    .oneOf(
      [yup.ref(AcceptInviteFormFields.password.name)],
      'Confirm password must match your password',
    )
    .required('This field is required'),
});
