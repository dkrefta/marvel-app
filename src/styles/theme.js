import styled from 'styled-components';

export const Form = styled.form`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  width: 300px;
  margin-left: 20px;
  height: 35px;
  border: 1px solid #ccc;
  background-color: #fff;
`;

export const Button = styled.button`
  width: 300px;
  height: 35px;
  background-color: #5995ef;
  color: #fff;
  border-radius: 3px;
`;

// Text
export const Title = styled.h1`
  font-family: 'Open Sans', sans-serif;
  color: #fff;
  font-size: 1.5em;
  margin: 0;
  padding: 0;
`;

export const Title2 = styled.h2`
  font-family: 'Open Sans', sans-serif;
  color: #fff;
  font-size: 1.5em;
`;

export const Text = styled.p`
  font-family: 'Open Sans', sans-serif;
  color: ${props => props.color || '#4d4d4d'};
`;

export const screenSize = {
  sm: 576,
  md: 768,
  lg: 992
};
