import styled from "@emotion/styled";
import { COLORS, SHADOW } from "../../constants";

export const StyledModal = styled.div`
  position: relative;
  border-radius: 1rem;
  padding: 2rem;
  background-color: ${COLORS.WHITE};
  box-shadow: ${SHADOW};
`;

export const StyledCloseButton = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
`;

export const StyledWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  justify-content: center;
  align-items: center;


  /* chrome dev tools issue with dragging on mobile */
  -ms-touch-action: none;
  touch-action: none;
  & * {
    -ms-touch-action: none;
    touch-action: none;
  }
}
`;
