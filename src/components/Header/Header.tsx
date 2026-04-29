import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'; // Importamos hooks de RTK
import { fetchSongs } from '../../redux/slices/searchSlice'; // Importamos el thunk
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
  const dispatch = useDispatch<any>(); // Hook para disparar acciones

  // Accedemos a la biblioteca para mostrar el conteo (opcional pero recomendado)
  const library = useSelector((state: any) => state.library);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      // PASO 6: Despachamos la acción asíncrona de búsqueda
      dispatch(fetchSongs(query));
      
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
            Mi Biblioteca <span>{library.length}</span>
          </StyledNavLink>
          
          <SearchForm onSubmit={handleSubmit}>
            <SearchInput 
              type="text" 
              placeholder="Buscar artista..." 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <SearchButton type="submit">Buscar</SearchButton>
          </SearchForm>
        </div>
      </Nav>
    </HeaderContainer>
  );
};