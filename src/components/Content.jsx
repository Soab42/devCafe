/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import AllPostList from "./AllPostList";
import SinglePostContent from "./SinglePostContent";
export default function Content() {
  const allQuestionsRoute = useSelector((state) => state.route);
  return <>{allQuestionsRoute ? <AllPostList /> : <SinglePostContent />}</>;
}
