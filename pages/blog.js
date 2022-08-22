import { useState, useEffect } from "react";

function BlogPage() {
  const DUMMY_DATA = [
    { city: "All" },
    { city: "Istanbul" },
    { city: "Ankara" },
    { city: "Antalya" },
    { city: "All" },
    { city: "Istanbul" },
    { city: "Ankara" },

    { city: "Izmir" },
    { city: "All" },
    { city: "Istanbul" },
    { city: "Ankara" },
    { city: "Antalya" },
    { city: "Izmir" },
  ];

  const [posts, setPosts] = useState(DUMMY_DATA);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);

  //Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(posts.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  function paginate(pageNumber) {
    setCurrentPage(pageNumber);
  }

  
  return (
    <div>
      {/*      {currentPosts.map((data) => (
        <div key={Math.random()}>{data.city}</div>
      ))}
      <ul>
        {pageNumbers.map((number) => {
          return (
            <li>
              <p
                onClick={() => {
                  paginate(number);
                }}
              >
                {number}
              </p>
            </li>
          );
        })}
      </ul> */}
      Coming soon!
      
    </div>
  );
}

export default BlogPage;
