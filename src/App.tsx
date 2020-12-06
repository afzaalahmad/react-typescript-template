import React, { Suspense, lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import withTheme from './components/hoc/withTheme';
import withApiInterceptors from './components/hoc/withApiInterceptors';
import ls from './utils/storage.utils';
import { TOKEN_KEY } from './common/constants';
import MainStyled from './styled/main.styled';
import withErrorBoundary from './components/hoc/withErrorBoundary';
import Loader from './components/shared/Loader';

const Login = lazy(() => import('./pages/auth/Login'));
const Signup = lazy(() => import('./pages/auth/Register'));
const SignupNotice = lazy(() => import('./pages/auth/RegisterNotice'));
const VerifyAccount = lazy(() => import('./pages/auth/VerifyAccount'));
const ForgotPassword = lazy(() => import('./pages/auth/ForgotPassword'));
const ResetPassword = lazy(() => import('./pages/auth/ResetPassword'));
const NotFound = lazy(() => import('./pages/error/NotFound'));
const Logout = lazy(() => import('./pages/auth/Logout'));
const AcceptInvite = lazy(() => import('./pages/auth/AcceptInvite'));
const PrivateLayout = lazy(() => import('./pages/layout'));

const PrivateRoute = ({ component: Component, ...rest }: any) => {
  const authenticated = !!ls.get(TOKEN_KEY);
  return (
    <Route
      {...rest}
      render={(props) => (authenticated ? <Component {...props} /> : <Redirect to="/login" />)}
    />
  );
};

const App: React.FC = () => {
  return (
    <React.Fragment>
      <MainStyled />
      <Suspense fallback={<Loader page />}>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/register" component={Signup} />
          <Route exact path="/register/notice" component={SignupNotice} />
          <Route exact path="/verify/:email/:token" component={VerifyAccount} />
          <Route exact path="/invite/:email/:token" component={AcceptInvite} />
          <Route exact path="/forgot" component={ForgotPassword} />
          <Route exact path="/reset/:email/:token" component={ResetPassword} />
          <PrivateRoute component={PrivateLayout} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </React.Fragment>
  );
};

export default withErrorBoundary(withTheme(withApiInterceptors(App)));
