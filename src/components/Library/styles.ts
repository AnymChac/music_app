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