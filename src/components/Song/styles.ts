import styled from 'styled-components';

export const SongContainer = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BackButton = styled.button`
  margin-bottom: 20px;
  background-color: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  padding: 8px 16px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  align-self: center;

  &:hover {
    background-color: ${({ theme }) => theme.colors.border};
  }
`;

export const SongCard = styled.div`
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 30px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
`;

export const SongImage = styled.img`
  width: 100%;
  max-width: 300px;
  height: 300px; 
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 20px;
  background-color: #282828; 
`;

export const SongTitle = styled.h1`
  margin: 10px 0;
  color: ${({ theme }) => theme.colors.text};
`;

export const ArtistName = styled.h3`
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 15px;
`;

export const InfoText = styled.p`
  margin: 5px 0;
  color: ${({ theme }) => theme.colors.text};
`;

export const DurationText = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.secondary || '#2ecc71'};
  font-weight: bold;
  margin: 20px 0;
`;

export const AddButtonLarge = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 12px 24px;
  border-radius: 30px;
  font-weight: bold;
  font-size: 1rem;
  width: 100%;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
    filter: brightness(1.1);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const RemoveButtonLarge = styled(AddButtonLarge)`
  background-color: #e74c3c; 
  
  &:hover {
    background-color: #941102; 
  }
`;