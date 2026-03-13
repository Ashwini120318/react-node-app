import { useDispatch } from "react-redux";
import { loginUser } from "../features/authSlice";
import { useState } from "react";

export default function Login() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = () => {
    dispatch(loginUser({ email, password }) as any);
  };

  return (
    <div>
      <h2>Login</h2>

      <input
        type="email"
        placeholder="email"
        onChange={e => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="password"
        onChange={e => setPassword(e.target.value)}
      />

      <button onClick={submitHandler}>Login</button>
    </div>
  );
}