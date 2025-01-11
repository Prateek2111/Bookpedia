import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import axios from "axios";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/user/login", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Login successful");
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
        setTimeout(() => {
          window.location.reload();
        }, 500);
      })
      .catch((err) => {
        if (err.response) {
          toast.error("Error : " + err.response.data.message);
        }
      });
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg text-center">
              Once Again Welcome to the bookStore..🎉
            </h3>
            {/* Email */}
            <div className="mt-5 space-y-2">
              <span className="text-blue-500">Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your Email"
                className="w-full px-3 py-1 bg-zinc-700 rounded-md outline-none"
                {...register("email", { required: true })}
                name="email"
              />
              {errors.email && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            {/* Password */}
            <div className="mt-8 space-y-2">
              <span className="text-blue-500">Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your Password"
                className="w-full px-3 py-1 bg-zinc-700 rounded-md outline-none"
                {...register("password", { required: true })}
                name="password"
              />
              {errors.password && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            {/* Login Button */}
            <div className="mt-10 flex justify-around">
              <button className="bg-blue-500 text-white px-6 py-2 rounded-md font-bold">
                Login
              </button>
              <p>
                Not Registered?{" "}
                <Link
                  to="/signup"
                  className="text-blue-500 cursor-pointer hover:underline"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
