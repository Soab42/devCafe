/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import AllPostList from "./route/AllPostList";
import SinglePostContent from "./route/SinglePostContent";
import Profile from "./route/Profile";
import AddQuistion from "./route/AddQuistion";
import About from "./route/About";
export default function Content() {
  const route = useSelector((state) => state.route);
  let content;
  if (route === "all") {
    content = <AllPostList />;
  } else if (route === "single") {
    content = <SinglePostContent />;
  } else if (route === "profile") {
    content = <Profile />;
  } else if (route === "add") {
    content = <AddQuistion />;
  } else if (route === "about") {
    content = <About />;
  }
  return content;
}
