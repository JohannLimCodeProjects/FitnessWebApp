import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>Built and designed by Johann Lim</p>
      <p>All rights reserved. ©</p>
    </footer>
  );
}

export default Footer;
