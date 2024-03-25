import "./navbar.css"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  const { user } = useContext(AuthContext);    
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Hotel Booking Application</span>
        </Link>
        { user ? user.username : (
          <div className="navItems">
            <button className="navButton">Register</button>
            <button className="navButton">Login</button>
          </div>
        )}
      </div>
    </div>
  )
}
export default Navbar

// import "./navbar.css"
// import { Link } from "react-router-dom";
// import { useContext } from "react";
// import { AuthContext } from "../../context/AuthContext";
// import axios from "axios"; // Import axios for making HTTP requests
// const Navbar = () => {
//   const { user, setUser } = useContext(AuthContext);
//   // Function to handle logout
//   const handleLogout = async () => {
//     try {
//       await axios.get("/api/logout"); // Make a GET request to logout endpoint
//       setUser(null); // Set user state to null
//     } catch (error) {
//       console.error("Logout failed:", error);
//     }
//   };
//   return (
//     <div className="navbar">
//       <div className="navContainer">
//         <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
//           <span className="logo">Hotel Booking Application</span>
//         </Link>
//         {user ? (
//           <div className="navItems">
//             <span className="username">{user.username}</span>
//             <button className="navButton" onClick={handleLogout}>Logout</button>
//           </div>
//         ) : (
//           <div className="navItems">
//             <Link to="/register" style={{ textDecoration: "none" }}>
//               <button className="navButton">Register</button>
//             </Link>
//             <Link to="/login" style={{ textDecoration: "none" }}>
//               <button className="navButton">Login</button>
//             </Link>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
// export default Navbar;
