import React from 'react';

import styled from 'styled-components';
import { backgroundColor } from '../../GlobalStyles/Utilits';

const Wraper = styled.div`
  margin-bottom: 0.5rem;
  label,
  input {
    display: block;
    width: 100%;
  }

  label {
    margin-bottom: 0.5rem;
  }

  input {
    padding: 0.6rem;
    border: 1px solid #e2e2e2;
    background: whitesmoke;
    border-radius: 0.3rem;

    &:hover {
      border: 1px solid #b4b4b4;
      outline: none;
    }

    &:focus {
      outline: none;
      border: 1px solid #b4b4b4;
    }
  }
`;

function Input({ name, type, label, value, onChange }, key) {
  return (
    <Wraper key={key}>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
      />
    </Wraper>
  );
}

export default Input;
