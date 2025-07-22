import styled from 'styled-components';

export const FirstRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SecondRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
  padding: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Column = styled.div`
  flex: 1;
  min-width: 300px;
`;
