import styled from "styled-components";

export const StyledPlanetSelected = styled.div``;

export const CardContainer = styled.div`
  max-width: 576px;
  min-width: 320px;
  @media (min-width: 1024px) {
    width: 592px;
  }
  @media (min-width: 768px) {
    width: 592px;
  }
  margin: 0 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  border-radius: 12px;
  padding: 20px;
  min-height: 384px;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 8px;
  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  margin-bottom: 8px;
`;

export const EditContainer = styled.div`
  display: flex;
  border: 1px solid #909090;
  max-width: 220px;
  min-width: 160px;
  width: 100%;
  height: 40px;
  border-radius: 5px;
`;

export const Input = styled.input`
  font-weight: 900;
  padding-left: 0.5rem;
  min-width: 160px;
  max-width: 160px;
  height: 100%;
  border-radius: 5px;
`;

export const Button = styled.button`
  background-color: #38a169;
  padding: 0 0.5rem;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  align-items: center;
  gap: 4px;
  justify-content: center;
  margin-left: 24px;
  @media (min-width: 1024px) {
    margin-left: 0px;
  }
  @media (min-width: 768px) {
    margin-left: 0px;
  }
  @media (min-width: 640px) {
    margin-left: 0px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const InfoRow = styled.div`
  display: flex;
  gap: 16px;
  font-size: 14px;
  line-height: 20px;
`;

export const InfoTitle = styled.h3`
  font-weight: 600;
`;

export const InfoText = styled.p``;

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-color: #f1f1f1;
  width: 100%;
  min-height: 7rem;
  border-radius: 0.5rem;
  padding: 1rem;
`;

export const SectionHeader = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export const Divider = styled.div`
  height: 0.1px;
  width: 100%;
  background-color: #909090;
`;

export const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  font-size: 0.875rem;
`;

export const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  justify-content: flex-end;
  margin: 2rem 1.25rem 0.5rem 0;
  font-size: 0.875rem;
  cursor: pointer;
`;
