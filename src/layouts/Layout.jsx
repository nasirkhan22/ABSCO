import React from "react";
import Linkedin from "@assets/svgs/linkedin.svg?react";
import Instagram from "@assets/svgs/instagram.svg?react";
import Facebook from "@assets/svgs/facebook.svg?react";
import Twitter from "@assets/svgs/Twitter.svg?react";
import ABSCO from "@assets/svgs/absco.svg?react";
import CallIcon from "@assets/svgs/wattsapp.svg?react";
import Emailicon from "@assets/svgs/email.svg?react";
import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <div className="font-cairoRegular bg-transparent">
      <header className="">
        <div className="flex justify-between items-center p-[20px_100px_10px_100px] border-b border-[#27A8E0]">
          <div className="flex items-center gap-11">
            <div className="flex justify-center items-center gap-2">
              <CallIcon />
              <span className="primary-text">+966 (0) 11 200 0029</span>
            </div>
            <div className="flex justify-center items-center gap-2">
              <Emailicon />
              <span className="primary-text">+966 (0) 11 200 0029</span>
            </div>
          </div>
          <div className="flex gap-4">
            <Instagram />
            <Twitter />
            <Facebook />
            <Linkedin />
          </div>
        </div>
        <div className="flex justify-between p-[30px_100px_100px_100px]">
          <ABSCO />
          <div className="flex items-center gap-10">
            <Link className="primary-text text-lg">Home</Link>
            <Link className="primary-text text-lg">About Us</Link>
            <Link className="primary-text text-lg">Services</Link>
            <Link className="primary-text text-lg">Business License</Link>
            <Link className="primary-text text-lg">FAQs</Link>
            <Link className="primary-text text-lg">Contact Us</Link>
          </div>
        </div>
      </header>
      {children}
      {/* <footer></footer> */}
    </div>
  );
}
