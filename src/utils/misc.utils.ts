export const getProtectedEmail = (e: string): string => {
  if (!e.length) return e;
  const parts = e.split('@');
  const moreParts = parts[1] ? parts[1].split('.') : [''];
  let name = parts[0];
  let type = moreParts[0];
  if (name.length)
    name = name.slice(0, 1) + name.slice(1, name.length).replace(/[0-9a-zA-Z.]/g, '*');
  if (type.length)
    type = type.slice(0, 1) + type.slice(1, type.length).replace(/[a-z0-9A-Z.]/g, '*');
  const remain = moreParts.slice(1, moreParts.length).join('.');
  let final = name;
  if (type.length) final += '@' + type;
  if (remain.length) final += '.' + remain;
  return final;
};

export const executeOnSuccess = (loading: boolean, data: any, callback: () => void): void => {
  !loading && data && callback();
};

export const executeOnError = (loading: boolean, error: any, callback: () => void): void => {
  !loading && error && callback();
};
