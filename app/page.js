import Image from "next/image";
import Logo from "/logo.png";
import Logow from "/logow.png";
import About from "/aboutus.jpg";
import { RxHamburgerMenu } from "react-icons/rx";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
export default function Home() {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <section>
         <nav className="flex items-center justify-center">
          <div className="  bg-white pb-10 pt-5">
            <Image className="h-20 w-20 " src={Logo}></Image>
          </div>
          <div id="links" className="lg:m-20 littlefont text-lg">
            <a href="#" className="ml-10">
              Home
            </a>
            <a href="#" className="ml-10">
              About Us
            </a>
            <a href="#" className="ml-10">
              Programs
            </a>
            <a href="#" className="ml-10">
              Gracie History
            </a>
          </div>

          <div className="ml-40 flex littlefont">
            <div className="m-5 mt-7 text-xl">
              <HiMagnifyingGlass />
            </div>
            <div className="m-5 border border-black p-1">Call Us Today</div>
          </div>
        </nav> 


      </section>
      <section className="text-white">
        <div id="hero" className="w-full ">
          <div className="">
            <h1 className=" bigfont text-6xl pt-60 pl-40">
              Get Ready To Train
            </h1>
            <p className="pl-40 mt-5 littlefont text-xl">
              Lorem ipsum dolor sit amet sed, adipiscing elit, sed do eiusmod
              tempor <br /> incididunt ut labore et dolore magna aliqua ut enim
              ad.
            </p>
            <button className="ml-40 mt-5 border p-1 "> Call Us Today</button>
          </div>
        </div>
      </section>

      <section className="pt-40">
        <div className="flex justify-center flex-wrap-reverse">
          <div className="mr-20">
            <Image src={About} className="w-80 pt-10"></Image>
          </div>

          <div className="m-10">
            <h2 className="bigfont text-4xl mt-20">
              {" "}
              We offer more than just self defence
            </h2>
            <p className="mt-10 littlefont text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac enim
              aliquam feugiat
            </p>
            <p className="mt-5 littlefont text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button className=" mt-5 border border-black p-1 ">
              {" "}
              Call Us Today
            </button>
          </div>
        </div>
      </section>

      <section>
        <div>
          <p className="bigfont text-center text-xl pt-40">why choose us?</p>
          <h1 className="bigfont text-center text-3xl">
            Get all you need at one gym
          </h1>
          <div className="flex justify-center pb-20 flex-wrap">
            <div
              className="bigfont pt-5 m-4 w-80 h-60 text-center text-white text-3xl mt-20"
              id="bjj"
            >
              {" "}
              jiu jitsu
            </div>
            <div
              className="bigfont pt-5 m-4 w-80 h-60 text-center text-white text-3xl mt-20"
              id="mt"
            >
              {" "}
              muy thia
            </div>
            <div
              className="bigfont pt-5 m-4 w-80 h-60 text-center text-white text-3xl mt-20"
              id="wr"
            >
              {" "}
              wrestling
            </div>
            <div
              className="bigfont pt-5 m-4 w-80 h-60 text-center text-white text-3xl mt-20"
              id="yg"
            >
              {" "}
              yoga
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-stone-700 bigfont">
        <div className="p-10 flex justify-between mx-auto flex-wrap max-w-screen-lg">
          <div className="">
            <Image src={Logow} className="w-20"></Image>
            <div className="text-xs w-60 text-white mt-6">
              Lorem losum dolor sit amet conse cietur adipiscing elit. Viverra
              laoreet ultrices conec olacerat commodo elementum juste, consequa
            </div>
            <div className="text-white flex mt-4">
              <FaFacebook className="mr-3 text-lg" />
              <FaTwitter className="mr-3 text-lg" />
              <PiInstagramLogoFill className=" text-lg" />
            </div>
          </div>

          <div className="text-white mt-6 ">
            <h4 className="text-4xl">our services</h4>
            <ul className="mt-4">
              <li className="mt-2">Jiu Jitsu</li>
              <li className="mt-2">muy thai</li>
              <li className="mt-2">Wrestling</li>
              <li className="mt-2">Yoga</li>
            </ul>
          </div>

          <div className="text-white text-sm mt-6">
            <h4 className="text-4xl">Contact</h4>
            <div className="mt-4">
              68D, Belsion Town 2365 Fna city, LH 3656,
            </div>
            <div className="mt-4">+8 (123) 123 456 789</div>
            <div className="mt-4">bjj@gmail.com</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
