// import React from "react";
// import { Toaster } from "react-hot-toast";
// import { Navigate, Route, Routes } from "react-router-dom";
// import Login from "./components/Login";
// import Signup from "./components/Signup";
// import { useAuth } from "./context/AuthProvider";
// import Logout from "./home/left1/Logout";
// import Left from "./home/Leftpart/Left";
// import Right from "./home/Rightpart/Right";
// import useConversation from "./statemanage/useConversation";
// function App() {
//   const { selectedConversation, } = useConversation();
// console.log("conversation is",selectedConversation);

  
//   const [authUser, setAuthUser] = useAuth();
//   console.log(authUser);
//   return (
//     <>
//       <Routes>
//         <Route
//           path="/"
//           element={
//             authUser ? (
//               <div className="flex h-screen">
//                 <Logout />
//                 <Left />
//                 <Right />
//               </div>


            
//             ) : (
//               <Navigate to={"/login"} />
//             )
//           }
//         />
//         <Route
//           path="/login"
//           element={authUser ? <Navigate to="/" /> : <Login />}
//         />
//         <Route
//           path="/signup"
//           element={authUser ? <Navigate to="/" /> : <Signup />}
//         />
//       </Routes>
//       <Toaster />
//     </>
//   );
// }

// export default App;





import React from "react";
import { Toaster } from "react-hot-toast";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { useAuth } from "./context/AuthProvider";
import Left from "./home/Leftpart/Left";
import Right from "./home/Rightpart/Right";
import useConversation from "./statemanage/useConversation";

function App() {
  const { selectedConversation } = useConversation();
  const [authUser] = useAuth();

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            authUser ? (
              <div className="flex h-screen">
                {/* <Logout /> */}
                <div className={`flex h-full ${selectedConversation ? "hidden md:flex md:w-1/3" : "w-full md:w-1/2 "}`}>
                  <Left />
                </div>
                <div className={`flex h-full ${!selectedConversation ? "hidden md:flex md:w-1/2" : "w-full"}`}>
                  <Right />
                </div>
              </div>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="/login" element={authUser ? <Navigate to="/" /> : <Login />} />
        <Route path="/signup" element={authUser ? <Navigate to="/" /> : <Signup />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;





// import React, { useState } from "react";
// import { Toaster } from "react-hot-toast";
// import { Navigate, Route, Routes } from "react-router-dom";
// import Login from "./components/Login";
// import Signup from "./components/Signup";
// import { useAuth } from "./context/AuthProvider";
// import Logout from "./home/left1/Logout";
// import Left from "./home/Leftpart/Left";
// import Right from "./home/Rightpart/Right";
// import useConversation from "./statemanage/useConversation";

// function App() {
//   const { selectedConversation } = useConversation();
//   const [authUser] = useAuth();
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   // Function to toggle the dropdown
//   const toggleDropdown = () => {
//     setIsDropdownOpen((prev) => !prev);
//   };

//   return (
//     <>
//       <Routes>
//         <Route
//           path="/"
//           element={
//             authUser ? (
//               <div className="flex h-screen">
//                 {/* Conditional rendering based on screen size */}
//                 <div className="md:flex md:flex-col md:justify-between md:h-full">
//                   {/* Show Logout directly on larger screens */}
//                   <div className="hidden md:block">
//                     <Logout />
//                   </div>

//                   {/* Dropdown for mobile screens */}
//                   <div className="block md:hidden">
//                     <button onClick={toggleDropdown} className="flex items-center p-2">
//                       <span className="text-2xl">⋮</span>
//                     </button>
//                     {isDropdownOpen && (
//                       <div className="absolute bg-white shadow-lg p-2 rounded">
//                         <Logout />
//                       </div>
//                     )}
//                   </div>
//                 </div>

//                 <div className={`flex h-full ${selectedConversation ? "hidden md:flex md:w-1/2" : "w-full md:w-1/2"}`}>
//                   <Left />
//                 </div>
//                 <div className={`flex h-full ${!selectedConversation ? "hidden md:flex md:w-1/2" : "w-full"}`}>
//                   <Right />
//                 </div>
//               </div>
//             ) : (
//               <Navigate to="/login" />
//             )
//           }
//         />
//         <Route path="/login" element={authUser ? <Navigate to="/" /> : <Login />} />
//         <Route path="/signup" element={authUser ? <Navigate to="/" /> : <Signup />} />
//       </Routes>
//       <Toaster />
//     </>
//   );
// }

// export default App;
