import React from "react";
import styled from "@emotion/styled";
import Loading from "react-loading";

const StyledContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const FullscreenLoading: React.FC = () => {
  return (
    <StyledContainer>
      <Loading type={"spin"} />
    </StyledContainer>
  );
};

export default FullscreenLoading;
