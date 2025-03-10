import styled from "styled-components";

export const LabelText = styled.span`
  width: 100%;
  max-width: 200px;
  display: inline-block;
  margin-right: 5px;
`;

export const Field = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.alto};
  padding: 10px;
  width: 100%;
  max-width: 350px;
  border-radius: 5px;
`;

export const Button = styled.button`
  width: 100%;
  border: none;
  background-color: ${({ theme }) => theme.colors.teal};
  color: ${({ theme }) => theme.colors.white};
  padding: 10px;
  border-radius: 5px;
  transition: 0ms.3s;

  :hover {
    filter: brightness(110%);
  }

  :active {
    filter: brightness(120%);
  }

  :disabled {
    background-color: ${({ theme }) => theme.colors.gray};
    cursor: not-allowed;
  }
`;

export const Header = styled.h1`
  color: ${({ theme }) => theme.colors.teal};
  text-align: center;
`;

export const Info = styled.p`
  font-size: 14px;
  text-align: center;
  color: ${({ theme }) => theme.colors.red};
`;

export const Loading = styled.p`
  color: ${({ theme }) => theme.colors.teal};
`;

export const Failure = styled.p`
  color: ${({ theme }) => theme.colors.red};
`;
