// import React from "react";
// import Search from "./Search";
// import Users from "./Users";
 

// function Left() {
//   return (
//     <div className="w-[30%] bg-black text-gray-300">
//       <h1 className="font-bold text-3xl p-2 px-11">Chats</h1>
//     {/* <div className="w-full   bg-black text-gray-300"> */}
//       <Search />
//       <div
//         className=" flex-1  overflow-y-auto"
//         style={{ minHeight: "calc(84vh - 10vh)" }}
//       >
//         <Users />
//       </div>
   
//     </div>
  
//   );
// }

// export default Left;



// import React from "react";
// import Search from "./Search";
// import Users from "./Users";

// function Left() {
//   return (
//     <div className="flex flex-col w-full bg-black text-gray-300 xl:w-[30%]  ">
//       <h1 className="font-bold text-3xl p-2 px-11">Chats</h1>
//       <Search />
//       <div className="flex-1 overflow-y-auto" style={{ minHeight: "calc(84vh - 10vh)" }}>
//         <Users />
//       </div>
//     </div>
//   );
// }

// export default Left;



// import React, { useState } from "react";
// import { useAuth } from "../../context/AuthProvider"; // Import your authentication context
// import Search from "./Search";
// import Users from "./Users";

// function Left() {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const { logout } = useAuth(); // Assuming you have a logout function in your Auth context

//   // Function to handle logout
//   const handleLogout = () => {
//     logout(); // Call the logout function
//     setIsDropdownOpen(false); // Close the dropdown after logout
//   };

//   return (
//     <div className="flex flex-col w-full bg-black text-gray-300 xl:w-[30%]">
//       <div className="flex items-center justify-between p-2 px-11">
//         <h1 className="font-bold text-3xl">Chats</h1>

//         {/* Three-Dot Menu for Logout */}
//         <div className="relative">
//           <button onClick={() => setIsDropdownOpen((prev) => !prev)} className="flex items-center p-2">
//             <span className="text-2xl">⋮</span>
//           </button>
//           {isDropdownOpen && (
//             <div className="absolute right-0 bg-gray-800 text-white shadow-lg p-2 rounded">
//               <button onClick={handleLogout} className="w-full text-left p-2 hover:bg-gray-700">
//                 Logout
//               </button>
//             </div>
//           )}
//         </div>
//       </div>

//       <Search />
//       <div className="flex-1 overflow-y-auto" style={{ minHeight: "calc(84vh - 10vh)" }}>
//         <Users />
//       </div>
//     </div>
//   );
// }

// export default Left;



import React from "react";
// import Logout from "./Logout"; // Import the Logout component
import Logout from "../left1/Logout";
import Search from "./Search";
import Users from "./Users";

function Left() {
  return (
    <div className="flex flex-col w-full bg-black text-gray-300 xl:w-[30%]
    flex-1 overflow-y-auto" style={{ minHeight: "calc(84vh - 10vh)" }}
    >
      <div className="flex items-center justify-between p-2 px-11">
        <h1 className="font-bold text-3xl">ChatsApp</h1>
        <Logout /> 
      </div>

      <Search />
      <div className="">
        <Users />
      </div>
    </div>
  );
}

export default Left;
