import styled from "styled-components";
import { GroupCard } from "../components/GroupCard";

const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 20px;
  gap: 20px;
`;

export const Homepage = () => {
  return (
    <CardsWrapper>
      <GroupCard name={"The Yappers"} />
      <GroupCard name={"The Non-Yappers"} />
    </CardsWrapper>
  );
};
