import React from "react";
import * as FaIcons from "react-icons/fa";

function Footer() {
  return (
    <footer className="app-footer">
      <div className="footer-buttons">
        <div className="social-media-button">
          <a href="https://www.facebook.com/piotr.bator.33/" target="blank">
            <FaIcons.FaFacebookF />
          </a>
        </div>
        <div className="social-media-button">
          <a href="https://github.com/mizuris/boredom-app" target="blank">
            <FaIcons.FaGithub />
          </a>
        </div>
        <div className="social-media-button">
          <a
            href="https://www.linkedin.com/in/piotr-b%C4%85tor-b4b95620a/"
            target="blank"
          >
            <FaIcons.FaLinkedinIn />
          </a>
        </div>
      </div>
      <div className="footer-text">
        <p>App created with React. Check social media and repository above.</p>
        <p>
          Author: <strong>Piotr Bątor.</strong>
        </p>
      </div>
    </footer>
  );
}

export default Footer;

//<Container className="p-3">
// <div className="mb-4">
//   <Button
//     href="https://www.facebook.com/piotr.bator.33/"
//     target="blank"
//     className="m-1"
//     variant="outline-light"
//   >
//     <FaIcons.FaFacebookF />
//   </Button>
//   <Button
//     href="https://github.com/mizuris/car-wallet-react"
//     target="blank"
//     className="m-1"
//     variant="outline-light"
//   >
//     <FaIcons.FaGithub />
//   </Button>
//   <Button
//     href="https://www.linkedin.com/in/piotr-b%C4%85tor-b4b95620a/"
//     target="blank"
//     className="m-1"
//     variant="outline-light"
//   >
//     <FaIcons.FaLinkedinIn />
//   </Button>
// </div>
// <div className="footer-text">
//   <p>
//     App created with React and Bootstrap. Check social media and
//     repository above!
//   </p>
//   <p>
//     Author: <strong>Piotr Bątor.</strong>
//   </p>
// </div>
// </Container>
// <div className="footer-text text-center p-3">
// © 2021 Copyright <strong>CarWallet</strong>
// </div>
