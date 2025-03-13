import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "../Link";
import LinkLogo from "../LinkLogo";
import LogoutButton from "../../Log/LogoutButton";

export default function NavBar() {
  return (
    <Navbar expand="lg" className="bg-nav-bar">
      <Container>
        <LinkLogo link="/" />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link link="/photo" description="Photo" />
            <Link link="/ticket" description="Ticket" />
            <Link link="/event" description="Évènement" />
            <Link link="/activity" description="Communauté" />
            <Link link="/shop" description="Boutique" />
            <Link link="/account" description="Mon compte" />
          </Nav>
          <Nav>
            <div className="ms-auto-lg">
              <LogoutButton />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
