import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { getProtectedEmail } from '../../utils/misc.utils';

const RegisterNotice: React.FC = () => {
  const location = useLocation<{ email: string }>();
  const history = useHistory();
  const [email, setEmail] = useState<string>();

  useEffect(() => {
    const email = location?.state?.email;
    if (email) {
      setEmail(getProtectedEmail(email));
    } else {
      history.push('/register');
    }
  }, [location]);

  return (
    <div className="form--page account--page">
      <div className="container--sm text-center animation-fadeIn">
        <div className="accountCreated--img" />
        <h1 className="form__heading text-center mb-4">Confirm your email!</h1>
        <p className="para__md d-flex flex-column align-items-center mb-3 pb-2">
          Almost there! We’ve sent a confirmation email to
          <span className="font-weight-bold">{email}.</span>
          <span className="para-new">You need to confirm your email address</span>
          <span className="para-new">to complete your account creation.</span>
        </p>
        {/*<Button className="form__btn">Resend Email</Button>*/}
      </div>
    </div>
  );
};

export default RegisterNotice;
