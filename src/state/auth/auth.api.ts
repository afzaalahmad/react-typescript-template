import { AxiosPromise, CancelToken } from 'axios';
import api from '../../utils/api.utils';
import {
  AcceptInviteRequestInterface,
  ForgotPasswordRequestInterface,
  LogInRequestInterface,
  RegisterRequestInterface,
  ResetPasswordRequestInterface,
} from './auth.types';

export const getMeAPI = (ct?: CancelToken) => {
  return api.get('/users/me', {
    cancelToken: ct,
  });
};

export const loginAPI = (payload: LogInRequestInterface, ct?: CancelToken): AxiosPromise => {
  return api.post(
    '/users/login',
    { ...payload, deviceID: 'web' },
    {
      cancelToken: ct,
    },
  );
};

export const registerAPI = (payload: RegisterRequestInterface, ct?: CancelToken): AxiosPromise => {
  return api.post('/users', payload, {
    cancelToken: ct,
  });
};

export const forgotPasswordAPI = (
  payload: ForgotPasswordRequestInterface,
  ct?: CancelToken,
): AxiosPromise => {
  return api.get('/users/forgot', {
    cancelToken: ct,
    params: payload,
  });
};

export const resetPasswordAPI = (
  payload: ResetPasswordRequestInterface,
  ct?: CancelToken,
): AxiosPromise => {
  return api.post('/users/reset', payload, {
    cancelToken: ct,
  });
};

export const verifyAccountAPI = (id: string, ct?: CancelToken): AxiosPromise => {
  return api.get(`/users/verify/${id}`, {
    cancelToken: ct,
  });
};

export const acceptInviteAPI = (
  payload: AcceptInviteRequestInterface,
  ct?: CancelToken,
): AxiosPromise => {
  return api.post('/users/invite/accept', payload, {
    cancelToken: ct,
  });
};
