"use client";

import * as React from "react";
import {
  useCreateUserWithEmailAndPassword,
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
import { useToast } from "./ui/use-toast";

type UserAuthFormProps = React.HTMLAttributes<HTMLDivElement>;

interface SignupFormInputs {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export function SignupForm({ className, ...props }: UserAuthFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormInputs>();
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const { toast } = useToast();

  const onSubmit = async (data: SignupFormInputs) => {
    if (data.password !== data.confirmPassword) {
      return alert("Password and Confirm Password not match");
    }
    createUserWithEmailAndPassword(data.email, data.password);
  };

  if (user || googleUser) {
    navigate("/");
    toast({
      description: "User created successfully",
    });
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <div className="flex gap-4 mb-2">
              <div>
                <Label className=" text-sm " htmlFor="email">
                  First Name
                </Label>
                <Input
                  className="bg-indigo-100 p-2 font-medium "
                  id="firstName"
                  placeholder="John"
                  type="text"
                  autoCapitalize="none"
                  autoCorrect="off"
                  {...register("firstName", {
                    required: "First name is required",
                  })}
                />
                {errors.firstName && (
                  <p className="text-sm mt-1 text-red-900">
                    {errors.firstName.message}
                  </p>
                )}
              </div>
              <div>
                <Label className=" text-sm " htmlFor="email">
                  Last name
                </Label>
                <Input
                  className="bg-indigo-100 p-2 font-medium "
                  id="lastName"
                  placeholder="Doe"
                  type="text"
                  autoCapitalize="none"
                  autoCorrect="off"
                  {...register("lastName", {
                    required: "Last name is required",
                  })}
                />
                {errors.lastName && (
                  <p className="text-sm mt-1 text-red-900">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>
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
            <Label className="mt-2 text-sm " htmlFor="email">
              Confirm Password
            </Label>
            <Input
              className="bg-indigo-100 p-2 font-medium "
              id="password"
              placeholder="confirm password"
              type="password"
              autoCapitalize="none"
              autoCorrect="off"
              {...register("confirmPassword", {
                required: "Confirm password is required",
              })}
            />
            {errors.confirmPassword && (
              <p className="text-sm mt-1 text-red-900">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
          {(error || googleError) && (
            <div>
              <p className="text-sm mt-1 text-red-900">
                {error?.message}
                {googleError?.message}
              </p>
            </div>
          )}
          <Button className="mt-4 bg-sky-600 hover:bg-green-700" type="submit">
            {loading || googleLoading ? (
              <p>Loading...</p>
            ) : (
              <p> Create Account</p>
            )}
          </Button>
        </div>
      </form>
      <div className="flex">
        <p className="text-sm">Already a member?</p>
        <Link to="/login" className="ml-2 text-sm underline">
          Login
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
