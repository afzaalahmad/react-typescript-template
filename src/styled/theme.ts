import { DefaultTheme } from 'styled-components';
import { blue, gray, red } from './colors';
import { maxDevice, minDevice } from './breakpoints';

const defaultTheme: DefaultTheme = {
  breakpoints: {
    min: minDevice,
    max: maxDevice,
  },
  colors: { blue, gray, red },
};

export default defaultTheme;
