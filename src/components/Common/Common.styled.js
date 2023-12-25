import styled, { css } from "styled-components";
import { breakpoints } from "../../lib/breakpoints";

export const ContainerContainer = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;

  @media screen and (max-width: ${breakpoints.md}px) {
    width: 100%;
    padding: 0 16px;
  }
`

export const hover01 = css`
&:hover {
  background-color: #33399b;
}
`
export const hover02 = css`
&:hover {
  color: #33399b;
}
`
export const hover03 = css`
&:hover {
  background-color: #33399b;
  color: #FFFFFF;
}
`
export const hover03A = css`
&:hover {
  color: #FFFFFF;
}
`
export const CategoriesTheme = styled.div`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: 0.4;
`
export const PopNewCardCalendar = styled.div`
    width: 100%;
`
export const Calendar = styled(PopNewCardCalendar)`
  width: 182px;
  margin-bottom: 20px;
`

export const CalendarTtl = styled.p`
  margin-bottom: 14px;
  padding: 0 7px;
`
export const Subttl = styled.p`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`
export const CalendarBlock = styled.div`
  display: block;
`
export const CalendarNav = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 14px;
  padding: 0 7px;
`
export const CalendarMonth = styled.div`
  color: #94A6BE;
  font-size: 14px;
  line-height: 25px;
  font-weight: 600;
`
export const CalendarContent = styled.div`
  margin-bottom: 12px;
`
export const CalendarDaysNames = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  margin: 7px 0;
  padding: 0 7px;
`
export const CalendarDayName = styled.div`
  color: #94A6BE;
  font-size: 10px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.2px;
`
export const CalendarCells = styled.div`
  width: 182px;
  height: 126px;
  display: flex;
  flex-wrap: wrap;
`
export const CalendarCell = styled.div`
  width: 22px;
  height: 22px;
  margin: 2px;
  border-radius: 50%;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  color: #94A6BE;
  font-size: 10px;
  line-height: 1;
  letter-spacing: -0.2px;
  cursor: pointer;
`
export const CalendarPeriod = styled.div`
  padding: 0 7px;
`
export const CalendarP = styled.p`
    font-size: 14px;
`
export const Categories = styled.div`
  margin-bottom: 20px;
`
export const CategoriesP = styled(Subttl)`
  margin-bottom: 14px;
`