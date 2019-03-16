import styled, { css } from 'styled-components';
import { resetButton } from 'themes';

export const Button = styled.button`
  ${resetButton};
  border-radius: 8px;
  font-size: 1.2em;
  display: inline-flex;
  align-items: center;

  box-icon {
    margin-right: 4px;
  }

  + button {
    margin-left: 8px;
  }

  ${({ aux }) =>
    aux
      ? css`
          background-color: ${({ theme }) => theme.colors.lightGray};
          color: ${({ theme }) => theme.colors.darkGray};
          fill: ${({ theme }) => theme.colors.darkGray};
          padding: 4px;
        `
      : css`
          background-color: ${({ theme }) => theme.colors.orange};
          color: ${({ theme }) => theme.colors.white};
          fill: ${({ theme }) => theme.colors.white};
          padding: 8px 16px;
        `}

  transition: background 0.2s ${({ theme }) => theme.easing.ease}, color 0.2s ${({ theme }) => theme.easing.ease},
    box-shadow 0.4s ${({ theme }) => theme.easing.ease};

  &:hover {
    background-color: transparent;
    box-shadow: inset 0 0 0 2px ${({ theme }) => theme.colors.orange};
    color: ${({ theme }) => theme.colors.orange};
    fill: ${({ theme }) => theme.colors.orange};
  }
`;
