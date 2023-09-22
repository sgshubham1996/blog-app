import React from 'react';

function Sidebar() {
  return (
    <div className='sidebar' >
        <div className='sidebarItem' >
            <span className='sidebarTitle' >ABOUT ME</span>
            <img 
              src='https://images.pexels.com/photos/3183198/pexels-photo-3183198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt=''
            />
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </p>
        </div>
        <div className='sidebarItem' >
            <span className='sidebarTitle' >CATEGORIES</span>
            <ul className='sidebarList' >
              <li className='sidebarListItem' >Life</li>
              <li className='sidebarListItem' >Music</li>
              <li className='sidebarListItem' >Style</li>
              <li className='sidebarListItem' >Sport</li>
              <li className='sidebarListItem' >Tech</li>
              <li className='sidebarListItem' >Cinema</li>
            </ul>
        </div>
        <div className='sidebarItem' >
            <span className='sidebarTitle' >FOLLOW US</span>
            <div className='sidebarSocial' >
            <i className="sidebarIcon fa-brands fa-square-facebook"></i>
            <i className="sidebarIcon fa-brands fa-square-twitter"></i>
            <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
            <i className="sidebarIcon fa-brands fa-square-instagram"></i>
            </div>
        </div>    
    </div>
  );
}

export default Sidebar;