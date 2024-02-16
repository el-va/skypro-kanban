import { Link } from "react-router-dom";
import {
  // CardBtnDiv,
  CardButton,
  CardContent,
  CardDate,
  CardDateP,
  CardDateSvg,
  CardGroup,
  CardItem,
  CardTheme,
  CardTitle,
  CardsCard,
  ThemeP,
} from "./Card.styled";
import { format } from "date-fns";

export default function Card({ topic, title, date, id }) {

  let color;
  switch (topic) {
    case "Web Design":
      color = "_orange";
      break;
    case "Copywriting":
      color = "_purple";
      break;
    case "Research":
      color = "_green";
      break;
    default:
      color = "_gray";
  }

  return (
    <CardItem>
      <CardsCard>
        <CardGroup>
          <CardTheme $themeColor={color}>
            <ThemeP>{topic}</ThemeP>
          </CardTheme>
          {/* <div className={`card__theme ${color}`}> */}
          {/* <p className={color}>{theme}</p>
          </div> */}
          <Link to={`/EditCard/${id}`} target="_self">
            {/* <a href="#popBrowse" target="_self"> */}
            <CardButton>
              <div></div>
              <div></div>
              <div></div>
            </CardButton>
            {/* </a> */}
          </Link>
        </CardGroup>
        <CardContent>
          {/* <a href="" target="_blank"> */}
          {/* <Link to={AppRoutes.CARD}> */}
          <Link to={`/CardPage/${id}`}>
            <CardTitle>{title}</CardTitle>
          </Link>
          <CardDate>
            <CardDateSvg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
            >
              <g clipPath="url(#clip0_1_415)">
                <path
                  d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z"
                  stroke="#94A6BE"
                  strokeWidth="0.8"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z"
                  stroke="#94A6BE"
                  strokeWidth="0.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_415">
                  <rect width="13" height="13" fill="white" />
                </clipPath>
              </defs>
            </CardDateSvg>
            <CardDateP>{format(date, "dd.MM.yy")}</CardDateP>
          </CardDate>
        </CardContent>
      </CardsCard>
    </CardItem>
  );
}
