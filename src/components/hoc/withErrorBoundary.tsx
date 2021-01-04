import React from 'react';
import NetworkError from '../../pages/error/NetworkError';
import InternalServerError from '../../pages/error/InternalServerError';

interface Props {
  [key: string]: any;
}

interface State {
  networkError: boolean;
  unknownError: boolean;
}

const withErrorBoundary = <T extends Props>(WrappedComponent: React.FC<T>) => {
  return class extends React.Component<T, State> {
    constructor(props: T) {
      super(props);
      this.state = { networkError: false, unknownError: false };
    }

    static getDerivedStateFromError(error: unknown) {
      console.error('App Error', error);
      if (String(error).includes('ChunkLoadError')) {
        return { networkError: true };
      }
      return { unknownError: true };
    }

    render() {
      if (this.state.networkError) {
        return <NetworkError />;
      } else if (this.state.unknownError) {
        return <InternalServerError />;
      }

      return <WrappedComponent {...this.props} />;
    }
  };
};

export default withErrorBoundary;
