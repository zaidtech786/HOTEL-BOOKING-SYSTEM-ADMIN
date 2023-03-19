// import axios from "axios";
// import { useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
// // import { AuthContext } from "../../context/AuthContext";
// import './Login.scss';










// const Login = () => {
//   const [credentials, setCredentials] = useState({
//     username: "",
//     password: "",
//   });

//   // const { loading, error, dispatch } = useContext(AuthContext);

//   const navigate = useNavigate()

//   const handleChange = (e) => {
//     setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
//   };

//   const handleClick = async (e) => {
//     e.preventDefault();
//     dispatch({ type: "LOGIN_START" });

//     try {
//       const res = await axios.post("/auth/login", credentials);

//       if(res.data.isAdmin){
//         dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
//         navigate("/")
//       }
//       else {
//         dispatch({ type: "LOGIN_FAILURE", payload: {message: "You are not allowed"} });
//       }

//     } catch (err) {
//       dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
//     }
//   };


//   return (
//     <div className="login">
//       <div className="lContainer">

//         <h1 style={{color: "darkblue", textTransform: "uppercase", marginBottom: "50px"}}>Login Form</h1>
//       {error && <span>{error.message}</span>}
//         <input
//           type="text"
//           placeholder="username"
//           id="username"
//           onChange={handleChange}
//           className="lInput"
//         />
//         <input
//           type="password"
//           placeholder="password"
//           id="password"
//           onChange={handleChange}
//           className="lInput"
//         />
//         <button disabled={loading} onClick={handleClick} className="lButton">
//           Login
//         </button>
        
//       </div>
//     </div>
//   );
// };

// export default Login;
