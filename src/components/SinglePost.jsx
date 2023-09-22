import React from 'react';

function SinglePost() {
  return (
    <div className='singlePost' >
      <div className='singlePostWrapper' >
       <img
       src='https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
       alt=''
       className='singlePostImg'
       />
       <h1 className='singlePostTitle' >
       Lorem ipsum dolor sit amet
       <div className='singlePostEdit' >
       <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
       <i className="singlePostIcon fa-solid fa-trash-can"></i>
       </div>
       </h1>
       <div className='singlePostInfo' >
        <span className='singlePostAuthor' >Author : <b>Shubham</b></span>
        <span className='singlePostDate' >1 hour ago</span>
       </div>
       <p className="singlePostDesc" >
       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
       </p>
      </div>
    </div>
  );
}

export default SinglePost;