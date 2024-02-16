import Card from "../Card/Card";
import {
  ColumnCards,
  ColumnTitle,
  ColumnTitleP,
  MainColumn,
} from "./Column.styled";

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
              key={task._id}
              id={task._id}
              title={task.title}
              date={task.date}
              topic={task.topic}
              status={task.status}
              color={task.color}
            />
          ))}
        </div>
      </ColumnCards>
    </MainColumn>
  );
}
