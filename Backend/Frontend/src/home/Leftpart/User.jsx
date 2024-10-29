// import React from "react";
// import { useSocketContext } from "../../context/SocketContext.jsx";
// import useConversation from "../../statemanage/useConversation.js";

// function User({ user }) {
//   const profileImagePath = '/profile.jpg';
//   const { selectedConversation, setSelectedConversation } = useConversation();
//   const isSelected = selectedConversation?._id === user._id;
//   const { socket, onlineUsers } = useSocketContext();
//   const isOnline = onlineUsers.includes(user._id);
//   return (
//     <div
    
//       className={`hover:bg-slate-600 duration-300 ${
//         isSelected ? "bg-slate-700" : ""
//       }`}
//       onClick={() => setSelectedConversation(user)}
//     >
//       <div className="flex space-x-4 px-8 py-3 hover:bg-slate-700 duration-300 cursor-pointer">
//         <div className={`avatar ${isOnline ? "online" : ""}`}>
//           <div className="w-12 rounded-full">
//           <img src={profileImagePath} alt="Profile" />
        
//           </div>
//         </div>
//         <div>
//           <h1 className=" font-bold pt-2">{user.fullname}</h1>
//           {/* <span>{user.email}</span> */}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default User;



import React from "react";
import { useSocketContext } from "../../context/SocketContext.jsx";
import useConversation from "../../statemanage/useConversation.js";

function User({ user }) {
  const profileImagePath = '/profile.jpg'; // Direct path to the image in the public folder
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === user._id;
  const { socket, onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(user._id);

  return (
    <div
      className={`hover:bg-slate-600 duration-300 ${isSelected ? "bg-slate-700" : ""}`}
      onClick={() => setSelectedConversation(user)}
    >
      <div className="flex space-x-4 px-8 py-3 hover:bg-slate-700 duration-300 cursor-pointer">
        <div className={`avatar ${isOnline ? "online" : ""}`}>
          <div className="w-12 rounded-full">
            <img src={profileImagePath} alt="Profile" />
          </div>
        </div>
        <div>
          <h1 className="font-bold pt-2">{user.fullname}</h1>
        </div>
      </div>
    </div>
  );
}

export default User;

