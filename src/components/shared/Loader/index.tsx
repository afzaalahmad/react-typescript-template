import React from 'react';
import { Spinner } from 'react-bootstrap';
import StyledLoader from './styled';
import classNames from 'classnames';
import { Variant } from 'react-bootstrap/types';

interface Props {
  page?: boolean;
  custom?: boolean;
  className?: string;
  animation?: 'border' | 'grow';
  role?: string;
  size?: 'sm';
  variant?: Variant;
}

const Loader: React.FC<Props> = ({
  page,
  custom,
  className,
  variant,
  size,
  animation = 'border',
  role = 'status',
}) => {
  return (
    <StyledLoader
      className={classNames({
        [className || '']: true,
        'page-spinner': page,
        'd-inline-flex align-items-center justify-content-center': custom,
      })}
    >
      <Spinner
        animation={animation}
        variant={variant}
        role={role}
        size={size}
        className={classNames({
          'custom-spinner': custom,
        })}
      />
    </StyledLoader>
  );
};

Loader.defaultProps = {
  animation: 'border',
};

export default Loader;
