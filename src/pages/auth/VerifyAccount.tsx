import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import { useClearToken, useVerifyAccount } from '../../state/auth/auth.hook';
import { executeOnError, executeOnSuccess } from '../../utils/misc.utils';

const VerifyAccount: React.FC = () => {
  const history = useHistory();
  const { token } = useParams<{ token: string }>();

  useClearToken();

  const { loading, error, data, verifyAccount } = useVerifyAccount();

  useEffect(() => {
    executeOnSuccess(!loading, data, () => {
      history.push({
        pathname: '/login',
        state: { verify: true },
      });
    });
    executeOnError(loading, error, () => {
      history.push('/login');
    });
  }, [loading, data, error]);

  useEffect(() => {
    verifyAccount(token);
  }, [token]);

  return (
    <div className="form--page account--page">
      <div className="container--sm text-center animation-fadeIn">
        <h1 className="form__heading text-center mb-4">Email Verification is in Progress</h1>
        <div className="loadingio-spinner-pulse-kwgxl1zbejk">
          <div className="ldio-a7itsi8m0e">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyAccount;
