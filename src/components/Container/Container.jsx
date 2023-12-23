import { statusList } from "../../data";
import Column from "../Column/Column";
import { StyledContainer } from "../Common/Common.styled";
import { MainBlock, MainContent } from "./Container.styled";

export default function Container({ cards }) {
  return (
    <StyledContainer>
      <MainBlock>
        <MainContent>
          {statusList.map((status) => (
            <Column
              key={status}
              title={status}
              tasks={cards.filter((card) => card.status === status)}
            />
          ))}
        </MainContent>
      </MainBlock>
      </StyledContainer>
  );
}
