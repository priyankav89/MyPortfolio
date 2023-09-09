import React from "react";
import { VscGithubAlt } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <p>
        <ul>
          <a href="https://github.com/priyankav89">
            <li className="socialLinks">
              <VscGithubAlt />
            </li>
          </a>
          <a href="https://www.linkedin.com/">
            <li className="socialLinks">
              <AiOutlineLinkedin />
            </li>
          </a>
          <a href="https://www.instagram.com/">
            <li className="socialLinks">
              <FaInstagram />
            </li>
          </a>
        </ul>
      </p>
    </footer>
  );
}