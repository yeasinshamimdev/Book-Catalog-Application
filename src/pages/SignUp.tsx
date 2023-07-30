import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import signupImage from "../assets/sign.jpg";
import { SignupForm } from "../components/SignUpForm";

export default function Signup() {
  return (
    <>
      <div className="container md:h-full lg:h-screen flex-col items-center  md:grid lg:grid-cols-2 lg:px-0 bg-indigo-400 lg:min-w-full">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div
            className="absolute inset-0 bg-cover"
            style={{
              backgroundImage: `url(${signupImage})`,
            }}
          />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <Link to={"/"}>
              <img className="h-24" src={logo} alt="" />
            </Link>
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2"></blockquote>
          </div>
        </div>
        <div className="lg:p-8 ">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-3xl mb-2 font-semibold tracking-tight ">
                Create Eco-book Account
              </h1>
            </div>
            <SignupForm />
            <div className="flex gap-2">
              <input type="checkbox" name="terms" id="terms" />
              <p className="text-xs text-black text-muted-foreground">
                By clicking continue, you agree to our{" "}
                <Link
                  to="/terms"
                  className="underline underline-offset-4 hover:text-primary"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  to="/privacy"
                  className="underline underline-offset-4 hover:text-primary"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
