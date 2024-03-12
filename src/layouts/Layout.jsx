import React from "react";
import Linkedin from "@assets/svgs/linkedin.svg?react";
import Instagram from "@assets/svgs/instagram.svg?react";
import Facebook from "@assets/svgs/facebook.svg?react";
import Twitter from "@assets/svgs/Twitter.svg?react";
import ABSCO from "@assets/svgs/absco.svg?react";
import CallIcon from "@assets/svgs/wattsapp.svg?react";
import Emailicon from "@assets/svgs/email.svg?react";
import { Link, useLocation } from "react-router-dom";

import BgImage from "@assets/images/background.png";
import { Button } from "antd";
import RightArrow from "@assets/svgComponents/RightArrow";

export default function Layout({ children }) {
  const { pathname } = useLocation()
  console.log("🚀 ~ Layout ~ pathname:", pathname)
  return (
    <div className="font-cairoRegular bg-transparent">
      <header
        style={{
          backgroundImage: `url(${pathname === '/' ? BgImage : 'blue'})`,
        }}
        className={` z-[-1] h-screen bg-cover bg-no-repeat bg-center w-full`}
      >
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
        {
          pathname === '/' ?
            <div className="flex flex-col gap-5 pl-[100px]">
              <h1 className="text-6xl font-extrabold text-white tracking-wider">
                Partner With Us for <br /> Seamless{" "}
                <span className="text-[#E5D608]">
                  Company <br /> Formation
                </span>
              </h1>
              <p className="text-[#ECECEC] text-lg">
                Driven by <strong> Saudi Vision 2030, ABSCO </strong> is KSA’s
                recognized <br /> leader in business expansion. Based in Riyadh, we{" "}
                <br /> simplify your journey into the Kingdom.
              </p>

              <div className="flex items-center gap-8">
                <Button className="primary-btn w-[270px] h-12">
                  Book an Appointment
                  <RightArrow className={"rightArrow"} />
                </Button>
                <Button className="seconday-btn">Learn More</Button>
              </div>
            </div>
            :
            <span>other routes</span>
        }
      </header>
      {children}
      {/* <footer></footer> */}
    </div>
  );
}
