import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Importamos los componentes estilizados desde tu nuevo archivo de estilos
import { 
  HeaderContainer, 
  Nav, 
  Logo, 
  SearchForm, 
  SearchInput, 
  SearchButton,
  StyledNavLink,
} from './styles.ts';

interface HeaderProps {
  onSearch: (artist: string) => void;
}

export const Header = ({ onSearch }: HeaderProps) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
      navigate('/');
      setQuery('');
    }
  };

  return (
    <HeaderContainer>
      <Nav>
        <Logo onClick={() => navigate('/')}>
          MusicApp
        </Logo>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <StyledNavLink onClick={() => navigate('/my-library')}>
            Mi Biblioteca
          </StyledNavLink>
          
          <SearchForm onSubmit={handleSubmit}>
            {/* ... input y button */}
          </SearchForm>
        </div>
        <SearchForm onSubmit={handleSubmit}>
          <SearchInput 
            type="text" 
            placeholder="Buscar artista (ej: Ozuna)..." 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <SearchButton type="submit">Buscar</SearchButton>
        </SearchForm>
      </Nav>
    </HeaderContainer>
  );
};