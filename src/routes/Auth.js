import { authService, firebaseInstance } from "fbase"
import React, { useState } from "react"

const Auth = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [newAccount, setNewAccount] = useState(true)
    const [error, setError] = useState("")

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
    const toggleAccount = () => {
        // 이 함수는 newAccount(계정존재여부)를 토글한다.
        setNewAccount((prev) => !prev)
    }
    const onSocialClick = async (event) => {
        const {
            target: { name },
        } = event
        let provider
        if (name === "google") {
            provider = new firebaseInstance.auth.GoogleAuthProvider()
        } else if (name === "github") {
            provider = new firebaseInstance.auth.GithubAuthProvider()
        }
        await authService.signInWithPopup(provider)
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    name="email"
                    type="text"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={onChange}
                ></input>
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={onChange}
                ></input>
                <input type="submit" value={newAccount ? "Create New Account" : "Login"}></input>
                <span>{error}</span>
            </form>
            <span onClick={toggleAccount}>테스트용</span>
            <div>
                <button onClick={onSocialClick} name="google">
                    Continue with Google
                </button>
                <button onClick={onSocialClick} name="github">
                    Continue with Github
                </button>
            </div>
        </div>
    )
}

export default Auth
