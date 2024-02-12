import { useState } from "react";
import {
  HeaderBlock,
  HeaderButtonMainNew,
  HeaderButtonMainNewLink,
  HeaderExitBtn,
  HeaderExitBtnLink,
  HeaderNav,
  HeaderPopUserSetMail,
  HeaderPopUserSetName,
  HeaderPopUserSetThemeInput,
  HeaderPopUserSetThemeP,
  StyledHeader,
} from "./Header.styled";
import { ContainerContainer } from "../Common/Common.styled";
import { AppRoutes } from "../../lib/AppRoutes";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <StyledHeader>
      <ContainerContainer>
        <HeaderBlock>
          <div className="header__logo _show _light">
            <a href="" target="_self">
              <img src="images/logo.png" alt="logo" />
            </a>
          </div>
          <div className="header__logo _dark">
            <a href="" target="_self">
              <img src="images/logo_dark.png" alt="logo" />
            </a>
          </div>
          <HeaderNav>
            <HeaderButtonMainNew id="btnMainNew">
              <HeaderButtonMainNewLink to={AppRoutes.ADD_CARD}>
                Создать новую задачу
              </HeaderButtonMainNewLink>
            </HeaderButtonMainNew>
            <a
              onClick={toggleDropdown}
              href="#user-set-target"
              className="header__user _hover02"
            >
              Ivan Ivanov
            </a>
            {isOpen && (
              <div
                className="header__pop-user-set pop-user-set"
                id="user-set-target"
              >
                <HeaderPopUserSetName>Ivan Ivanov</HeaderPopUserSetName>
                <HeaderPopUserSetMail>
                  ivan.ivanov@gmail.com
                </HeaderPopUserSetMail>
                <div className="pop-user-set__theme">
                  <HeaderPopUserSetThemeP>Темная тема</HeaderPopUserSetThemeP>
                  <HeaderPopUserSetThemeInput
                    type="checkbox"
                    // className="checkbox"
                    name="checkbox"
                  />
                </div>
                <HeaderExitBtn>
                  {/* <a onClick={PopExit}>Выйти</a> */}
                  <HeaderExitBtnLink to={AppRoutes.EXIT}>
                    Выйти
                  </HeaderExitBtnLink>
                </HeaderExitBtn>
              </div>
            )}
          </HeaderNav>
        </HeaderBlock>
      </ContainerContainer>
    </StyledHeader>
  );
}
