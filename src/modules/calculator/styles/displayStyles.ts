import styled from 'styled-components';

export const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  max-width: 100%;
  height: 100%;

  margin: 1.5rem auto;
  padding: 1.5rem 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

export const Title = styled.h2`
  font-weight: 700;
  margin-bottom: 1rem;
  font-size: 1.5rem;
`;

export const DescriptionList = styled.dl`
  display: grid;
  grid-template-columns: max-content 1fr;
  gap: 0.75rem 1.5rem;
`;

export const Term = styled.dt`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Description = styled.dd`
  margin: 0;
  color: ${({ theme }) => theme.colors.text};
  word-break: break-word;
`;
