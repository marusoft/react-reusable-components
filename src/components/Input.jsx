import React from "react";
import styled from "styled-components";

const Input = styled.input`
  font-size: 1rem;
  margin-bottom: 0.7rem;
`;
const Label = styled.label`
  margin-bottom: 0.8rem;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
`;

const TextInput = ({
  className,
  label,
  onChange,
  value,
  placeholder,
  type,
}) => {
  return (
    <Container className={className}>
      {label && <Label>{label}</Label>}
      <Input
        type={type}
        onChange={onChange}
        value={value}
        name={label}
        placeholder={placeholder}
      />
    </Container>
  );
};

export default TextInput;
