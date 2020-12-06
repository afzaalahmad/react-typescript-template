import React, { useEffect, useState, Suspense, lazy } from 'react';
import { Route, RouteProps, Switch, useHistory } from 'react-router-dom';
import Loader from '../../components/shared/Loader';
import { useGetMe } from '../../state/auth/auth.hook';
import AuthContext from '../../state/auth/auth.context';
import { MeInterface } from '../../state/auth/auth.types';
import { executeOnError, executeOnSuccess } from '../../utils/misc.utils';
import ls from '../../utils/storage.utils';
import { TOKEN_KEY } from '../../common/constants';

const NotFound = lazy(() => import('../error/NotFound'));

const routes: RouteProps[] = [
  {
    path: '/',
    exact: true,
    render: () => <h1>Hello</h1>,
  },
];

const ProtectedLayout: React.FC = () => {
  const history = useHistory();
  const { loading, data, error, getMe } = useGetMe();
  const [me, setMe] = useState<MeInterface>();

  useEffect(() => {
    getMe();
  }, []);

  useEffect(() => {
    executeOnSuccess(loading, data, () => setMe(data));
    executeOnError(loading, error, () => {
      ls.remove(TOKEN_KEY);
      history.push('/login');
    });
  }, [loading, data]);

  if (loading) {
    return <Loader page />;
  }

  return (
    <Suspense fallback={<Loader page />}>
      <AuthContext.Provider value={{ me, setMe }}>
        <Switch>
          {routes.map((route: RouteProps, idx: number) => (
            <Route key={idx} {...route} />
          ))}
          <Route component={NotFound} />
        </Switch>
      </AuthContext.Provider>
    </Suspense>
  );
};

export default ProtectedLayout;
