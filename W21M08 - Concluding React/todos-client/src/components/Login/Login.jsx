import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
    console.log(props)
    const navigate = useNavigate();
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const updateUserName = (event) => {
        setUserName(event.target.value);
    }

    const updatePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleLogin = async (event) => {
        event.preventDefault();
        const URL = "http://localhost:8080/api/users/login";
        const settings = {
            method: "POST",
            body: JSON.stringify({
                userName: userName,
                password: password
            }),
            headers: {
                "Content-type": "application/json"
            }
        }
        const response = await fetch(URL, settings);
        const data = await response.json();
        localStorage.setItem("userName", data.userName);
        localStorage.setItem("token", data.token);
        props.setUserInfo(data);
        props.setIsLoggedIn(true);
        navigate("/home");

    }

    return(
        <div>
            <h1 className="text-primary"> Login </h1>
            <form onSubmit={handleLogin}>
                <div>
                    <label className="form-label" htmlFor="userName">
                        Username: 
                    </label>
                    <input 
                        className="form-control" 
                        type="text" 
                        id="userName" 
                        name="username" 
                        value={userName}
                        onChange={updateUserName}/>
                </div>
                <div>
                    <label className="form-label" htmlFor="password">
                        Password:
                    </label>
                    <input 
                        className="form-control" 
                        type="password" 
                        name="password" 
                        id="password" 
                        value={password}
                        onChange={updatePassword}/>
                </div>
                <button className="btn btn-primary">
                    Login
                </button>
            </form>
        </div>
    );
}
export default Login;