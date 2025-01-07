import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="border-[2px] border-gray-500 rounded-md p-10">
        <div>
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex justify-around">
              <h3 className="font-bold text-4xl">
                Welcome to the bookStore..🎉
              </h3>
              <Link to="/" className="btn btn-sm btn-circle btn-ghost">
                ✕
              </Link>
            </div>

            {/* fullname */}
            <div className="mt-5 space-y-2">
              <span className="text-blue-500">Full Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter your Full Name"
                className="w-full px-3 py-1 bg-zinc-700 rounded-md outline-none"
                name="fullname"
                {...register("fullname", { required: true })}
              />
              {errors.fullname && <span className="text-red-500">This field is required</span>}
            </div>
            {/* Email */}
            <div className="mt-5 space-y-2">
              <span className="text-blue-500">Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your Email"
                className="w-full px-3 py-1 bg-zinc-700 rounded-md outline-none"
                name="email"
                {...register("email", { required: true })}
              />
              {errors.email && <span className="text-red-500">This field is required</span>}    
            </div>
            {/* Password */}
            <div className="mt-8 space-y-2">
              <span className="text-blue-500">Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your Password"
                className="w-full px-3 py-1 bg-zinc-700 rounded-md outline-none"
                name="password"
                {...register("password", { required: true })}
              />
              {errors.password && <span className="text-red-500">This field is required</span>}
            </div>
            {/* Login Button */}
            <div className="mt-10 flex justify-around gap-2">
              <button className="bg-blue-500 text-white px-6 py-2 rounded-md font-bold">
                SignUp
              </button>
              <p>
                Already Registered?{" "}
                <Link
                  to="/"
                  className="text-blue-500 cursor-pointer hover:underline"
                >
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
