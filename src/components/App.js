import React, { useEffect, useState } from "react"
import AppRouter from "components/Router"
import { authService } from "fbase"
import { auth } from "firebase"

function App() {
    const [init, setInit] = useState(false)
    const [userObj, setUserObj] = useState(null)
    useEffect(() => {
        authService.onAuthStateChanged((user) => {
            if (user) {
                setUserObj({
                    displayName: user.displayName,
                    uid: user.uid,
                    updateProfile: (args) => user.updateProfile(args),
                })
            } else {
                setUserObj(null)
            }
            setInit(true)
        })
    }, [])

    // 유저명 업데이트 함수 -------------------------------------
    const refreshUser = () => {
        const user = authService.currentUser
        // user는 로그인한 사용자 정보를 가져오고, 로그인 아니면 null한다
        setUserObj({
            displayName: user.displayName,
            uid: user.uid,
            updateProfile: (args) => user.updateProfile(args),
        })
    }

    return (
        <>
            {init ? (
                <AppRouter
                    isLoggedIn={Boolean(userObj)}
                    userObj={userObj}
                    refreshUser={refreshUser}
                ></AppRouter>
            ) : (
                "initializing..."
            )}
            <footer>&copy; Nwitter {new Date().getFullYear()}</footer>
        </>
    )
}

export default App
