import React, { useEffect, useState } from 'react';
import api from '../../utils/api.utils';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import ls from '../../utils/storage.utils';
import { TOKEN_KEY } from '../../common/constants';
import { useHistory } from 'react-router';
import InternalServerError from '../../pages/error/InternalServerError';
import Loader from '../shared/Loader';

interface Props {
  [key: string]: any;
}

const withApiInterceptors = <T extends Props>(WrappedComponent: React.FC<T>) => {
  return function (props: T) {
    const history = useHistory();
    const [status, setStatus] = useState<number>();
    const [interceptorsRegistered, setInterceptorsRegistered] = useState(false);

    useEffect(() => {
      const requestInterceptor = api.interceptors.request.use((config: AxiosRequestConfig) => {
        const token = ls.get(TOKEN_KEY);
        token && (config.headers['Authorization'] = `Bearer ${token}`);
        return config;
      });
      const responseInterceptor = api.interceptors.response.use(
        (res: AxiosResponse) => res,
        (e: any) => {
          setStatus(e?.response?.status);
          if (
            e?.response?.status === 401 &&
            !window.location.pathname.startsWith('/login') &&
            !window.location.pathname.startsWith('/register') &&
            !window.location.pathname.startsWith('/verify') &&
            !window.location.pathname.startsWith('/register/notice') &&
            !window.location.pathname.startsWith('/forgot') &&
            !window.location.pathname.startsWith('/reset')
          ) {
            ls.remove(TOKEN_KEY);
            history.push(`/login?return_url=${encodeURIComponent(window.location.href)}`);
          }
          throw e;
        },
      );
      setInterceptorsRegistered(true);
      return () => {
        api.interceptors.request.eject(requestInterceptor);
        api.interceptors.response.eject(responseInterceptor);
        setInterceptorsRegistered(false);
      };
    }, []);

    if (interceptorsRegistered) {
      switch (status) {
        case 500:
          return <InternalServerError />;
        default:
          return <WrappedComponent {...props} />;
      }
    } else {
      return <Loader page />;
    }
  };
};

export default withApiInterceptors;
