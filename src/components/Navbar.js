import React, { useState } from "react";
import styled from "styled-components";
import { Menu, Close } from "@material-ui/icons";
import { users } from "../data";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60px;
  background-color: #002673;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  /* background-color: #1a5dff; */

  ${mobile({ height: "50px", position: "relative" })}
`;

const MenuDisplay = styled.div`
  display: none;
  ${mobile({ display: "block" })}
`;

const Logo = styled.span`
  font-size: 2rem;
  color: #f1f1f1;
  ${mobile({ fontSize: "1.4rem" })}
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  ${mobile({ display: "none" })}
`;

const NavContainer = styled.div`
  display: flex;
`;

const NavItem = styled.li`
  margin-left: 1rem;
`;

const NavItemLink = styled.a`
  color: #f1f1f1;
  font-weight: 300;
  transition: 1.5s all ease;

  &:hover {
    color: #9cafd6;
  }
`;

const NavItemLinkOption = styled.div`
  position: relative;
`;

const NavListOption = styled.div`
  position: absolute;
  top: 180%;
  left: 50%;
  transform: translate(-50%, -10%);
  display: flex;
  flex-direction: column;
  background-color: #002673;
  /* background-color: #ff0000; */
  padding: 0.5rem 1rem;
  opacity: ${(props) => props.display};
  transition: all 0.75s ease;
`;

const NavItemLinkListOption = styled.span`
  color: #f1f1f1;
  font-weight: 1;
  padding: 0.5rem 0;
  cursor: pointer;
`;

const NavUserContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 2rem;
`;

const NavProfileImage = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1rem;
`;

const NavProfileName = styled.span`
  color: #f1f1f1;
`;

const Navbar = () => {
  const [showOptions, setShowOptions] = useState(0);
  const [displayMenu, setDisplayMenu] = useState(false);

  return (
    <Container>
      <MenuDisplay onClick={() => setDisplayMenu(!displayMenu)}>
        {displayMenu ? (
          <Close style={{ color: "#fff" }} />
        ) : (
          <Menu style={{ color: "#fff" }} />
        )}
      </MenuDisplay>
      <div>
        <Logo>SSM</Logo>
      </div>
      <NavContainer>
        <NavList>
          <NavItem>
            <NavItemLink>Accueil</NavItemLink>
          </NavItem>
          <NavItem>
            <NavItemLinkOption>
              <NavItemLink
                onMouseEnter={() => setShowOptions(1)}
                onMouseLeave={() => setShowOptions(0)}
              >
                Departement
              </NavItemLink>
              <NavListOption
                display={showOptions}
                onMouseEnter={() => showOptions === 1 && setShowOptions(1)}
                onMouseLeave={() => showOptions === 1 && setShowOptions(0)}
              >
                <NavItemLinkListOption>Archive</NavItemLinkListOption>
                <NavItemLinkListOption>Caisse</NavItemLinkListOption>
                <NavItemLinkListOption>Comptabilite</NavItemLinkListOption>
                <NavItemLinkListOption>Prefecture</NavItemLinkListOption>
              </NavListOption>
            </NavItemLinkOption>
          </NavItem>
          <NavItem>
            <NavItemLink>S'inscrire</NavItemLink>
          </NavItem>
          <NavItem>
            <NavItemLink>Se Connecter</NavItemLink>
          </NavItem>
        </NavList>
        <NavUserContainer>
          <NavProfileImage src={users[0].image} alt="profile image" />
          <NavProfileName>
            <NavItemLink>{users[0].pseudo}</NavItemLink>
          </NavProfileName>
        </NavUserContainer>
      </NavContainer>
    </Container>
  );
};

export default Navbar;
