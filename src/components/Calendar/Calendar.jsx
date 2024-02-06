// import React from "react";
import "react-day-picker/dist/style.css";
import ru from "date-fns/locale/ru";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";

export default function Calendar({selected, setSelected}) {
  // const [selected, setSelected] = React.useState();

  let footer = <p>Пожалуйста, введите дату</p>;
  if (selected) {
    footer = <p>Срок исполнения: {format(selected, "PP", { locale: ru })}.</p>;
  }
  return (
    <DayPicker
      mode="single"
      selected={selected}
      onSelect={setSelected}
      footer={footer}
      locale={ru}
    />
  );
}
