import React, { useState } from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 24px;
  position: relative;

  @media only screen and (max-width: 768px) {
    padding: 10px 16px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Logo = styled.img`
  height: 50px;
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const ListItem = styled.li`
  cursor: pointer;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`;

const Button = styled.button`
  font-size: 18px;
  min-width: 130px;
  padding: 14px 24px;
  background-color: #57F287;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    min-width: 0;
    padding: 12px 16px;
    font-size: 15px;
  }
`;

const Hamburger = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 26px;
  line-height: 1;
  cursor: pointer;
  padding: 4px 8px;

  @media only screen and (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.ul`
  display: ${(props) => (props.$open ? "flex" : "none")};
  list-style: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  flex-direction: column;
  gap: 18px;
  padding: 20px 24px;
  background: rgba(10, 5, 20, 0.95);
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  z-index: 10;

  @media only screen and (min-width: 769px) {
    display: none;
  }
`;

const navItems = [
  { label: "Home", id: "home" },
  { label: "Studio", id: "studio" },
  { label: "Works", id: "works" },
  { label: "Contact", id: "contact" },
];

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./img/logo.png" />
          <List>
            {navItems.map((item) => (
              <ListItem key={item.id} onClick={() => scrollTo(item.id)}>
                {item.label}
              </ListItem>
            ))}
          </List>
        </Links>
        <Icons>
          {/* Changed the image due to copyright problems */}
          <Icon src="./img/search.png" />
          <Button>Hire Now</Button>
          <Hamburger
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? "✕" : "☰"}
          </Hamburger>
        </Icons>
        <MobileMenu $open={open}>
          {navItems.map((item) => (
            <ListItem
              key={item.id}
              onClick={() => {
                setOpen(false);
                scrollTo(item.id);
              }}
            >
              {item.label}
            </ListItem>
          ))}
        </MobileMenu>
      </Container>
    </Section>
  );
};

export default Navbar;
