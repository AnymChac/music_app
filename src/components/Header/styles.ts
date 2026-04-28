import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.surface};
  padding: ${({ theme }) => theme.spacing.medium};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Logo = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  margin: 0;
  &:hover {
    opacity: 0.8;
  }
`;

export const SearchForm = styled.form`
  display: flex;
  gap: ${({ theme }) => theme.spacing.small};
`;

export const SearchInput = styled.input`
  padding: 8px 12px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.background};
  color: white;
  outline: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const SearchButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: bold;
  
  /* Ejemplo de personalización por hover */
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const StyledNavLink = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2rem;
  font-weight: 500;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 4px;
  transition: all 0.2s ease-in-out;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
  }

  span {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.background};
    padding: 2px 8px;
    border-radius: 10px;
    font-size: 0.8rem;
    font-weight: bold;
  }
`;