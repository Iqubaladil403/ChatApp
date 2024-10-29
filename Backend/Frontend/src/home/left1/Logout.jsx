// import axios from "axios";
// import Cookies from "js-cookie";
// import React, { useState } from "react";
// import toast from "react-hot-toast";
// import { TbLogout2 } from "react-icons/tb";

// function Logout() {
//   const [loading, setLoading] = useState(false);
//   const handleLogout = async () => {
//     setLoading(true);
//     const logout=window.confirm("do you want to logout ?")
//     if(logout){
//       try {
//         const res = await axios.post("/api/user/logout");
//         localStorage.removeItem("ChatApp");
//         Cookies.remove("jwt");
//         setLoading(false);
//         toast.success("Logged out successfully");
//         window.location.reload();
//       } catch (error) {
//         console.log("Error in Logout", error);
//         toast.error("Error in logging out");
//       }
//     }
    
//   };
//   return (
//     <>
//       <div className="w-[4%]   bg-slate-950 text-white  flex flex-col justify-end ">
//         <div className="p-3  align-bottom ">
//           <button >
//             <TbLogout2
//               className="text-5xl p-2 hover:bg-gray-600 rounded-lg duration-300 mr-5"
//               onClick={handleLogout}
//             />
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }
// export default Logout;





import axios from "axios";
import Cookies from "js-cookie";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { TbLogout2 } from "react-icons/tb";

function Logout() {
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    try {
      const res = await axios.post("/api/user/logout");
      localStorage.removeItem("ChatApp");
      Cookies.remove("jwt");
      setLoading(false);
      toast.success("Logged out successfully");
      window.location.reload();
    } catch (error) {
      console.log("Error in Logout", error);
      toast.error("Error in logging out");
    }
  };

  return (
    <>
      <div className=" text-white flex flex-col justify-end">
        <div className=" align-bottom">
          <button onClick={() => setShowModal(true)}>
            <TbLogout2 className="text-3xl  hover:bg-gray-600 rounded-lg duration-300 " />
          </button>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-md p-6 text-center">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Do you really want to logout?
            </h2>
            <p className="text-gray-600 mb-6">You’ll need to log in again to access your account.</p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => {
                  setShowModal(false);
                  handleLogout();
                }}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-200"
              >
                Yes, Logout
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition duration-200"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Logout;
