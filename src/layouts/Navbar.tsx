import { HiOutlineSearch } from "react-icons/hi";
import { Link } from "react-router-dom";
import userIcon from "../assets/user-icon.png";
import Cart from "../components/Cart";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Button } from "../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import logo from "./../assets/logo.png";

export default function Navbar() {
  return (
    <nav className=" w-full h-16 fixed top backdrop-blur-lg z-10">
      <div className="h-full w-full bg-white/60">
        <div className="flex items-center justify-between w-full md:max-w-7xl h-full mx-auto ">
          <div>
            <Link to={"/"}>
              <img className="h-28 logo" src={logo} alt="log" />
            </Link>
          </div>
          <div>
            <ul className="flex items-center">
              <li>
                <Button variant="link" asChild>
                  <Link to="/">Home</Link>
                </Button>
              </li>
              <li>
                <Button variant="link" asChild>
                  <Link to="/products">Products</Link>
                </Button>
              </li>
              <li>
                <Button variant="link" asChild>
                  <Link to="/checkout">Checkout</Link>
                </Button>
              </li>
              <li className="flex items-center justify-center">
                <input
                  className="rounded focus:outline-none px-2 py-1"
                  type="search"
                  name="search"
                  id="search"
                />
                <Button variant="ghost">
                  <HiOutlineSearch size="25" />
                </Button>
              </li>
              <li>
                <Cart />
              </li>
              <li className="ml-5">
                <DropdownMenu>
                  <DropdownMenuTrigger className="outline-none">
                    <Avatar>
                      <AvatarImage src={userIcon} />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="cursor-pointer">
                      Profile
                    </DropdownMenuItem>
                    <Link to="/login">
                      <DropdownMenuItem className="cursor-pointer">
                        Login
                      </DropdownMenuItem>
                    </Link>
                    <Link to="/sign-up">
                      <DropdownMenuItem className="cursor-pointer">
                        SignUp
                      </DropdownMenuItem>
                    </Link>
                    <Link to="/">
                      <DropdownMenuItem className="cursor-pointer">
                        Logout
                      </DropdownMenuItem>
                    </Link>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
