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