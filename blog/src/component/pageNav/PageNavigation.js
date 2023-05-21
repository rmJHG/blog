import PageNavigationBtn from "./PageNavigationBtn";
import classes from "./PageNavigation.module.css";

function PageNavigation(props) {
  let totalPosts = Math.ceil(props.postData.length / 10);
  let postsPerPage = 10;

  const totalPageData = [];

  for (let i = 0; i < totalPosts; i++) {
    const pageData = [];

    if (i === totalPosts - 1) {
      postsPerPage = props.postData.length % 10;
    }
    for (let j = 10 * i; j < 10 * i + postsPerPage; j++) {
      const post = {
        id: props.postData[j],
      };

      pageData.push(post);
    }
    totalPageData.push(pageData);
  }
  console.log(totalPageData);

  return (
    <div className={classes.pageNav}>
      <div>pageNav</div>

      <div>
        <input type="button" value="<" className={classes.navButton} />

        <div className={classes.pageNavBtn}>
          <ul className={classes.pageList}>
            {totalPageData.map((pageData, index) => (
              <PageNavigationBtn key={index} pageData={pageData} index={index} />
            ))}
          </ul>
        </div>

        <input type="button" value=">" className={classes.navButton} />
      </div>
    </div>
  );
}

export default PageNavigation;
