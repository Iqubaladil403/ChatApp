import React from "react";
import { useSocketContext } from "../../context/SocketContext.jsx";
import useConversation from "../../statemanage/useConversation.js";



function Chatuser() {
  // const profileImagePath = `${import.meta.env.VITE_PUBLIC_URL}/adil's profile photo.png`;
  const profileImagePath = '/profile.jpg'; // This should work correctly

  const { selectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();
  const getOnlineUsersStatus = (userId) => {
    return onlineUsers.includes(userId) ? "Online" : "Offline";
  };

  return (
    <div className=" pl-5 pt-2  h-[12vh] flex space-x-4 bg-gray-700 hover:bg-gray-600 duration-300" >
      <div >
        <div className="avatar online">
          <div className="w-14 rounded-full ">
          <img src={profileImagePath} alt="Profile" />
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-xl">{selectedConversation.fullname}</h1>
        <span className="text-sm">
          {getOnlineUsersStatus(selectedConversation._id)}
        </span>
      </div>
    </div>
  );
}

export default Chatuser;
