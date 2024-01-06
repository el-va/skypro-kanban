import { useState } from "react";
// import { HeaderBlock, HeaderButtonMainNew, HeaderLogo, HeaderLogoImg, HeaderNav, HeaderPopUserSet, HeaderPopUserSetButton, HeaderPopUserSetButtonA, HeaderPopUserSetMail, HeaderPopUserSetName, HeaderPopUserSetTheme, HeaderPopUserSetThemeInput, HeaderPopUserSetThemeP, HeaderUserA, StyledHeader } from "./Header.styled";
// import { ContainerContainer } from "../Common/Common.styled";
// import { AppRoutes } from "../../lib/Approutes";
import { Link } from "react-router-dom";

// import { AppRoutes } from "../../lib/Approutes";
// import PopExit from "../PopExit/PopExit";
import { AppRoutes } from "../../lib/Approutes";

// export default function Header() {
export default function Header({ addCards }) {

  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    // <StyledHeader>
    //   <ContainerContainer>
    //     <HeaderBlock>
    //       <HeaderLogo>
    //         <a href="" target="_self">
    //           <HeaderLogoImg src="images/logo.png" alt="logo" />
    //         </a>
    //       </HeaderLogo>
    //       <HeaderLogo>
    //         <a href="" target="_self">
    //           <HeaderLogoImg src="images/logo_dark.png" alt="logo" />
    //         </a>
    //       </HeaderLogo>
    //       <HeaderNav>
    //         <HeaderButtonMainNew>
    //           <a onClick={addCards}>Создать новую задачу</a>
    //         </HeaderButtonMainNew>
    //         <HeaderUserA
    //           onClick={toggleDropdown}
    //           href="#user-set-target"
    //         >
    //           Ivan Ivanov
    //         </HeaderUserA>
    //         {isOpen && (
    //           <HeaderPopUserSet
    //             id="user-set-target"
    //           >
    //             {/* <!-- <a href="">x</a> --> */}
    //             <HeaderPopUserSetName>Ivan Ivanov</HeaderPopUserSetName>
    //             <HeaderPopUserSetMail>ivan.ivanov@gmail.com</HeaderPopUserSetMail>
    //             <HeaderPopUserSetTheme>
    //               <HeaderPopUserSetThemeP>Темная тема</HeaderPopUserSetThemeP>
    //               <HeaderPopUserSetThemeInput type="checkbox" className="checkbox" name="checkbox" />
    //             </HeaderPopUserSetTheme>
    //             <HeaderPopUserSetButton>
    //               <HeaderPopUserSetButtonA href="#popExit">Выйти</HeaderPopUserSetButtonA>
    //               {/* <Link to={AppRoutes.EXIT}>Выйти</Link> */}
    //             </HeaderPopUserSetButton>
    //           </HeaderPopUserSet>
    //         )}
    //       </HeaderNav>
    //     </HeaderBlock>
    //   </ContainerContainer>
    // </StyledHeader>

<header className="header">
<div className="container">
  <div className="header__block">
    <div className="header__logo _show _light">
      <a href="" target="_self"><img src="images/logo.png" alt="logo"/></a>
    </div>
    <div className="header__logo _dark">
      <a href="" target="_self"><img src="images/logo_dark.png" alt="logo"/></a>
    </div>
    <nav className="header__nav">
      <button className="header__btn-main-new _hover01" id="btnMainNew">
        <a onClick={addCards}>Создать новую задачу</a>
        </button>
      <a onClick={toggleDropdown} href="#user-set-target" className="header__user _hover02">Ivan Ivanov</a>
      {isOpen && (
      <div className="header__pop-user-set pop-user-set" id="user-set-target">
        {/* <!-- <a href="">x</a> --> */}
        <p className="pop-user-set__name">Ivan Ivanov</p>
        <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
        <div className="pop-user-set__theme">
          <p>Темная тема</p>
          <input type="checkbox" className="checkbox" name="checkbox"/>
        </div>
        <button type="button" className="_hover03">
          {/* <a href="#popExit">Выйти</a> */}
          {/* <a onClick={PopExit}>Выйти</a> */}
          <Link to={AppRoutes.EXIT}>Выйти</Link>
          </button>
      </div>
      )}
    </nav>					
  </div>
</div>			
</header>
  );
}
