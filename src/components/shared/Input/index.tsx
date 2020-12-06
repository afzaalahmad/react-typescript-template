import React, { forwardRef } from 'react';
import classNames from 'classnames';
import StyledInput, { StyledGroup } from './styled';

interface Props {
  type: string;
  name: string;
  placeholder?: string;
  className?: string;
  error?: string;
  touched?: boolean;
  disabled?: boolean;
  icon: string;
}

const FormInput = forwardRef<Props, any>((props: Props, ref) => {
  const { type, name, placeholder, className, error, disabled, touched, icon } = props;
  return (
    <StyledGroup>
      <StyledInput
        ref={ref}
        disabled={disabled}
        type={type}
        name={name}
        placeholder={placeholder}
        className={classNames({
          [className || '']: true,
        })}
        isInvalid={!!error}
        isValid={touched && !error}
      />
      <span className="icon">
        <i className={icon} />
      </span>
      {error && <span className="error__msg">{error}</span>}
    </StyledGroup>
  );
});

export default FormInput;
