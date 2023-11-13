import {
  AiFillAppstore,
  AiFillBook,
  AiFillBug,
  AiTwotoneSetting,
  AiTwotoneStar,
} from "react-icons/ai";
export const postData = [
  {
    post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus id vitae harum molestiae eos sunt voluptatem laudantium. Voluptatem, doloremque molestiae, alias delectus eligendi fugiat aspernatur vel reiciendis ipsum molestias, architecto id? Ea reiciendis, suscipit doloremque nihil quos natus dolores dolorum a, deserunt, nemo harum reprehenderit unde? Asperiores autem eligendi eaque. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod perferendis eveniet vel voluptatibus odio omnis sit obcaecati veritatis sint aspernatur minus asperiores quae at ullam excepturi, illum natus consequatur blanditiis.",

    answer: [
      {
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut assumenda accusantium, asperiores hic optio voluptates unde! Voluptas laborum qui deleniti?",
        author: "John",
        time: new Date("2020-1-1"),
        comment: [
          {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut assumenda accusantium, asperiores hic optio voluptates unde! Voluptas laborum qui deleniti?",
            author: "John",
            time: new Date("2020-1-1"),
          },
          {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut assumenda accusantium, asperiores hic optio voluptates unde! Voluptas laborum qui deleniti?",
            author: "John",
            time: new Date("2020-1-1"),
          },
        ],
      },
      {
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut assumenda accusantium, asperiores hic optio voluptates unde! Voluptas laborum qui deleniti?",
        author: "Kabir",
        time: new Date("2000-10-31"),
        comment: [],
      },
    ],
    comment: [
      {
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut assumenda accusantium, asperiores hic optio voluptates unde! Voluptas laborum qui deleniti?",
        author: "John",
        time: new Date("2020-1-1"),
      },
      {
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut assumenda accusantium, asperiores hic optio voluptates unde! Voluptas laborum qui deleniti?",
        author: "John",
        time: new Date("2020-1-1"),
      },
    ],
    author: "John",
    time: new Date("2020-1-20"),
  },
];

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
