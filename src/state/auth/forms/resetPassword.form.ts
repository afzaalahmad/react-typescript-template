import * as yup from 'yup';

export const ResetPasswordFormFields = {
  password: { name: 'newPassword', type: 'password', icon: 'icon-lock' },
  confirmPassword: { name: 'confirmNewPassword', type: 'password', icon: 'icon-lock' },
};

export const ResetPasswordFormSchema = yup.object().shape({
  [ResetPasswordFormFields.password.name]: yup
    .string()
    .trim()
    .test(
      ResetPasswordFormFields.password.name,
      'Password must be of at least 8 characters',
      (value: any) => value.length >= 8,
    )
    .required('This field is required'),
  [ResetPasswordFormFields.confirmPassword.name]: yup
    .string()
    .trim()
    .test(
      ResetPasswordFormFields.confirmPassword.name,
      'Confirm Password must be of at least 8 characters',
      (value: any) => value.length >= 8,
    )
    .oneOf(
      [yup.ref(ResetPasswordFormFields.password.name)],
      'Confirm password must match your password',
    )
    .required('This field is required'),
});
