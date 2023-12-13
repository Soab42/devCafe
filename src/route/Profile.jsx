import { useSelector } from "react-redux";
import { getUserInfo } from "../utils/selector/getUserInfo";
import Icon from "../components/utils/Icon";
import {
  AiFillFlag,
  AiFillIdcard,
  AiFillMail,
  AiOutlineUser,
} from "react-icons/ai";
// import AllPostList from "./AllPostList";
import UserAllPostList from "../components/post/UserAllPostList";
export default function Profile() {
  const { user } = useSelector(getUserInfo);

  return (
    <div className="w-full  mt-5 gap-5 flex flex-col mb-5">
      <div className="ring-2 p-2 rounded-md shadow-2xl shadow-sky-500/20 backdrop-blur-lg bg-black/20">
        <div className="title rounded-md text-2xl bg-slate-700/10 shadow-blue-600/10 shadow-xl ">
          <Icon />
        </div>
        <div className="user flex justify-center">
          <div className="relative flex-center p-2 rounded-full">
            <img
              src={user.photoURL}
              alt="dp"
              className="rounded-full object-cover h-44 ring-4 ring-teal-900 shadow-lg shadow-sky-600/20"
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="name flex justify-start mt-2 font-extrabold text-[1.2rem] text-teal-700 gap-2 shadow-md p-1 rounded-md capitalize shadow-teal-600/20">
              <div className="text-[#936648cb] ring-1 rounded-sm ring-teal-600 p-1 shadow-md shadow-blue-400/10 text-[1rem]">
                <AiOutlineUser />
              </div>{" "}
              {user.name}
            </div>
            <div className="email flex justify-start mt-2 font-thin text-[.9rem] text-pink-700 gap-2 shadow-md p-1 rounded-md shadow-pink-600/20">
              <div className="text-[#936648cb] ring-1 rounded-sm p-1 shadow-md shadow-blue-400/10 text-[1rem] ring-pink-600">
                <AiFillMail />
              </div>
              {user.email}
            </div>
            <div className="email flex justify-start mt-2 font-thin text-[.6rem] text-orange-600 gap-2 shadow-md p-1 rounded-md shadow-orange-600/20">
              <div className="text-[#936648cb] ring-1 rounded-sm p-1 shadow-md shadow-blue-400/10 text-[1rem] ring-orange-600">
                <AiFillIdcard />
              </div>
              {user.id}
            </div>
            <div className="email flex justify-start mt-2 font-thin text-[1rem] text-green-700 gap-2 shadow-md p-1 rounded-md shadow-green-600/20">
              <div className="text-[#936648cb] ring-1 rounded-sm p-1 shadow-md shadow-blue-400/10 text-[1rem] ring-green-600">
                <AiFillFlag />
              </div>
              #{2}
            </div>
          </div>
        </div>
      </div>
      <UserAllPostList />
    </div>
  );
}
