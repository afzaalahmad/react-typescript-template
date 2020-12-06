import * as jwt from 'jsonwebtoken';

function decodeJwt<T = any>(token: string): T {
  const decoded: T = jwt.decode(token, { json: true }) as T;
  if (decoded) {
    return decoded;
  }
  throw new Error('Invalid Token!');
}

export { decodeJwt };
