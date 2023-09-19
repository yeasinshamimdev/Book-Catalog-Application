"use client";

import * as React from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../lib/firebase";
import { cn } from "../lib/utils";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

type UserAuthFormProps = React.HTMLAttributes<HTMLDivElement>;

interface LoginFormInputs {
  email: string;
  password: string;
}

export function LoginForm({ className, ...props }: UserAuthFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();
  const navigate = useNavigate();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  const onSubmit = (data: LoginFormInputs) => {
    signInWithEmailAndPassword(data.email, data.password);
    console.log(data);
  };

  if (user || googleUser) {
    navigate("/");
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className=" text-sm " htmlFor="email">
              Email
            </Label>
            <Input
              className="bg-indigo-100 p-2 font-medium "
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-sm mt-1 text-red-900">
                {errors.email.message}
              </p>
            )}
            <Label className="mt-2 text-sm " htmlFor="email">
              Password
            </Label>
            <Input
              className="bg-indigo-100 p-2 font-medium "
              id="password"
              placeholder="password"
              minLength={6}
              type="password"
              autoCapitalize="none"
              autoCorrect="off"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <p className="text-sm mt-1 text-red-900">
                {errors.password.message}
              </p>
            )}
            {(error || googleError) && (
              <div>
                <p className="text-sm mt-1 text-red-900">
                  {error?.message}
                  {googleError?.message}
                </p>
              </div>
            )}
          </div>
          <Button className="mt-4 bg-sky-600 hover:bg-green-700">
            {loading || googleLoading ? <p>Loading...</p> : <p> Login</p>}
          </Button>
        </div>
      </form>
      <div className="flex">
        <p className="text-sm">Create Eco-book account?</p>
        <Link to="/sign-up" className="ml-2 text-sm underline">
          sign up
        </Link>
      </div>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 border-r-2">
            Or continue with
          </span>
        </div>
      </div>

      <Button
        type="button"
        className="flex items-center justify-center gap-1 bg-blue-600 hover:bg-blue-500"
        onClick={() => signInWithGoogle()}
      >
        <FcGoogle size={20} />
        <p>Google</p>
      </Button>
    </div>
  );
}
