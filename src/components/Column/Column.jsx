import Card from "../Card/Card";
import { ColumnCards, ColumnTitle, ColumnTitleP, MainColumn } from "./Column.styled";

export default function Column({ tasks, title }) {
  return (
    <MainColumn>
      <ColumnTitle>
        <ColumnTitleP>{title}</ColumnTitleP>
      </ColumnTitle>
      <ColumnCards>
        <div>
          {tasks.map((task) => (
            <Card
              key={task.id}
              id={task.id}
              title={task.title}
              date={task.date}
              theme={task.theme}
              status={task.status}
              color={task.color}
            />
          ))}
        </div>
      </ColumnCards>
    </MainColumn>
  );
}
