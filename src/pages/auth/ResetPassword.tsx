import React, { useEffect } from 'react';
import { Row, Col, Form, Alert } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  ResetPasswordFormFields,
  ResetPasswordFormSchema,
} from '../../state/auth/forms/resetPassword.form';
import { FormFieldInterface, ResetPasswordFormInterface } from '../../state/auth/auth.types';
import { useClearToken, useResetPassword } from '../../state/auth/auth.hook';
import FormInput from '../../components/shared/Input';
import { startCase } from 'lodash';
import FormButton from '../../components/shared/Button';
import { errorExtractor } from '../../utils/error.utils';
import { executeOnSuccess } from '../../utils/misc.utils';
import images from '../../utils/img.utils';

const ResetPassword: React.FC = () => {
  const history = useHistory();
  const { token } = useParams<{ token: string }>();
  const { handleSubmit, errors, register, formState } = useForm({
    resolver: yupResolver(ResetPasswordFormSchema),
  });
  const { loading, data, error, resetPassword } = useResetPassword();

  useClearToken();

  useEffect(() => {
    executeOnSuccess(loading, data, () => {
      history.push({
        pathname: '/login',
        state: { reset: true },
      });
    });
  }, [loading, data]);

  const onSubmit = (data: ResetPasswordFormInterface) => {
    resetPassword({
      password: data.newPassword,
      resetPasswordId: token,
    });
  };

  return (
    <div className="form--page forgotPassword--page">
      <div className="container">
        <div className="text-center text-sm-left">
          <a className="form__logo d-inline-flex">
            <img src={images.logo} alt="Logo" width="92" />
          </a>
        </div>
        <div className="form--canvas animation-fadeIn">
          <h1 className="form__heading text-center mb-5">Reset Password</h1>
          {error && (
            <Alert variant="danger" className="alert--custom text-center">
              {errorExtractor(error)}
            </Alert>
          )}
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row>
              {Object.values(ResetPasswordFormFields).map(
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
            <div className="pt-3 text-center">
              <FormButton text="Reset Password" loading={loading} loadingText="Resetting" />
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
