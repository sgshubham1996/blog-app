import React from 'react';

function Post() {
  return (
    <div className='post' >
     <img
     src='https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
     alt=''
     className='postImg'
     />
     <div className='postInfo' >
      <div className='postCats' >
       <span className='postCat' >Music</span>
       <span className='postCat' >Life</span>
      </div>
      <span className='postTitle' >The standard chunk of Lorem Ipsum used since the 1500s</span>
      <hr />
      <span className='postDate' >1 hour ago</span>
      <p className='postDesc' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      
     </div>

    </div>
  );
}

export default Post;