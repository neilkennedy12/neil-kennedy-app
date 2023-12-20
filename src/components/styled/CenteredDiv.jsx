import styled from "@emotion/styled";

export const CenteredDiv = styled.div`
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10px;
`;
