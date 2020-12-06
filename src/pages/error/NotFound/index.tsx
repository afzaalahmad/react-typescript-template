import React from 'react';
import StyledNotFound from './styled';

const NotFound: React.FC = () => {
  return (
    <StyledNotFound>
      <div className="container--sm text-center animation-fadeIn">
        <div className="text-center">
          <a className="form__logo d-inline-flex mb-4 pb-3">
            <img src="/images/logo.png" alt="Logo" width="92" />
          </a>
        </div>
        <h3 className="form__heading text-center mb-3">It seems you got lost.</h3>
        <p className="para__md d-flex flex-column align-items-center mb-3 pb-2">
          <span className="d-inline-block mb-1">The page you are looking for does not exist.</span>
          <span>
            Go back to the{' '}
            <a href="/" className="form__link">
              home page
            </a>
          </span>
        </p>
      </div>
    </StyledNotFound>
  );
};

export default NotFound;
