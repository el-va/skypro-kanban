import styled from "styled-components";
import { themeStyles } from "../../lib/theme";
import { breakpoints } from "../../lib/breakpoints";

export const CardItem = styled.div`
  padding: 5px;
  animation-name: card-animation;
  animation-duration: 500ms;
  animation-timing-function: linear;

  @media screen and (max-width: ${breakpoints.sm}px) {
    display: flex;
    flex-direction: row-reverse;
  }
`;

export const CardsCard = styled.div`
  width: 200px;
  height: 130px;
  background-color: #FFFFFF;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  padding: 15px 13px 19px;

  @media screen and (max-width: ${breakpoints.xl}px) {
    width: 200px;
    height: 130px;
    background-color: #FFFFFF;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: stretch;
    padding: 15px 13px 19px;
  }
`

export const CardGroup = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const CardBtnDiv = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #94A6BE;
`

export const CardContent = styled.div`
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`

export const CardTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: #000000;
  margin-bottom: 10px;
`

export const CardDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`
export const CardDateSvg = styled.svg`
  width: 13px;
`
export const CardDateP = styled.p`
  margin-left: 6px;
  font-size: 10px;
  line-height: 13px;
  color: #94A6BE;
  letter-spacing: 0.2px;
`

export const ThemeP = styled.p`
  font-size: 10px;
  font-weight: 600;
  line-height: 10px;
`;

export const CardTheme = styled.div`
  width: auto;
  height: 20px;
  padding: 5px 14px;
  border-radius: 18px;
  background-color: ${({ $themeColor }) =>
    themeStyles[$themeColor]?.backgroundColor || "#b4fdd1"};

  ${ThemeP} {
    color: ${({ $themeColor }) => themeStyles[$themeColor]?.color || "#06b16e"};
  }
`;
