import React, { useEffect, useState } from "react"
import { authService, dbService } from "fbase"
import { useHistory } from "react-router-dom"

export default ({ userObj, refreshUser }) => {
    // -- hooks --
    const history = useHistory()
    const [newDisplayName, setNewDisplayName] = useState(userObj.displayName)

    // -- user Update function --
    const onLogOutClick = () => {
        authService.signOut()
        history.push("/")
    }
    const onSubmit = async (event) => {
        event.preventDefault()
        if (userObj.displayName !== newDisplayName) {
            await userObj.updateProfile({ displayName: newDisplayName })
        }
        refreshUser()
    }
    const onChange = (event) => {
        const {
            target: { value },
        } = event
        setNewDisplayName(value)
    }
    // -- Nweet List function --
    const getMyNweets = async () => {
        const nweets = await dbService
            .collection("nweets")
            .where("creatorId", "==", userObj.uid)
            .orderBy("createdAt")
            .get()
        // console.log(nweets.docs.map((doc) => doc.data()))
    }

    // -- state변화 감지 --
    useEffect(() => {
        getMyNweets()
    }, [])

    // DOM 출력
    return (
        <div className="container">
            <form onSubmit={onSubmit} className="profileForm">
                <input
                    type="text"
                    placeholder="Display name"
                    value={newDisplayName}
                    onChange={onChange}
                    autoFocus
                    className="formInput"
                />
                <input
                    type="submit"
                    value="Update Profile"
                    className="formBtn"
                    style={{ marginTop: 10 }}
                />
            </form>
            <span onClick={onLogOutClick} className="formBtn cancelBtn logOut">
                Log Out
            </span>
        </div>
    )
}
