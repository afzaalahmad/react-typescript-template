import React from 'react';
import classNames from 'classnames';
import StyledButton from './styled';
import Loader from '../Loader';

interface Props {
  loading?: boolean;
  ref?: any;
  type?: string;
  className?: string;
  text: string;
  loadingText?: string;
}

const FormButton: React.FC<Props> = (props: Props) => {
  const { loading, ref, type, className, text, loadingText } = props;
  return (
    <StyledButton
      ref={ref}
      type={type || 'submit'}
      className={classNames({
        'w-100': true,
        [className || '']: true,
      })}
    >
      {loading ? (
        <React.Fragment>
          {loadingText || 'Loading'}
          <Loader custom />
        </React.Fragment>
      ) : (
        text
      )}
    </StyledButton>
  );
};

export default FormButton;
