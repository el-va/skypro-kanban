import { useState } from "react";
import { HeaderBlock, HeaderButtonMainNew, HeaderLogo, HeaderLogoImg, HeaderNav, HeaderPopUserSet, HeaderPopUserSetButton, HeaderPopUserSetButtonA, HeaderPopUserSetMail, HeaderPopUserSetName, HeaderPopUserSetTheme, HeaderPopUserSetThemeInput, HeaderPopUserSetThemeP, HeaderUserA, StyledHeader } from "./Header.styled";
import { ContainerContainer } from "../Common/Common.styled";

export default function Header({ addCards }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <StyledHeader>
      <ContainerContainer>
        <HeaderBlock>
          <HeaderLogo>
            <a href="" target="_self">
              <HeaderLogoImg src="images/logo.png" alt="logo" />
            </a>
          </HeaderLogo>
          <HeaderLogo>
            <a href="" target="_self">
              <HeaderLogoImg src="images/logo_dark.png" alt="logo" />
            </a>
          </HeaderLogo>
          <HeaderNav>
            <HeaderButtonMainNew>
              <a onClick={addCards}>Создать новую задачу</a>
            </HeaderButtonMainNew>
            <HeaderUserA
              onClick={toggleDropdown}
              href="#user-set-target"
            >
              Ivan Ivanov
            </HeaderUserA>
            {isOpen && (
              <HeaderPopUserSet
                id="user-set-target"
              >
                {/* <!-- <a href="">x</a> --> */}
                <HeaderPopUserSetName>Ivan Ivanov</HeaderPopUserSetName>
                <HeaderPopUserSetMail>ivan.ivanov@gmail.com</HeaderPopUserSetMail>
                <HeaderPopUserSetTheme>
                  <HeaderPopUserSetThemeP>Темная тема</HeaderPopUserSetThemeP>
                  <HeaderPopUserSetThemeInput type="checkbox" className="checkbox" name="checkbox" />
                </HeaderPopUserSetTheme>
                <HeaderPopUserSetButton>
                  <HeaderPopUserSetButtonA href="#popExit">Выйти</HeaderPopUserSetButtonA>
                </HeaderPopUserSetButton>
              </HeaderPopUserSet>
            )}
          </HeaderNav>
        </HeaderBlock>
      </ContainerContainer>
    </StyledHeader>
  );
}
