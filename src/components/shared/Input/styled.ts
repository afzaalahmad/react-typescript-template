import styled from 'styled-components';
import { Form } from 'react-bootstrap';

export const StyledGroup = styled(Form.Group)`
  margin-bottom: 24px;
  position: relative;

  .error__msg {
    position: absolute;
    right: 2px;
    bottom: -17px;
    font-size: 11px;
    color: ${(props) => props?.theme?.colors?.red?.[1]};
    font-weight: normal;
  }
  .icon {
    font-size: 18px;
    color: ${(props) => props?.theme?.colors?.gray?.[9]};
    position: absolute;
    left: 14px;
    top: 19px;
    display: inline-flex;
  }
`;

const StyledInput = styled(Form.Control)`
  font-size: 14px;
  color: ${(props) => props?.theme?.colors?.gray?.[6]};
  background-color: ${(props) => props?.theme?.colors?.gray?.[7]};
  border-radius: 8px;
  border: 1px solid ${(props) => props?.theme?.colors?.gray?.[7]};
  height: calc(2.858em + 0.75rem + 2px);
  padding: 12px 16px 12px 40px;

  &:focus {
    color: ${(props) => props?.theme?.colors?.gray?.[6]};
    border: 1px solid ${(props) => props?.theme?.colors?.gray?.[5]};
    box-shadow: none;
  }
  &.is-invalid:focus,
  .was-validated &:invalid:focus {
    box-shadow: none;
  }

  &::-webkit-input-placeholder,
  &::-ms-input-placeholder,
  &::placeholder {
    color: ${(props) => props?.theme?.colors?.gray?.[8]};
  }

  &.error {
    border-color: ${(props) => props?.theme?.colors?.red?.[1]};
  }
`;

export default StyledInput;
