import { statusList } from "../../data";
import Column from "../Column/Column";

export default function Container({ cards }) {
  return (
    <div className="container">
      <div className="main__block">
        <div className="main__content">
          {statusList.map((status) => (
            <Column
              key={status}
              title={status}
              tasks={cards.filter((card) => card.status === status)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
