import React from "react";

export default function AllPostList() {
  return (
    <div>
      <h1 className="title bg-red-200/10 text-center font-bold tracking-[.61rem]">
        All Post List
      </h1>
      <div className="card">
      <div class="s-post-summary--content">


        <h3 class="s-post-summary--content-title">
            <a href="/questions/77460090/convert-curl-to-python-requests-upload-file" class="s-link">Convert curl to python requests (upload file)</a>
        </h3>
            <div class="s-post-summary--content-excerpt">
                I have an example of curl request:
curl -X "POST" "http://192.168.24.62:8080/upload" \
     -H 'Content-Type: multipart/form-data; charset=utf-8' \
     -F "file=@test.wav&amp;...
            </div>
        <div class="s-post-summary--meta">
            <div class="s-post-summary--meta-tags d-inline-block tags js-tags t-python t-curl t-python-requests">

<ul class="ml0 list-ls-none js-post-tag-list-wrapper d-inline"><li class="d-inline mr4 js-post-tag-list-item"><a href="/questions/tagged/python" class="post-tag flex--item mt0 js-tagname-python" title="show questions tagged 'python'" aria-label="show questions tagged 'python'" rel="tag" aria-labelledby="tag-python-tooltip-container">python</a></li><li class="d-inline mr4 js-post-tag-list-item"><a href="/questions/tagged/curl" class="post-tag flex--item mt0 js-tagname-curl" title="show questions tagged 'curl'" aria-label="show questions tagged 'curl'" rel="tag" aria-labelledby="tag-curl-tooltip-container">curl</a></li><li class="d-inline mr4 js-post-tag-list-item"><a href="/questions/tagged/python-requests" class="post-tag flex--item mt0 js-tagname-python-requests" title="" aria-label="show questions tagged 'python-requests'" rel="tag" aria-labelledby="tag-python-requests-tooltip-container">python-requests</a></li></ul>
            </div>
            


<div class="s-user-card s-user-card__minimal" aria-live="polite">

                <a href="/users/16298153/gawain" class="s-avatar s-avatar__16 s-user-card--avatar" data-user-id="16298153">        <div class="gravatar-wrapper-16">
            <img src="https://www.gravatar.com/avatar/85e71ff0e414e6d20d57b318087e2641?s=32&amp;d=identicon&amp;r=PG&amp;f=y&amp;so-version=2" alt="Gawain's user avatar" width="16" alt="" height="16" class="s-avatar--image">
        </div>
</a>

    <div class="s-user-card--info">
            <div class="s-user-card--link d-flex gs4">
                <a href="/users/16298153/gawain" class="flex--item">Gawain</a>
            </div>
        
                <ul class="s-user-card--awards">
            <li class="s-user-card--rep"><span class="todo-no-class-here" title="reputation score " dir="ltr">133</span></li>

        </ul>

        
    </div>

        <time class="s-user-card--time">asked <span title="2023-11-10 12:41:40Z" class="relativetime">2 hours ago</span></time>
</div>

        </div>
       
    </div>

      </div>
    </div>
  );
}
