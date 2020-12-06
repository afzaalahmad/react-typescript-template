import styled from 'styled-components';

const StyledLoader = styled.div`
  &.page-spinner {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.6);
  }

  .custom-spinner {
    width: 20px;
    height: 20px;
    margin-left: 8px;
    border: 0.15em solid currentColor;
    border-right-color: transparent;
  }
`;

export default StyledLoader;
