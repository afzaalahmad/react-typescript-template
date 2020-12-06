import React from 'react';
import styled from 'styled-components';

const StyledNetworkError = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

  .form__heading {
    font-size: 24px;
  }
  .form__link {
    cursor: pointer;
  }
`;

interface Props {
  [key: string]: any;
}

interface State {
  hasError: boolean;
}

const withErrorBoundary = <T extends Props>(WrappedComponent: React.FC<T>) => {
  return class extends React.Component<T, State> {
    constructor(props: T) {
      super(props);
      this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: unknown) {
      // Update state so the next render will show the fallback UI.
      console.error(error);
      return { hasError: true };
    }

    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return (
          <StyledNetworkError>
            <div className="container--sm text-center animation-fadeIn">
              <div className="text-center">
                <a className="form__logo d-inline-flex mb-4 pb-3">
                  <img src="/images/logo.png" alt="Logo" width="92" />
                </a>
              </div>
              <h3 className="form__heading text-center mb-3">
                Oops, your internet connection seems off...
              </h3>
              <p className="para__md d-flex flex-column align-items-center mb-3 pb-2">
                <span className="d-inline-block mb-1">
                  Please check your internet connection and{' '}
                  <a onClick={() => window?.location?.reload()} className="form__link">
                    try again
                  </a>
                  .
                </span>
              </p>
            </div>
          </StyledNetworkError>
        );
      }

      return <WrappedComponent {...this.props} />;
    }
  };
};

export default withErrorBoundary;
