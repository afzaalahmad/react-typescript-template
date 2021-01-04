import React from 'react';
import StyledNetworkError from './styled';

const NetworkError: React.FC = () => {
  return (
    <StyledNetworkError>
      <div className="container--sm text-center animation-fadeIn">
        <div className="text-center">
          <a className="form__logo d-inline-flex mb-4 pb-3">
            <svg height="300" viewBox="0 0 512 512" width="300" xmlns="http://www.w3.org/2000/svg">
              <g id="Flat">
                <rect fill="#348ed8" height="344" rx="32" width="464" x="24" y="40" />
                <path d="m24 280v72a32 32 0 0 0 32 32h400a32 32 0 0 0 32-32v-248z" fill="#3289d1" />
                <path
                  d="m456 384h-400a32 32 0 0 1 -32-32v-24h464v24a32 32 0 0 1 -32 32z"
                  fill="#dfdfdd"
                />
                <path d="m328 472h-144l24-88h96z" fill="#d5d5d3" />
                <path d="m152 464h208v16h-208z" fill="#dfdfdd" />
                <path
                  d="m349.036 280h-186.072a18.963 18.963 0 0 1 -18.964-18.964 18.961 18.961 0 0 1 2.5-9.409l85.563-149.735a27.57 27.57 0 0 1 23.937-13.892 27.57 27.57 0 0 1 23.938 13.892l85.562 149.735a18.961 18.961 0 0 1 2.5 9.409 18.963 18.963 0 0 1 -18.964 18.964z"
                  fill="#d65246"
                />
                <path d="m248 136h16v88h-16z" fill="#34507b" />
                <path d="m248 240h16v16h-16z" fill="#34507b" />
                <g fill="#459ce5">
                  <path d="m48 80h16v16h-16z" />
                  <path d="m48 112h16v80h-16z" />
                </g>
              </g>
            </svg>
          </a>
        </div>
        <h3 className="form__heading text-center mb-3">
          Oops, your internet connection seems off...
        </h3>
        <p className="para__md d-flex flex-column align-items-center mb-3 pb-2">
          <span className="d-inline-block mb-1">
            Please check your internet connection and{' '}
            <a onClick={() => window?.location?.reload()} className="form__link">
              reload
            </a>{' '}
            again.
          </span>
        </p>
      </div>
    </StyledNetworkError>
  );
};

export default NetworkError;
