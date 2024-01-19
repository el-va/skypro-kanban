import { useState } from "react";
import {
  HeaderBlock,
  HeaderButtonMainNew,
  // HeaderLogo,
  // HeaderLogoImg,
  HeaderNav,
  // HeaderPopUserSet,
  // HeaderPopUserSetButton,
  // HeaderPopUserSetButtonA,
  HeaderPopUserSetMail,
  HeaderPopUserSetName,
  // HeaderPopUserSetTheme,
  HeaderPopUserSetThemeInput,
  HeaderPopUserSetThemeP,
  // HeaderUserA,
  StyledHeader,
} from "./Header.styled";
import { ContainerContainer } from "../Common/Common.styled";
import { AppRoutes } from "../../lib/Approutes";
import { Link } from "react-router-dom";
// import PopExit from "../PopExit/PopExit";

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
              <Link to={AppRoutes.ADD_CARD}>Создать новую задачу</Link>
              {/* <a onClick={addCards}>Создать новую задачу</a> */}
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
                {/* <!-- <a href=""/a> --> */}
                <HeaderPopUserSetName>Ivan Ivanov</HeaderPopUserSetName>
                <HeaderPopUserSetMail>
                  ivan.ivanov@gmail.com
                </HeaderPopUserSetMail>
                <div className="pop-user-set__theme">
                  <HeaderPopUserSetThemeP>Темная тема</HeaderPopUserSetThemeP>
                  <HeaderPopUserSetThemeInput
                    type="checkbox"
                    className="checkbox"
                    name="checkbox"
                  />
                </div>
                <button type="button" className="_hover03">
                  {/* <a href="#popExit">Выйти</a> */}
                  {/* <a onClick={PopExit}>Выйти</a> */}
                  <Link to={AppRoutes.EXIT}>Выйти</Link>
                </button>
              </div>
            )}
          </HeaderNav>
        </HeaderBlock>
      </ContainerContainer>
    </StyledHeader>
  );
}
