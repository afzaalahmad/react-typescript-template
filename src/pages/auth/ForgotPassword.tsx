import React from 'react';
import { Row, Col, Alert, Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  ForgotPasswordFormFields,
  ForgotPasswordFormSchema,
} from '../../state/auth/forms/forgotPassword.form';
import { ForgotPasswordRequestInterface, FormFieldInterface } from '../../state/auth/auth.types';
import FormInput from '../../components/shared/Input';
import { startCase } from 'lodash';
import { useCheckToken, useForgotPassword } from '../../state/auth/auth.hook';
import FormButton from '../../components/shared/Button';
import { errorExtractor } from '../../utils/error.utils';

const ForgotPassword: React.FC = () => {
  const { errors, register, handleSubmit, formState } = useForm({
    resolver: yupResolver(ForgotPasswordFormSchema),
  });
  const { data, error, loading, forgotPassword } = useForgotPassword();

  useCheckToken();

  const onSubmit = (data: ForgotPasswordRequestInterface) => {
    forgotPassword(data);
  };

  return (
    <div className="form--page forgotPassword--page">
      <div className="container">
        <div className="text-center text-sm-left">
          <a className="form__logo d-inline-flex">
            <img src="/images/logo.png" alt="Logo" width="92" />
          </a>
        </div>
        <div className="form--canvas animation-fadeIn">
          <h1 className="form__heading text-center mb-5">Forgot Password</h1>
          {data && (
            <Alert variant="success" className="alert--custom text-center">
              An email has been sent with reset password instructions.
            </Alert>
          )}
          {error && (
            <Alert variant="danger" className="alert--custom text-center">
              {errorExtractor(error)}
            </Alert>
          )}
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row>
              {Object.values(ForgotPasswordFormFields).map(
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
              <FormButton text={'Send'} loading={loading} />
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
