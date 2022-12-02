import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${({ centerAlign }) => (centerAlign ? "center" : "flex-start")};
  justify-content: ${({ centerJustify }) =>
    centerJustify ? "center" : "flex-start"};
`;

const Column = (props) => {
  const { children, className, centerAlign, centerJustify } = props;
  return (
    <Container
      className={className}
      centerAlign={centerAlign}
      centerJustify={centerJustify}
    >
      {children}
    </Container>
  );
};

export default Column;
