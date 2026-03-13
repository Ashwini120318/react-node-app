import { useState } from "react"
import { useDispatch } from "react-redux"
import { registerUser } from "../features/authSlice"
export default function Register () {
    const dispatch = useDispatch()
   const [name, setName] = useState("")
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")

   const handleFormSubmit = (e: React.SubmitEvent) => {
    e.preventDefault()
    dispatch(
        registerUser({
            name,
            email,
            password
        }) as any
    )
   }

    return (
        <div>
            <h1>Registration</h1>
            <form onSubmit={handleFormSubmit}>
                <input type="text" placeholder="name" value={name} onChange={e => setName(e.target.value)} />
                <br/>

                <input type="email" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} />
                <br />

                <input type="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} />

                <br />

                <button type="submit">Register</button>
            </form>
        </div>
    )
}