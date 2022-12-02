import React from "react";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 5rem;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Layout = ({ children, clasdName }) => {
  return (
    <Container className={clasdName}>
      <Flex>{children}</Flex>
    </Container>
  );
};

export default Layout;
