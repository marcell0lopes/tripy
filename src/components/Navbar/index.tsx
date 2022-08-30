import React from "react";
import { Container, Logo, Navigation, NavLink, Button, Login } from "./styles";
import TripyLogo from "../../assets/Logo.png";

export default function Navbar() {
  return (
    <Container>
      <Logo src={TripyLogo} />
      <Navigation>
        <NavLink active={true}> Home </NavLink>
        <NavLink active={false}> About </NavLink>
        <NavLink> Services </NavLink>
        <NavLink> Price </NavLink>
        <NavLink> Contact </NavLink>
      </Navigation>
      <Login>
        <Button highlight={false}>Login</Button>
        <Button highlight={true}>Register</Button>
      </Login>
    </Container>
  );
}
