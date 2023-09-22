import React from 'react';
import Sidebar from "../components/Sidebar"
import SinglePost from './SinglePost';

function Single() {
  return (
    <div className='single' >
        <SinglePost />
        <Sidebar />
    </div>
  );
}

export default Single;