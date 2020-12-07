import React, { useEffect, useState } from 'react';
import { Row, Col, Form, Alert } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginFormFields, LoginFormSchema } from '../../state/auth/forms/login.form';
import { FormFieldInterface, LogInRequestInterface } from '../../state/auth/auth.types';
import FormInput from '../../components/shared/Input';
import { startCase } from 'lodash';
import { Link, useHistory, useLocation } from 'react-router-dom';
import FormButton from '../../components/shared/Button';
import { useCheckToken, useLogin } from '../../state/auth/auth.hook';
import { errorExtractor } from '../../utils/error.utils';
import ls from '../../utils/storage.utils';
import { ROLES, TOKEN_KEY } from '../../common/constants';
import { executeOnSuccess } from '../../utils/misc.utils';
import qs from 'query-string';
import images from '../../utils/img.utils';

const Login: React.FC = () => {
  const history = useHistory();
  const location = useLocation<{ reset?: boolean; verify?: boolean; invite?: boolean }>();
  const queryParams = qs.parse(location.search);
  const { register, errors, handleSubmit, formState } = useForm({
    resolver: yupResolver(LoginFormSchema),
  });
  const [showMiscErrors, setShowMiscErrors] = useState(true);
  const [customError, setCustomError] = useState('');

  const { loading, data, error, login } = useLogin();

  useCheckToken();

  useEffect(() => {
    executeOnSuccess(loading, data, () => {
      if (data?.role === ROLES.SUPER_USER) {
        setCustomError('Super Admin login is not allowed.');
      } else {
        ls.set(TOKEN_KEY, data?.token);
        if (queryParams && queryParams.return_url) {
          try {
            const returnUrl = new URL(queryParams.return_url as string);
            history.push(`${returnUrl.pathname}${returnUrl.search}`);
          } catch (e) {
            console.error(e);
            history.push('/');
          }
        } else {
          history.push('/');
        }
      }
    });
  }, [loading, data]);

  const onSubmit = (data: LogInRequestInterface) => {
    setShowMiscErrors(false);
    setCustomError('');
    login(data);
  };

  const resetPassword = location?.state?.reset;
  const verifyAccount = location?.state?.verify;
  const acceptInvite = location?.state?.invite;
  return (
    <div className="form--page signin--page">
      <div className="form--canvas animation-fadeIn">
        <div className="form__logo-canvas text-center">
          <a className="form__logo d-inline-flex">
            <img src={images.logo} alt="Logo" width="92" />
          </a>
        </div>
        <div className="form--block">
          <div className="container--xs">
            <h1 className="form__heading text-center mb-5">Sign In</h1>
            {(error || customError) && (
              <Alert variant="danger" className="alert--custom text-center">
                {error ? errorExtractor(error) : customError}
              </Alert>
            )}
            {resetPassword && showMiscErrors && (
              <Alert variant="success" className="alert--custom text-center">
                Your password has been reset successfully! You can now login with your new
                credentials!
              </Alert>
            )}
            {verifyAccount && showMiscErrors && (
              <Alert variant="success" className="alert--custom text-center">
                Your account has been verified successfully! You can now login with your existing
                credentials!
              </Alert>
            )}
            {acceptInvite && showMiscErrors && (
              <Alert variant="success" className="alert--custom text-center">
                Your account has been created successfully! You can now login with your new
                credentials!
              </Alert>
            )}
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Row className="mx-1">
                {Object.values(LoginFormFields).map(
                  ({ name, type, icon }: FormFieldInterface, idx: number) => (
                    <Col xs={12} key={idx}>
                      <FormInput
                        ref={register}
                        type={type}
                        name={name}
                        placeholder={startCase(name)}
                        error={errors?.[name]?.message}
                        touched={formState?.touched?.[name] && formState?.dirtyFields?.[name]}
                        icon={icon}
                      />
                    </Col>
                  ),
                )}
              </Row>
              <div className="text-right mb-2 d-flex justify-content-end">
                <Link to="/forgot" className="form__link d-inline-flex">
                  Forgot Password?
                </Link>
              </div>
              <div className="form--Btn-canvas pt-4 mt-3 text-center">
                <FormButton text="Login" loading={loading} loadingText="Logging In" />
              </div>
              <div className="form--option justify-content-center mt-5 pt-3">
                <span className="formOpt__para">Don&rsquo;t have an account?</span>
                <Link to="/register" className="form__link d-inline-flex ml-1">
                  Register
                </Link>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
