import {
  acceptInviteAPI,
  forgotPasswordAPI,
  getMeAPI,
  loginAPI,
  registerAPI,
  resetPasswordAPI,
  verifyAccountAPI,
} from './auth.api';
import { useCallback, useEffect, useState } from 'react';
import { GetState } from '../../types/GetStateInterface';
import {
  AcceptInviteRequestInterface,
  AuthActions,
  ForgotPasswordRequestInterface,
  LogInRequestInterface,
  RegisterRequestInterface,
  ResetPasswordRequestInterface,
} from './auth.types';
import fetchActions from '../../utils/state.utils';
import axios from 'axios';
import ls from '../../utils/storage.utils';
import { TOKEN_KEY } from '../../common/constants';
import { useHistory } from 'react-router';

export const useGetMe = () => {
  const [res, setRes] = useState(GetState);
  const actionName = AuthActions.GET_ME;

  const getMe = useCallback(async () => {
    setRes((prevState) => ({ ...prevState, loading: true }));
    fetchActions.callCT(actionName);
    try {
      const res = await getMeAPI(fetchActions.setCT(actionName));
      setRes({ data: res.data, loading: false, error: null, hasData: true });
    } catch (error) {
      if (!axios.isCancel(error)) {
        setRes({ data: null, loading: false, error: error, hasData: true });
      }
    }
  }, []);

  return { ...res, getMe };
};

export const useLogin = () => {
  const [res, setRes] = useState(GetState);
  const actionName = AuthActions.LOGIN;

  const login = useCallback(async (payload: LogInRequestInterface) => {
    setRes((prevState) => ({ ...prevState, loading: true }));
    fetchActions.callCT(actionName);
    try {
      const res = await loginAPI(payload, fetchActions.setCT(actionName));
      setRes({ data: res.data, loading: false, error: null, hasData: true });
    } catch (error) {
      if (!axios.isCancel(error)) {
        setRes({ data: null, loading: false, error: error, hasData: true });
      }
    }
  }, []);

  return { ...res, login };
};

export const useRegister = () => {
  const [res, setRes] = useState(GetState);
  const actionName = AuthActions.REGISTER;

  const register = useCallback(async (payload: RegisterRequestInterface) => {
    setRes((prevState) => ({ ...prevState, loading: true }));
    fetchActions.callCT(actionName);
    try {
      const res = await registerAPI(payload, fetchActions.setCT(actionName));
      setRes({ data: res.data, loading: false, error: null, hasData: true });
    } catch (error) {
      if (!axios.isCancel(error)) {
        setRes({ data: null, loading: false, error: error, hasData: true });
      }
    }
  }, []);

  return { ...res, register };
};

export const useForgotPassword = () => {
  const [res, setRes] = useState(GetState);
  const actionName = AuthActions.FORGOT_PASSWORD;

  const forgotPassword = useCallback(async (payload: ForgotPasswordRequestInterface) => {
    setRes((prevState) => ({ ...prevState, loading: true }));
    fetchActions.callCT(actionName);
    try {
      const res = await forgotPasswordAPI(payload, fetchActions.setCT(actionName));
      setRes({ data: res.data, loading: false, error: null, hasData: true });
    } catch (error) {
      if (!axios.isCancel(error)) {
        setRes({ data: null, loading: false, error: error, hasData: true });
      }
    }
  }, []);

  return { ...res, forgotPassword };
};

export const useResetPassword = () => {
  const [res, setRes] = useState(GetState);
  const actionName = AuthActions.RESET_PASSWORD;

  const resetPassword = useCallback(async (payload: ResetPasswordRequestInterface) => {
    setRes((prevState) => ({ ...prevState, loading: true }));
    fetchActions.callCT(actionName);
    try {
      const res = await resetPasswordAPI(payload, fetchActions.setCT(actionName));
      setRes({ data: res.data, loading: false, error: null, hasData: true });
    } catch (error) {
      if (!axios.isCancel(error)) {
        setRes({ data: null, loading: false, error: error, hasData: true });
      }
    }
  }, []);

  return { ...res, resetPassword };
};

export const useVerifyAccount = () => {
  const [res, setRes] = useState(GetState);
  const actionName = AuthActions.VERIFY_ACCOUNT;

  const verifyAccount = useCallback(async (id: string) => {
    setRes((prevState) => ({ ...prevState, loading: true }));
    fetchActions.callCT(actionName);
    try {
      const res = await verifyAccountAPI(id, fetchActions.setCT(actionName));
      setRes({ data: res.data, loading: false, error: null, hasData: true });
    } catch (error) {
      if (!axios.isCancel(error)) {
        setRes({ data: null, loading: false, error: error, hasData: true });
      }
    }
  }, []);

  return { ...res, verifyAccount };
};

export const useAcceptInvite = () => {
  const [res, setRes] = useState(GetState);
  const actionName = AuthActions.ACCEPT_INVITE;

  const acceptInvite = useCallback(async (payload: AcceptInviteRequestInterface) => {
    setRes((prevState) => ({ ...prevState, loading: true }));
    fetchActions.callCT(actionName);
    try {
      const res = await acceptInviteAPI(payload, fetchActions.setCT(actionName));
      setRes({ data: res.data, loading: false, error: null, hasData: true });
    } catch (error) {
      if (!axios.isCancel(error)) {
        setRes({ data: null, loading: false, error: error, hasData: true });
      }
    }
  }, []);

  return { ...res, acceptInvite };
};

export const useClearToken = () => {
  useEffect(() => {
    ls.remove(TOKEN_KEY);
  }, []);
};

export const useCheckToken = () => {
  const history = useHistory();
  useEffect(() => {
    const token = ls.get(TOKEN_KEY);
    token && history.push('/');
  }, []);
};
