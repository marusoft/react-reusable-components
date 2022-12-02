import React from "react";
import styled from "styled-components";

const Container = styled.button`
  border: none;
  background-color: ${({ disabled }) => (disabled ? "gray" : "#19d7d7")};
  color: ${({ color }) => (color ? "#fff" : "#111")};
  padding: 0.5rem;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "300px")};
  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;

const Button = ({
  children,
  className,
  onClick,
  disabled,
  fullWidth,
  color,
}) => {
  return (
    <Container
      className={className}
      onClick={onClick}
      disabled={disabled}
      fullWidth={fullWidth}
      color={color}
    >
      {children}
    </Container>
  );
};

export default Button;
