import styled, { keyframes } from 'styled-components';
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

export const AddButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 0.85rem;
  font-weight: bold;
  margin-bottom: 12px;
  width: 100%;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: black;
  }
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const LoadingSpinner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 200px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};

  &:before {
    content: '';
    width: 40px;
    height: 40px;
    border: 5px solid ${({ theme }) => theme.colors.border};
    border-top: 5px solid ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
    animation: ${spin} 1s linear infinite;
    margin-bottom: 10px;
  }
`;

export const ErrorMessage = styled.div`
  background-color: #fff5f5;
  color: #c53030;
  padding: 2rem;
  border-radius: 8px;
  border: 1px solid #feb2b2;
  text-align: center;
  margin: 2rem;

  button {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    background-color: #c53030;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    &:hover { background-color: #9b2c2c; }
  }
`;