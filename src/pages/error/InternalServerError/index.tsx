import React from 'react';
import StyledInternalServerError from './styled';
import images from '../../../utils/img.utils';

const InternalServerError: React.FC = () => {
  return (
    <StyledInternalServerError>
      <div className="container--sm text-center animation-fadeIn">
        <div className="text-center">
          <a className="form__logo d-inline-flex mb-4 pb-3">
            <img src={images.logo} alt="Logo" width="92" />
          </a>
        </div>
        <h3 className="form__heading text-center mb-3">Internal Server Error!</h3>
        <p className="para__md d-flex flex-column align-items-center mb-3 pb-2">
          <span className="d-inline-block mb-1">
            Sorry, something went wrong. Please{' '}
            <a
              href="mailto:info@soundqa.com?subject=Internal%20Server%20Error"
              className="form__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              contact us
            </a>{' '}
            to report this issue or try again later.
          </span>
        </p>
      </div>
    </StyledInternalServerError>
  );
};

export default InternalServerError;
