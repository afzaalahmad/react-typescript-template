import { Dispatch, SetStateAction } from 'react';

export enum AuthActions {
  GET_ME = 'GET_ME',
  LOGIN = 'LOGIN',
  FORGOT_PASSWORD = 'FORGOT_PASSWORD',
  RESET_PASSWORD = 'RESET_PASSWORD',
  REGISTER = 'REGISTER',
  VERIFY_ACCOUNT = 'VERIFY_ACCOUNT',
  ACCEPT_INVITE = 'ACCEPT_INVITE',
  LOGOUT = 'LOGOUT',
}

export interface LogInRequestInterface {
  email: string;
  password: string;
}

export interface RegisterRequestInterface {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  company: string;
}

export interface ForgotPasswordRequestInterface {
  email: string;
}

export interface ResetPasswordRequestInterface {
  resetPasswordId: string;
  password: string;
}

export interface AcceptInviteRequestInterface {
  invitedEmailId: string;
  firstName: string;
  lastName: string;
  password: string;
}

export interface ResetPasswordFormInterface {
  newPassword: string;
  confirmNewPassword: string;
}

export interface AcceptInviteFormInterface {
  email: string;
  firstName: string;
  lastName: string;
  newPassword: string;
  confirmNewPassword: string;
}

export interface FormFieldInterface {
  name: string;
  type: string;
  icon: string;
}

export interface MeInterface {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface AuthContextInterface {
  me?: MeInterface;
  setMe: Dispatch<SetStateAction<MeInterface | undefined>>;
}
