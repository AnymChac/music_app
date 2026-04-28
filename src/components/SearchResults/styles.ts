import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ResultsGrid = styled.div`
  display: grid;
  /* Crea una cuadrícula que se ajusta sola al ancho de la pantalla */
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.spacing.large};
  padding: ${({ theme }) => theme.spacing.medium};
`;

export const AlbumCard = styled.div`
  background-color: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  padding: ${({ theme }) => theme.spacing.medium};
  text-align: center;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const AlbumCover = styled.img`
  width: 100%;
  border-radius: 4px;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  margin-bottom: ${({ theme }) => theme.spacing.small};
`;

export const AlbumTitle = styled.h3`
  font-size: 1rem;
  margin: 10px 0;
  color: ${({ theme }) => theme.colors.text};
  /* Evita que títulos muy largos rompan el diseño */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const StyledDetailsLink = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  font-weight: bold;
  font-size: 0.9rem;

  &:hover {
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;