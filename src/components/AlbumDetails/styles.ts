import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const DetailsContainer = styled.div`
  padding: 20px;
  max-width: 900px;
  margin: 0 auto;
`;

export const AlbumHeader = styled.div`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

export const AlbumImage = styled.img`
  width: 300px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.3);
`;

export const InfoSection = styled.div`
  flex: 1;
  min-width: 300px;
`;

// PERSONALIZACIÓN CON PROPS
export const YearTag = styled.span<{ isRecent: boolean }>`
  margin-left: 10px;
  padding: 2px 8px;
  border-radius: 4px;
  background-color: ${props => props.isRecent ? props.theme.colors.secondary : 'transparent'};
  color: ${props => props.isRecent ? '#000' : props.theme.colors.text};
  font-weight: bold;
`;

export const DescriptionBox = styled.div`
  background-color: ${({ theme }) => theme.colors.surface};
  padding: 20px;
  border-radius: 8px;
  border-left: 5px solid ${({ theme }) => theme.colors.primary};
  line-height: 1.6;
  margin-bottom: 30px;

  p {
    text-align: justify;
    font-size: 0.95rem;
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

export const TrackList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const TrackItem = styled.li`
  padding: 12px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  font-weight: 500;
  display: inline-block;

  &:hover {
    text-decoration: underline;
  }
`;