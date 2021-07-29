import React from "react";
function NavBar() {
  const links = ["home", "about", "projects"];
let linkers=links.map((link) =>(
  <a key={link} href={"#"+link}>{link}</a>
));
  return <nav>{linkers}</nav>;
}
export default NavBar;
