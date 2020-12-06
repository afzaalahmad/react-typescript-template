import axios, { CancelToken } from 'axios';
const cancelToken = axios.CancelToken;

const CancellationTokens: any = {};

function setCT(actionName: string): CancelToken {
  return new cancelToken((ct: any) => (CancellationTokens[actionName] = ct));
}

function callCT(actionName: string): void {
  if (CancellationTokens[actionName]) {
    CancellationTokens[actionName]();
  }
}

export default { setCT, callCT };
