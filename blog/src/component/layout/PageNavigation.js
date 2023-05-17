import PageNavigationBtn from "./PageNavigationBtn";

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
  // console.log(totalPageData);

  return (
    <div>
      <input type="button" value="<" />
      <ul>
        {totalPageData.map((pageData, index) => (
          <PageNavigationBtn pageData={pageData} index={index} />
        ))}
      </ul>

      <input type="button" value=">" />
    </div>
  );
}

export default PageNavigation;
