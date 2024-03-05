import React from "react";
import Linkedin from "@assets/pngs/linkedin.png";
import Instagram from "@assets/pngs/insta.png";
import Facebook from "@assets/pngs/facebook.png";
import Twitter from "@assets/pngs/Twitter.png";
import ABSCO from "@assets/pngs/ABSCO.png";
import Call_Icon from "@assets/pngs/call_icon.png";
import Email_icon from "@assets/pngs/email_icon.png";

import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <div className="font-cairoRegular bg-transparent">
      <header className="">
        <div className="flex justify-between items-center p-[20px_100px_10px_100px] border-b border-[#27A8E0]">
          <div className="flex items-center gap-11">
            <div className="flex justify-center items-center gap-2">
              <img src={Call_Icon} alt="" />
              <span className="primary-text">+966 (0) 11 200 0029</span>
            </div>
            <div className="flex justify-center items-center gap-2">
              <img src={Email_icon} alt="" />
              <span className="primary-text">+966 (0) 11 200 0029</span>
            </div>
          </div>
          <div className="flex gap-4">
            <img src={Instagram} alt="" />
            <img src={Twitter} alt="" />
            <img src={Facebook} alt="" />
            <img src={Linkedin} alt="" />
          </div>
        </div>
        <div className="flex justify-between p-[30px_100px_100px_100px]">
          <img className="w-[125px]" src={ABSCO} alt="" />
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
