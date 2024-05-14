import React from "react";
import Image from "next/image";
import facebook from "./facebook.svg";
import github from "./github.svg";
import instagram from "./instagram.svg";
import medium from "./medium.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="social-media">
        <span id="social-media-header">Find us on Social Media!</span>
        <div className="social-media-icons-container">
          <a
            href="https://www.instagram.com/acm.ucla/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image
              src={instagram}
              alt="ACM Instagram link"
              className="social-media-icon"
              width={40}
              height={40}
            />
          </a>
          <a
            href="https://www.facebook.com/uclaacm"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image
              src={facebook}
              alt="ACM Facebook link"
              className="social-media-icon"
              width={40}
              height={40}
            />
          </a>
          <a
            href="https://github.com/uclaacm/dev-pathways"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image
              src={github}
              alt="Dev Pathways Github Link"
              className="social-media-icon"
              width={40}
              height={40}
            />
          </a>
          <a
            href="https://medium.com/techatucla"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image
              src={medium}
              alt="ACM Medium Link"
              className="social-media-icon"
              width={40}
              height={40}
            />
          </a>
        </div>
      </div>
      <span className="contribute-form">
        Want to contribute to the site? <br />
        Fill out{" "}
        <a
          href="https://forms.gle/YrLQr8nmDyBEyXs59"
          target="_blank"
          rel="noreferrer noopener"
        >
          this
        </a>{" "}
        form.
      </span>
    </footer>
  );
};

export default Footer;
