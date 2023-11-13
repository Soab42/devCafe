import React from "react";

export default function SinglePostCard() {
  return (
    <div className="card">
      <div className="s-post-summary--content">
        <h3 className="title font-bold underline">
          <a
            href="/questions/77460090/convert-curl-to-python-requests-upload-file"
            className="s-link"
          >
            Convert curl to python requests (upload file)
          </a>
        </h3>
        <div className="s-post-summary--content-excerpt">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          quisquam accusantium voluptatem commodi, esse similique dolore ea
          harum alias, adipisci veritatis excepturi quaerat labore! Distinctio
          quibusdam autem ratione! Unde, maiores.
        </div>
        <div className="flex justify-between">
          <div className="">
            <ul className="flex gap-2 p-1">
              <li className="tag">
                <a
                  href="/questions/tagged/python"
                  className="post-tag flex--item mt0 js-tagname-python"
                  title="show questions tagged 'python'"
                >
                  python
                </a>
              </li>
              <li className="d-inline mr4 js-post-tag-list-item">
                <a
                  href="/questions/tagged/curl"
                  className="post-tag flex--item mt0 js-tagname-curl"
                  title="show questions tagged 'curl'"
                >
                  curl
                </a>
              </li>
              <li className="d-inline mr4 js-post-tag-list-item">
                <a
                  href="/questions/tagged/python-requests"
                  className="post-tag flex--item mt0 js-tagname-python-requests"
                  title=""
                >
                  python-requests
                </a>
              </li>
            </ul>
          </div>

          <div className="flex gap-1">
            <a
              href="/users/16298153/gawain"
              className="s-avatar s-avatar__16 s-user-card--avatar"
            >
              <div className="gravatar-wrapper-16">
                <img
                  src="https://www.gravatar.com/avatar/85e71ff0e414e6d20d57b318087e2641?s=32&amp;d=identicon&amp;r=PG&amp;f=y&amp;so-version=2"
                  alt="Gawain's user avatar"
                  width="16"
                  height="16"
                  className="s-avatar--image"
                />
              </div>
            </a>

            <div className="flex">
              <div className="s-user-card--link d-flex gs4">
                <a href="/users/16298153/gawain" className="flex--item">
                  Gawain
                </a>
              </div>

              <ul className="s-user-card--awards">
                <li className="s-user-card--rep">
                  <span
                    className="todo-no-class-here"
                    title="reputation score "
                    dir="ltr"
                  >
                    133
                  </span>
                </li>
              </ul>
            </div>

            <time className="s-user-card--time">
              asked <span>2 hours ago</span>
            </time>
          </div>
        </div>
      </div>
    </div>
  );
}
