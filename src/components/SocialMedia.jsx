import React from "react";
import { Icon } from "@iconify/react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://twitter.com/33_souvik"><BsTwitter/></a>
      </div>
      {/* <div>
        <a href="https://www.facebook.com/souvik.chandra.9421/"><FaFacebook /></a>
      </div> */}
      <div>
        <a href="https://www.linkedin.com/in/chandra-souvik/"><FaLinkedin /></a>
      </div>
      <div>
        <a href="https://www.instagram.com/my_name_is_sc_/"><BsInstagram /></a>
      </div>
      <div>
        <a href="https://github.com/SouvikChan"><FaGithub /></a>
      </div>
      <div>
        <a href="https://leetcode.com/SouvikChandra/"><Icon icon="simple-icons:leetcode" /></a>
      </div>
      <div>
        <a href="https://codeforces.com/profile/SouvikCH"><Icon icon="simple-icons:codeforces" /></a>
      </div>
      <div>
        <a href="https://www.codechef.com/users/souvikch30"><Icon icon="simple-icons:codechef" /></a>
      </div>
    </div>
  );
};

export default SocialMedia;
