import { useState } from "react";
import { HeaderBlock, HeaderNav, StyledHeader } from "./Header.styled";
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
            <button className="header__btn-main-new _hover01" id="btnMainNew">
              <a onClick={addCards}>Создать новую задачу</a>
            </button>
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
                {/* <!-- <a href="">x</a> --> */}
                <p className="pop-user-set__name">Ivan Ivanov</p>
                <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
                <div className="pop-user-set__theme">
                  <p>Темная тема</p>
                  <input type="checkbox" className="checkbox" name="checkbox" />
                </div>
                <button type="button" className="_hover03">
                  <a href="#popExit">Выйти</a>
                </button>
              </div>
            )}
          </HeaderNav>
        </HeaderBlock>
      </ContainerContainer>
    </StyledHeader>
  );
}
