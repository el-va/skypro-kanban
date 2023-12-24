// import styled, { css } from "styled-components";
import styled from "styled-components";
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

// export const hover01 = css`
//   background-color: #33399b;
// `
// export const hover02 = css`
//   color: #33399b;
// `
// export const hover03 = css`
//   background-color: #33399b;
//   color: #FFFFFF;
// `