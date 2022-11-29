//login box component
import { Link } from "react-router-dom";

const LoginBox = (props) => {
  
  return (
    <div className="flex flex-col m-5">
      <label className="text-xl my-2">Username</label>
      <input
        className="border border-slate-400 p-2"
        type="text"
        name="username"
        value={props.login.username}
        onChange={props.handleChange}
      ></input>
      <label className="text-xl  mt-2">Password</label>
      <input
        className="border border-slate-400 p-2"
        type="password"
        name="password"
        value={props.login.password} 
        onChange={props.handleChange}
      ></input>
      <p className="text-red-600 mt-2">{props.error}</p>
      <button
        className="bg-purple-500 text-white p-2 rounded-md hover:bg-purple-700"
        onClick={props.handleSubmit}
      >
        Login
      </button>
      <p className="text-gray-400 text-sm mt-2">
        Don't have an account? Sign up{" "}
        <Link to="/signup" className="underline hover:text-gray-800">
          here
        </Link>
      </p>
    </div>
  );
};

export default LoginBox;
