import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <div className="bg-[#242630] text-secondary px-20 pt-20 pb-8">
      <div className="flex justify-between">
        <div>
          <Link to={"/"}>
            <img className="h-24" src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="flex gap-20">
          <ul className="space-y-2">
            <li className="cursor-pointer">Upcoming</li>
            <li className="cursor-pointer">Shipping</li>
            <li className="cursor-pointer">How it works</li>
          </ul>
          <ul className="space-y-2">
            <li className="cursor-pointer">Support</li>
            <li className="cursor-pointer">Careers</li>
          </ul>
          <ul className="space-y-2">
            <li className="cursor-pointer">List your gear</li>
            <li className="cursor-pointer">Contact team</li>
          </ul>
        </div>
        <div className="flex gap-2 ">
          <ul className="space-y-2">
            <li className="cursor-pointer">About Us</li>
            <li className="cursor-pointer">Contact Us</li>
            <li className="cursor-pointer">Affiliates</li>
            <li className="cursor-pointer">Resouces</li>
          </ul>
        </div>
      </div>
      <div className="flex w-full mt-20 gap-5">
        <p className="cursor-pointer">Privacy Policy</p>
        <p className="cursor-pointer">Terms & Condition</p>
        <p className="ml-auto"> &#169; Eco Book {2023}</p>
      </div>
    </div>
  );
}
