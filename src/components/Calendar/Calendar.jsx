import React from "react";
import "react-day-picker/dist/style.css";
import ru from "date-fns/locale/ru";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";

export default function Calendar() {
  const [selected, setSelected] = React.useState();

  let footer = <p>Пожалуйста, введите дату</p>;
  if (selected) {
    footer = <p>You picked {format(selected, "PP", { locate: ru })}.</p>;
  }
  return (
    <DayPicker
      mode="single"
      selected={selected}
      onSelect={setSelected}
      footer={footer}
      locate={ru}
    />
  );
}
