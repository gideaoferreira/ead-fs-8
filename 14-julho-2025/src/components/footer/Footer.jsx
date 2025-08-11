import Logo from "./Logo";
import MenuLinks from "./MenuLinks";
import Newsletter from "./Newsletter";
import SocialMedia from "./SocialMedia";

function Footer() {
  return (
    <footer className="px-3 bg-secondary text-white py-3 d-flex gap-2 mt-5">
        <Logo />
        <MenuLinks />
        <SocialMedia />
        <Newsletter />
    </footer>
  );    
}

export default Footer;
