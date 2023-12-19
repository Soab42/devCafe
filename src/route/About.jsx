import React from "react";
import { IoLogoGithub, IoLogoGoogle, IoLogoLinkedin } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="flex flex-col gap-2 text-sm text-justify text-sky-300/70 mb-10 p-4">
      <p className="text-xl font-bold bg-slate-500/20 p-2 text-center text-sky-600">
        DevCafe Documentation
      </p>
      <p>
        Welcome to the DevCafe Documentation, your go-to resource for
        understanding and navigating the DevCafe platform. This documentation
        provides a comprehensive guide on various aspects of the platform,
        helping you make the most of your experience.
      </p>
      <p className="text-lg font-bold text-teal-500"> 1. Introduction</p>
      <p>
        The DevCafe platform is designed to facilitate collaborative learning
        and knowledge sharing among developers. In this section, we'll provide
        an overview of what DevCafe is and how it can benefit you.
      </p>
      <p className="text-lg font-bold text-teal-500"> 2. Getting Started</p>
      <p className="text-sm pl-2 font-bold text-teal-500">
        2.1 Account Creation
      </p>
      <p className="pl-3">
        To start your journey on DevCafe, you need to create an account. This
        section will guide you through the account creation process, ensuring a
        seamless and secure experience.For Login you have to have an google or
        github account. Click on yarn add login button it&apos;s gives you a
        terminal like feel. Write down your provider name and hit enter. A login
        popup will raise and select your desired account.An Bang Authentication
        Done!
      </p>
      <p className="text-lg font-bold text-teal-500">3. Navigating DevCafe</p>
      <p>
        Explore the various sections of DevCafe to find and engage with relevant
        content.
      </p>
      <p className="text-sm pl-2 font-bold text-teal-500">3.1 Home Page</p>
      <p className="pl-3">
        Discover the latest posts, trending topics, and featured discussions on
        the home page. Understand how the home page dynamically presents content
        to keep you informed and engaged. Click on a post to show details
      </p>
      <p className="text-sm pl-2 font-bold text-teal-500">3.2 Profile</p>
      <p className="pl-3">
        Navigate through Profile to find discussions related to logged in users
        means you. In this route you can see your post and user details.
      </p>
      <p className="text-sm pl-2 font-bold text-teal-500">
        3.3 Search & Pagination
      </p>
      <p className="pl-3">
        Efficiently find posts and topics using the search functionality. Master
        the art of using keywords, tags, and title parameters to locate relevant
        content.And there is a Pagination feature to show more content.
      </p>
      <p className="text-lg font-bold text-teal-500">
        4. Posting and Interacting
      </p>
      <p>
        Become an active participant in the DevCafe community by creating and
        engaging with posts.
      </p>
      <p className="text-sm pl-2 font-bold text-teal-500">
        4.1 Creating a Post
      </p>
      <p className="pl-3">
        Share your knowledge, ask questions, and seek assistance by creating a
        new post. Understand the best practices for creating posts that stand
        out and attract meaningful interactions.
      </p>
      <p className="text-sm pl-2 font-bold text-teal-500">4.2 Commenting</p>
      <p className="pl-3">
        Engage with the community by leaving comments on posts. Discover how to
        provide valuable insights, ask questions, and foster discussions through
        comments.
      </p>
      <p className="text-sm pl-2 font-bold text-teal-500">
        4.3 Answering questions
      </p>
      <p className="pl-3">
        Express appreciation for valuable content by Answering questions and
        comments. Learn how Answering contributes to highlighting the most
        relevant and helpful contributions.
      </p>
      <p className="text-lg font-bold text-teal-500">
        5. Challenges and Solutions
      </p>
      <p className="pl-3">
        Throughout the development of DevCafe, we encountered various
        challenges. Here, we share some of the problems we faced and how we
        overcame them.
      </p>

      <div>
        <p className="text-sm pl-2 font-bold text-teal-500">5.1 Challenge:</p>
        <p className="pl-3">
          While building our app, we had a tough time dealing with routing
          issues. Specifically, there was no out-of-the-box solution for
          handling data after a hard reload.
        </p>
        <p className="text-sm pl-2 font-bold text-teal-500">Solution:</p>
        <p className="pl-3">
          To tackle this, we couldn't use popular tools like React Router due to
          our unique setup. So, we rolled our own solution using React and
          Redux. We set up a custom routing system with React-Redux and added a
          smart caching system. The hiccup came with hard reloads wiping out our
          Redux state. To prevent data loss, we cleverly used localStorage to
          store crucial information during hard reloads and then seamlessly
          brought it back into Redux. This not only fixed our routing challenge
          but also boosted the app's overall performance. Now, it handles hard
          reloads like a champ!
        </p>
      </div>

      <div>
        <p className="text-sm pl-2 font-bold text-teal-500">5.2 Challenge:</p>
        <p className="pl-3">
          I faced a challenge in displaying code as a code viewer in my project.
        </p>
        <p className="text-sm pl-2 font-bold text-teal-500">Solution:</p>
        <p className="pl-3">
          To keep dependencies low, I avoided using external packages and opted
          for a lightweight solution. I leveraged Markdown and implemented a
          feature to distinguish between regular text and code using regular
          expressions. For code formatting, I incorporated PrismJS, which was
          the only additional dependency outside of my project's primary
          framework (React in this case). This approach allowed me to showcase
          code effectively without unnecessary dependencies, keeping the project
          streamlined.
        </p>
      </div>
      <div>
        <p className="text-sm pl-2 font-bold text-teal-500">5.3 Challenge:</p>
        <p className="pl-3">
          While developing, a significant issue arose regarding saving and
          retrieving data in Firebase after edits. The challenge was ensuring
          that the application could detect whether the data had been changed
          and subsequently fetch the updated information.
        </p>
        <p className="text-sm pl-2 font-bold text-teal-500">Solution:</p>
        <p className="pl-3">
          To address this issue, I implemented a solution using Redux state
          management. I introduced a mechanism in the Redux state to track
          whether the data had been modified. When an edit occurred, the state
          was updated accordingly. Then, upon making a request to retrieve the
          data, the application checked the Redux state. If the state indicated
          that the data had been changed, a fresh fetch operation was triggered
          to ensure the most recent and accurate information was available. This
          approach allowed for seamless handling of data changes in Firebase and
          improved the reliability of data retrieval after edits.
        </p>
      </div>
      <div>
        <p className="text-sm pl-2 font-bold text-teal-500">5.4 Challenge:</p>
        <p className="pl-3">
          Another challenge I encountered was creating a code editor-like input,
          allowing users to input data, save it to a database, and then display
          it in my custom code viewer. The constraint was to achieve this
          without adding unnecessary dependencies to the project.
        </p>
        <p className="text-sm pl-2 font-bold text-teal-500">Solution:</p>
        <p className="pl-3">
          To address this issue without extending dependencies, I opted for a
          simple and efficient solution. Instead of using a dedicated code
          editor library, I implemented a text area for user input. Using the
          useRef hook, I captured the exact data format from the text area. The
          data from the text area was then saved to the database. When
          displaying the saved data in my custom code viewer (as described in a
          previous challenge), I utilized the same lightweight solution,
          avoiding unnecessary dependencies. This approach allowed me to keep
          the project streamlined while achieving the desired functionality.
        </p>
      </div>

      <p className="text-lg font-bold text-teal-500">6. Contact & Support</p>
      <p className="pl-3">
        If you encounter any issues or have specific inquiries, reach out to our
        support team at
      </p>
      <div className="flex-center gap-4  mt-4">
        <a
          href="mailto:syfuddhin@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="flex-center  hover:bg-green-300 text-green-500 bg-slate-700 w-24 rounded p-1"
        >
          <span className="text-lg">
            <IoLogoGoogle />
          </span>
          @syuddhin
        </a>

        <a
          href="https://github.com/soab42"
          target="_blank"
          rel="noreferrer"
          className="flex-center  hover:bg-green-300 text-black bg-slate-700 w-24 rounded p-1"
        >
          <span className="text-xl">
            <IoLogoGithub />
          </span>
          /soab42
        </a>
        <a
          href="https://www.linkedin.com/in/soab-mahmud-4a202787"
          target="_blank"
          rel="noreferrer"
          className="flex-center  hover:bg-green-300 text-blue-500 bg-slate-700 px-2 rounded p-1"
        >
          <span className="text-xl">
            <IoLogoLinkedin />
          </span>
          /soab-mahmud-4a202787
        </a>
      </div>
      <div className="flex-center mt-6">
        <p>
          If you like the project you can explore more on my
          <a
            className="underline pl-1 text-sky-400"
            href="https://syfuddhin.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            portfolio
          </a>
          {""}.
        </p>
      </div>
      <p className="mt-5 text-xl text-pink-400 text-center bg-black/20 p-2">
        Enjoy your journey on DevCafe and happy coding 💙🥰!
      </p>
    </div>
  );
}
