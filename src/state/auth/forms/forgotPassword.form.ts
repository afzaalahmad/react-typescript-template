import * as yup from 'yup';

export const ForgotPasswordFormFields = {
  email: { name: 'email', type: 'email', icon: 'icon-at' },
};

export const ForgotPasswordFormSchema = yup.object().shape({
  [ForgotPasswordFormFields.email.name]: yup
    .string()
    .trim()
    .required('This field is required')
    .email('Please enter a valid email address'),
});
