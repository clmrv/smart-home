import styled from "@emotion/styled";
import { BREAKPOINTS } from "../../constants";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledHeader = styled.h1`
  font-size: 2rem;
  text-shadow: 1px 1px rgb(0, 0, 0, 0.2);

  ${BREAKPOINTS.tablet} {
    font-size: 3rem;
  }

  ${BREAKPOINTS.laptop} {
    font-size: 4rem;
  }
`;

export const StyledDeviceList = styled.div`
  display: grid;
  grid-auto-flow: row;
  gap: 0.5rem;

  ${BREAKPOINTS.tablet} {
    gap: 0.75rem;
  }

  ${BREAKPOINTS.laptop} {
    gap: 1rem;
  }
`;
