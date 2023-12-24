import Card from "../Card/Card";

export default function Column({ tasks, title }) {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
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
      </div>
    </div>
  );
}
