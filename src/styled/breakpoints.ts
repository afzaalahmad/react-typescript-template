import { SupportedMediaDevices } from 'styled-components';

const minSize = {
  mobileS: '320px',
  mobileM: '348px',
  mobileL: '576',
  tablet: '768px',
  laptop: '992px',
  laptopL: '1200px',
  laptopXL: '1440px',
  desktop: '2560px',
};

const maxSize = {
  mobileS: '319px',
  mobileM: '347px',
  mobileL: '575px',
  tablet: '767px',
  laptop: '991px',
  laptopL: '1199px',
  laptopXL: '1439px',
  desktop: '2559px',
};

export const minDevice: SupportedMediaDevices = {
  mobileS: `(min-width: ${minSize.mobileS})`,
  mobileM: `(min-width: ${minSize.mobileM})`,
  mobileL: `(min-width: ${minSize.mobileL})`,
  tablet: `(min-width: ${minSize.tablet})`,
  laptop: `(min-width: ${minSize.laptop})`,
  laptopL: `(min-width: ${minSize.laptopL})`,
  laptopXL: `(min-width: ${minSize.laptopXL})`,
  desktop: `(min-width: ${minSize.desktop})`,
  desktopL: `(min-width: ${minSize.desktop})`,
};

export const maxDevice: SupportedMediaDevices = {
  mobileS: `(max-width: ${maxSize.mobileS})`,
  mobileM: `(max-width: ${maxSize.mobileM})`,
  mobileL: `(max-width: ${maxSize.mobileL})`,
  tablet: `(max-width: ${maxSize.tablet})`,
  laptop: `(max-width: ${maxSize.laptop})`,
  laptopL: `(max-width: ${maxSize.laptopL})`,
  laptopXL: `(max-width: ${maxSize.laptopXL})`,
  desktop: `(max-width: ${maxSize.desktop})`,
  desktopL: `(max-width: ${maxSize.desktop})`,
};
