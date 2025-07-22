import styled from 'styled-components';

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.05);
  width: 100%;
  max-width: 400px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

export const Label = styled.label`
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

export const Input = styled.input`
  padding: 0.75rem 1rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.inputBg};
  border: 1px solid ${({ theme }) => theme.inputBorder};
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
  font-family: inherit;
  outline: none;

  &:focus {
    border-color: ${({ theme }) => theme.inputFocusBorder};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.inputFocusShadow};
  }
`;

export const Button = styled.button`
  padding: 0.75rem 1rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.buttonBg};
  color: ${({ theme }) => theme.buttonText};
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.buttonHoverBg};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.buttonDisabledBg};
    cursor: not-allowed;
  }
`;
