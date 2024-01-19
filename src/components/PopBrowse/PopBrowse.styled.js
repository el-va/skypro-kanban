import styled from "styled-components";
import { Subttl, hover01, hover03 } from "../Common/Common.styled";
import { breakpoints } from "../../lib/breakpoints";

export const PopPopBrowse = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 7;
`;
export const PopBrowseContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
`;
export const PopBrowseBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 38px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  position: relative;
`;
export const PopBrowseContent = styled.div`
  display: block;
  text-align: left;
`;
export const PopBrowseTopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;
export const PopBrowseTtl = styled.h3`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;
export const Status = styled.div`
  margin-bottom: 11px;
`;
export const StatusP = styled(Subttl)`
  margin-bottom: 14px;
`;
export const StatusThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`;
export const StatusTheme = styled.div`
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  color: #94a6be;
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;
`;
export const StatusThemeP = styled.div`
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
`;
export const StatusThemeHide = styled(StatusTheme)`
  display: none;
`;
export const StatusThemeGray = styled(StatusTheme)`
  background: #94a6be;
  color: #ffffff;
`;
export const PopBrowseWrap = styled.div`
  display: block;

  @media screen and (max-width: ${breakpoints.lg}px) {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
`;
export const PopBrowseForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
`;
export const FormBrowseFormBlock = styled.form`
  display: flex;
  flex-direction: column;
`;
export const FormBrowseFormArea = styled.textarea`
  max-width: 370px;
  width: 100%;
  outline: none;
  padding: 14px;
  background: #eaeef6;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 200px;
`;

export const NavActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const NavAction = styled.div`
  width: 18px;
  height: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const NavActionSvg = styled.div`
  fill: #94a6be;
`;
export const PopBrowseBtnBrowse = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
`;

export const PopBrowseBtnEdit = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
`;
export const PopBrowseBtnGroup = styled.div`
  width: 100%;
`;
export const PopBrowseBtnBor = styled.button`
  border-radius: 4px;
  border: 0.7px solid var(--palette-navy-60, #565eef);
  outline: none;
  background: transparent;
  color: #565eef;

  ${hover03}
`;
export const PopBrowseBtnBorA = styled.a`
  color: #565eef;
`;
export const PopBrowseBtnBg = styled.button`
  border-radius: 4px;
  background: #565eef;
  border: none;
  outline: none;
  color: #ffffff;

  ${hover01}
`;
export const PopBrowseBtnBgA = styled.a`
  color: #ffffff;
`;
export const PopBrowseBtnEditHide = styled(PopBrowseBtnEdit)`
  display: none;
`;
