import React from "react";
import { useAuth } from "../context/Authprovider";
import toast from "react-hot-toast";

const Logout = () => {
  const [authUser, setAuthUser] = useAuth();
  const handleLogout = () => {
    try {
      setAuthUser({
        ...authUser, // ...authUser means keep all the previous values of authUser. spread operator is used to keep the previous values of authUser.if we not use spread operator then it will replace the previous values with the new values.
        user: null,
      });
      localStorage.removeItem("Users");
      toast.success("Logout Successfully");
      setTimeout(() => {
        window.location.reload();
      }, 500);
    } catch (error) {}
  };
  return (
    <div>
      <button
        className="px-3 py-2 cursor-pointer bg-red-600 hover:bg-red-700 text-white rounded-md"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
