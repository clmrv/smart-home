import styled from "@emotion/styled";

export const StyledModal = styled.div`
  position: relative;
  border: 2px solid red;
  padding: 100px;
`;

export const StyledCloseButton = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`;

export const StyledWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  justify-content: center;
  align-items: center;
`;
