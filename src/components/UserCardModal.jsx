import React from "react";

export default function UserModal({ user }) {
  return (
    <div className="userCardModal flex">
      <img src={user?.photoURL} alt={user.name} className="w-36 object-fill" />

      <div className="text-green-200 text-sm mt-1">{user?.name}</div>
      <div className="text-blue-gray-500 bg-black/60 font-thin py-0.5 w-full text-center">
        {user?.email}
      </div>
      {/* <div className="name text-[10px]">{user?.id}</div> */}
      {/* <div className="name">#2</div> */}
    </div>
  );
}
