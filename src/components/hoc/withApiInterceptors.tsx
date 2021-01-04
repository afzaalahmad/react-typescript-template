import React, { useEffect, useState } from 'react';
import api from '../../utils/api.utils';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import ls from '../../utils/storage.utils';
import { TOKEN_KEY } from '../../common/constants';
import { useHistory } from 'react-router';
import InternalServerError from '../../pages/error/InternalServerError';
import Loader from '../shared/Loader';
import { stringify } from 'query-string';
import NetworkError from '../../pages/error/NetworkError';

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
        (error: any) => {
          console.error('API Error', error);
          setStatus(error?.response?.status);
          if (error?.response?.status === 401) {
            ls.remove(TOKEN_KEY);
            history.push({
              pathname: '/login',
              search: `?${stringify({
                return_url: encodeURIComponent(window.location.href),
              })}`,
            });
          } else if (!error?.response?.status && String(error).includes('Network Error')) {
            setStatus(600);
          }
          throw error;
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
        case 600:
          return <NetworkError />;
        default:
          return <WrappedComponent {...props} />;
      }
    } else {
      return <Loader page />;
    }
  };
};

export default withApiInterceptors;
