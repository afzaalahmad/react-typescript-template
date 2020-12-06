import React, { useEffect } from 'react';
import { Row, Col, Form, Alert } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AcceptInviteFormInterface, FormFieldInterface } from '../../state/auth/auth.types';
import { useAcceptInvite, useClearToken } from '../../state/auth/auth.hook';
import FormInput from '../../components/shared/Input';
import { startCase } from 'lodash';
import FormButton from '../../components/shared/Button';
import { errorExtractor } from '../../utils/error.utils';
import { executeOnSuccess } from '../../utils/misc.utils';
import {
  AcceptInviteFormFields,
  AcceptInviteFormSchema,
} from '../../state/auth/forms/acceptInvite.form';

const AcceptInvite: React.FC = () => {
  const history = useHistory();
  const { email, token } = useParams<{ email: string; token: string }>();
  const { handleSubmit, errors, register, setValue, formState } = useForm({
    resolver: yupResolver(AcceptInviteFormSchema),
  });
  const { loading, data, error, acceptInvite } = useAcceptInvite();

  useClearToken();

  useEffect(() => {
    setValue('email', decodeURIComponent(email));
  }, [email]);

  useEffect(() => {
    executeOnSuccess(loading, data, () => {
      history.push({
        pathname: '/login',
        state: { invite: true },
      });
    });
  }, [loading, data]);

  const onSubmit = (data: AcceptInviteFormInterface) => {
    acceptInvite({
      firstName: data.firstName,
      lastName: data.lastName,
      password: data.newPassword,
      invitedEmailId: token,
    });
  };

  return (
    <div className="form--page acceptInvite--page">
      <div className="container">
        <div className="text-center text-sm-left">
          <a className="form__logo d-inline-flex">
            <img src="/images/logo.png" alt="Logo" width="92" />
          </a>
        </div>
        <div className="form--canvas animation-fadeIn">
          <h1 className="form__heading text-center mb-5">Accept Invite</h1>
          {error && (
            <Alert variant="danger" className="alert--custom text-center">
              {errorExtractor(error)}
            </Alert>
          )}
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row>
              {Object.values(AcceptInviteFormFields).map(
                ({ name, type, icon }: FormFieldInterface, idx: number) => (
                  <Col xs={12} key={idx}>
                    <FormInput
                      disabled={name === 'email'}
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
              <FormButton text="Accept" loading={loading} loadingText="Accepting" />
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AcceptInvite;
