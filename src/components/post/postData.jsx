import {
  AiFillAppstore,
  AiFillBook,
  AiFillBug,
  AiTwotoneSetting,
  AiTwotoneStar,
} from "react-icons/ai";

export const randomIcons = () => {
  const randomNumber = Math.floor(Math.random() * 5);
  const icons = [
    <AiFillBug />,
    <AiFillBook />,
    <AiFillAppstore />,
    <AiTwotoneStar />,
    <AiTwotoneSetting />,
  ];
  return icons[randomNumber];
};
