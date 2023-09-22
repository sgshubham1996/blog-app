import React from 'react';
import Sidebar from "./Sidebar"

function Settings() {
  return (
    <div className='settings' >
     <div className='settingsWrapper' >
        <div className='settingsTitle' >
            <span className='settingsUpdateTitle' >Update Your Account</span>
            <span className='settingsDeleteTitle' >Delete Account</span>
        </div>
        <form className='settingsForm' >
         <label>Profile Picture</label>
         <div className="settingsPP" >
          <img
           src='https://images.pexels.com/photos/1164778/pexels-photo-1164778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
           alt=''
           />
           <label htmlFor='fileInput' >
           <i className="settingsPPIcon fa-solid fa-user"></i>
           </label>
           <input type="file" id='fileInput' style={{display:"none"}} />
         </div>
         <label>Username</label>
         <input type="text" placeholder='Shubham' />
         <label>Email</label>
         <input type="email" placeholder='shubham@gmail.com' />
         <label>Password</label>
         <input type="password" />
         <button className='settingsSubmit' >Update</button>
        </form>
     </div>
        <Sidebar />
    </div>
  );
}

export default Settings;