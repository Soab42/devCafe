/* eslint-disable react/prop-types */
import { postData, randomIcons } from "./post/postData";
import CodeViewer from "./editor/CodeVIewer";
import { FullDate } from "../utils/Date";
import Title from "./post/Title";
import Tag from "./post/Tag";
import Comments from "./post/comments";
import Answer from "./post/Answer";
import Author from "./post/Author";
import TextWithMarkup from "./post/TextWithMarkup";
// const day = require("dayjs");
import SinglePostContent from "./post/SinglePostContent";
export default function Content() {
  return (
    <>
      <SinglePostContent />
    </>
  );
}
