import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Theme } from '../../styled';

interface Props {
  [key: string]: any;
}

const withTheme = <T extends Props>(WrappedComponent: React.FC<T>) => {
  return function (props: T) {
    return (
      <ThemeProvider theme={Theme}>
        <WrappedComponent {...props} />
      </ThemeProvider>
    );
  };
};

export default withTheme;
