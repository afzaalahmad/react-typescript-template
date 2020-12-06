import { AxiosError, AxiosResponse } from 'axios';

export interface GetStateInterface<T = any> {
  loading: boolean;
  hasData: boolean;
  error: AxiosResponse<Data> | AxiosError | null;
  data: T | null;
}

interface Data {
  statusCode: number;
  error: string;
  message: string;
}

export const GetState: GetStateInterface = {
  loading: false,
  error: null,
  data: null,
  hasData: false,
};

export interface PostStateInterface {
  loading: boolean;
}

export const PostState: PostStateInterface = {
  loading: false,
};
