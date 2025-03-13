import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "../General/Link";
import LinkLogo from "../General/LinkLogo";

export default function BackNavBar() {
  // Rendering a navigation bar component for the back office
  return (
    <Navbar expand="lg" className="bg-nav-bar">
      <Container>
        {/* Rendering a logo link for navigating to the back office home */}
        <LinkLogo link="/back" />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* Rendering navigation links for different sections of the back office */}
            <Link link="/backphoto" description="Photo" />
            <Link link="/back/ticket" description="Ticket" />
            <Link link="/back/activity" description="Activité" />
            <Link link="/shop/back" description="Boutique" />
            <Link link="/event/back" description="Évènement" />
            <Link link="/role-management" description="Gestion des rôles" />
            <Link
              link="/log/read-all"
              description="Gestions des utilisateurs"
            />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
