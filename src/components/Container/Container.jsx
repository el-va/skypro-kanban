import { statusList } from "../../data";
import Column from "../Column/Column";
import { ContainerContainer } from "../Common/Common.styled";
import { MainBlock, MainContent } from "./Container.styled";

export default function Container({ cards }) {
  // console.log(cards);
  return (
    <ContainerContainer>
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
    </ContainerContainer>
  );
}
