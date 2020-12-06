import React, { useEffect } from 'react';
import { Form, Row, Col, Alert } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FormFieldInterface, RegisterRequestInterface } from '../../state/auth/auth.types';
import { yupResolver } from '@hookform/resolvers/yup';
import { RegisterFormFields, RegisterFormSchema } from '../../state/auth/forms/register.form';
import FormInput from '../../components/shared/Input';
import { startCase } from 'lodash';
import FormButton from '../../components/shared/Button';
import { useCheckToken, useRegister } from '../../state/auth/auth.hook';
import { errorExtractor } from '../../utils/error.utils';
import { executeOnSuccess } from '../../utils/misc.utils';

const Register: React.FC = () => {
  const history = useHistory();
  const { register, errors, handleSubmit, getValues, formState } = useForm({
    resolver: yupResolver(RegisterFormSchema),
  });
  const { loading, data, error, register: registerAccount } = useRegister();

  useCheckToken();

  useEffect(() => {
    executeOnSuccess(loading, data, () => {
      history.push({
        pathname: '/register/notice',
        state: { email: getValues(RegisterFormFields.email.name) },
      });
    });
  }, [loading, data]);

  const onSubmit = (data: RegisterRequestInterface) => {
    registerAccount(data);
  };

  return (
    <div className="form--page signup--page">
      <div className="container">
        <div className="text-center text-sm-left">
          <a className="form__logo d-inline-flex">
            <img src="/images/logo.png" alt="Logo" width="92" />
          </a>
        </div>
        <div className="form--canvas animation-fadeIn">
          <h1 className="form__heading text-center mb-5">Sign Up</h1>
          {error && (
            <Alert variant="danger" className="alert--custom text-center">
              {errorExtractor(error)}
            </Alert>
          )}
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row>
              {Object.values(RegisterFormFields).map(
                ({ name, type, icon }: FormFieldInterface, idx: number) => (
                  <Col xs={12} key={idx}>
                    <FormInput
                      ref={register}
                      name={name}
                      type={type}
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
              <FormButton text="Register" loading={loading} loadingText="Registering" />
            </div>
            <div className="form--option justify-content-center mt-4 pt-1">
              <span className="para__md">Already have an account?</span>
              <Link to="/login" className="form__link d-inline-flex ml-2">
                Log In
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Register;
