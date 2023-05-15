import React, { useContext } from "react";
import "./login.scss";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
    const [error, setError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const { dispatch } = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user)
                dispatch({ type: "LOGIN", payload: user });
                navigate("/");
            })
            .catch((error) => {
                setError(true);
                console.log(error.message);
            });
    };
    return (
        <div className="login">
            <form onSubmit={handleLogin}>
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="email"
                />
                <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="password"
                />
                <button type="submit">Login</button>
                {error && <span>Wrong email or password! </span>}
            </form>
        </div>
    );
};

export default Login;
