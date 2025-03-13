import React from "react";
import Link from "../Link";

export default function Footer() {
  return (
    <footer className="row bg-footer yellow-hexagone container-fluid m-0 pb-3">
      <div className="col-md-4 text-center">
        <h5 className="my-3">A propos :</h5>
        <div className="mb-3">
          <Link link="/legalnotice" description="Mention légales" />
          <br />
          <Link
            link="/privacypolicy"
            description="Politique de confidentialité"
          />
        </div>
      </div>
      <div className="col-md-4 text-center">
        <h5 className="my-3">Nos Réseaux :</h5>
        <a
          className="mx-5"
          href="https://www.instagram.com/bde_hexagone_versailles/?igsh=MXFpcW0xNjJjXNuZg%3D%3D"
          target="_blank"
        >
          <img
            src="https://www.svgrepo.com/show/452229/instagram-1.svg"
            alt="logo insta"
            style={{ width: "3rem" }}
          />
        </a>
        <a
          className="mx-5"
          href="https://discord.com/invite/Kpz55qrRK2"
          target="_blank"
        >
          <img
            src="https://www.svgrepo.com/show/343548/discord-communication-interaction-message-network.svg"
            alt="logo discord"
            style={{ width: "3rem" }}
          />
        </a>
      </div>
      <div className="col-md-4 text-center">
        <h5 className="my-3">Nous contacter :</h5>
        <a
          className="email-footer yellow-hexagone"
          href="mailto:bde-versailles@ecole-hexagone.com"
        >
          bde-versailles@ecole-hexagone.com
        </a>
      </div>
    </footer>
  );
}
