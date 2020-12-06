import 'styled-components';

declare module 'styled-components' {
  export interface SupportedMediaDevices {
    mobileS: string;
    mobileM: string;
    mobileL: string;
    tablet: string;
    laptop: string;
    laptopL: string;
    laptopXL: string;
    desktop: string;
    desktopL: string;
  }

  export interface ColorPalettes {
    red: any;
    blue: any;
    gray: any;
  }
  export interface DefaultTheme {
    breakpoints: {
      min: SupportedMediaDevices;
      max: SupportedMediaDevices;
    };
    colors: ColorPalettes;
  }
}
