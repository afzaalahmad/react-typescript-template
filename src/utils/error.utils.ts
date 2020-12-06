import { isString, get } from 'lodash';
import axios from 'axios';

export enum ErrorTypes {
  networkError = 'Network Error! Please check your internet connection!',
  internalServerError = 'Something went wrong! Try again later!',
  invalidResponse = 'invalidResponse',
  argumentsError = 'some arguments are missing',
  cancel = 'Cancel',
}

export const errorExtractor = (error: any) => {
  if (!error) {
    return null;
  } else if (isString(error?.response?.data?.message)) {
    return error?.response?.data?.message;
  } else if (get(error, 'response.data.message[0]')) {
    return error?.response?.data?.message[0];
  } else if (isString(error?.data?.message)) {
    return error?.data?.message;
  } else if (isString(error?.message)) {
    return error?.message;
  } else if (!axios.isCancel(error)) {
    return ErrorTypes.networkError;
  } else {
    return ErrorTypes.internalServerError;
  }
};
export const errorCodeExtractor = (error: any) => {
  if (!error) {
    return 200;
  } else if (error?.response?.status) {
    return error?.response?.status;
  } else if (error?.data?.statusCode) {
    return error?.data?.statusCode;
  } else if (error?.response?.data?.statusCode) {
    return error?.response?.data?.statusCode;
  } else {
    return 504;
  }
};
