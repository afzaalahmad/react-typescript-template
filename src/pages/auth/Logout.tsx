import React, { useEffect } from 'react';
import { Redirect } from 'react-router';
import ls from '../../utils/storage.utils';
import { TOKEN_KEY } from '../../common/constants';

const Logout: React.FC = () => {
  useEffect(() => {
    ls.remove(TOKEN_KEY);
  }, []);

  return <Redirect to="/login" />;
};

export default Logout;
