import classes from "./PageNavigation.module.css";
import { useState } from "react";
import PageBoard from "./PageBoard";

function PageNavigation(props) {
  const totalPageData = [];

  let totalPosts = Math.ceil(props.postData.length / 10);
  let postsPerPage = 10;

  //게시글 데이터 10개씩 분리
  for (let i = 0; i < totalPosts; i++) {
    const pageData = [];

    if (i === totalPosts - 1) {
      postsPerPage = props.postData.length % 10;
    }
    for (let j = 10 * i; j < 10 * i + postsPerPage; j++) {
      const post = {
        id: props.postData[j].id,
        title: props.postData[j].title,
      };

      pageData.push(post);
    }
    totalPageData.push(pageData);
  }
  // const firstPage = totalPageData[0]
  const [postTitle, setPostTitle] = useState(totalPageData[0]);
  const [currentPage, setCurrentPage] = useState(0);

  function navLeftClick() {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
      setPostTitle(totalPageData[currentPage - 1]);
    }

  
  }
  function navRightClick() {
    if (currentPage < totalPageData.length - 1) {
      setCurrentPage(currentPage + 1);
      setPostTitle(totalPageData[currentPage + 1]);
    }

  }

  return (
    <div className={classes.pageNav}>
      <ul>
        {postTitle.map((res) => (
          <PageBoard key={res.id} title={res.title} />
        ))}
      </ul>

      <div>
        <input type="button" value="<" className={classes.navButton} onClick={navLeftClick} />

        <input type="button" value=">" className={classes.navButton} onClick={navRightClick} />
      </div>
    </div>
  );
}

export default PageNavigation;
