import styled from 'styled-components';

export const LibraryContainer = styled.section`
  padding: ${({ theme }) => theme.spacing.large};
  max-width: 1200px;
  margin: 0 auto;
`;

export const LibraryHeader = styled.header`
  margin-bottom: ${({ theme }) => theme.spacing.large};
  border-bottom: 2px solid ${({ theme }) => theme.colors.border};
  
  h2 {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 2rem;
    margin-bottom: ${({ theme }) => theme.spacing.small};
  }
`;

export const EmptyState = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: 12px;
  border: 2px dashed ${({ theme }) => theme.colors.border};
`;

export const EmptyMessage = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1.2rem;
  font-style: italic;
`;

export const TrackList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 20px;
`;

export const TrackItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: ${({ theme }) => theme.colors.surface};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  margin-bottom: 8px;
`;

export const SongInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  strong {
    color: ${({ theme }) => theme.colors.text};
  }

  span {
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 0.9rem;
  }
`;

export const RemoveButton = styled.button`
  background-color: transparent;
  color: #ff4d4d;
  border: 1px solid #ff4d4d;
  padding: 6px 12px;
  border-radius: 4px;
  font-weight: bold;

  &:hover {
    background-color: #ff4d4d;
    color: white;
  }
`;