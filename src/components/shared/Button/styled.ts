import styled from 'styled-components';
import { Button } from 'react-bootstrap';

const StyledButton = styled(Button)`
  font-size: 16px;
  color: ${(props) => props?.theme?.colors?.gray?.[2]};
  font-weight: 600;
  text-transform: uppercase;
  background-color: ${(props) => props?.theme?.colors?.blue?.[1]};
  border: 1px solid ${(props) => props?.theme?.colors?.blue?.[1]};
  min-height: 54px;
  min-width: 240px;
  border-radius: 14px;
  padding: 8px 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:active,
  &:not(:disabled):not(.disabled):active,
  &:hover,
  &:not(:disabled):not(.disabled):hover,
  &:focus,
  &:not(:disabled):not(.disabled):focus,
  &.active,
  &:not(:disabled):not(.disabled).active,
  &.focus,
  &:not(:disabled):not(.disabled).focus,
  &.hover,
  &:not(:disabled):not(.disabled).hover,
  &:disabled,
  &.disabled {
    color: ${(props) => props?.theme?.colors?.gray?.[2]};
    background-color: ${(props) => props?.theme?.colors?.blue?.[2]};
    border: 1px solid ${(props) => props?.theme?.colors?.blue?.[2]};
    box-shadow: none;
  }

  &:disabled,
  &.disabled {
    cursor: not-allowed;
  }
`;

export default StyledButton;
