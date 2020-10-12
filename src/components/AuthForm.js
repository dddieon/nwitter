import { authService } from "fbase"
import React, { useState } from "react"

export default function AuthForm() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [newAccount, setNewAccount] = useState(true)
    const [error, setError] = useState("")

    const toggleAccount = () => {
        // 이 함수는 newAccount(계정존재여부)를 토글한다.
        setNewAccount((prev) => !prev)
    }
    const onChange = (event) => {
        // onChange 함수를 하나만 사용해서 form을 반응시켜라
        const {
            target: { name, value },
        } = event
        if (name === "email") {
            setEmail(value)
        } else if (name === "password") {
            setPassword(value)
        }
    }
    const onSubmit = async (event) => {
        event.preventDefault()
        try {
            if (newAccount) {
                await authService.createUserWithEmailAndPassword(email, password)
            } else {
                await authService.signInWithEmailAndPassword(email, password)
            }
        } catch (error) {
            setError(error.message)
        }
    }
    return (
        <>
            <form onSubmit={onSubmit} className="container">
                <input
                    name="email"
                    type="text"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={onChange}
                    className="authInput"
                ></input>
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={onChange}
                    className="authInput"
                ></input>
                <input
                    type="submit"
                    value={newAccount ? "Create New Account" : "Login"}
                    className="authInput authSubmit"
                ></input>
                {error && <span className="authError">{error}</span>}
            </form>
            <span onClick={toggleAccount} className="authSwitch">
                테스트용
            </span>
        </>
    )
}
