import React, { useEffect, useState } from "react"
import { dbService } from "fbase"
import Nweet from "components/Nweet"

const Home = ({ userObj }) => {
    const [nweet, setNweet] = useState("")
    const [nweets, setNweets] = useState([])
    useEffect(() => {
        dbService.collection("nweets").onSnapshot((snapshot) => {
            const nweetArray = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
            setNweets(nweetArray)
        })
    }, [])
    const onSubmit = async (event) => {
        event.preventDefault()
        await dbService.collection("nweets").add({
            text: nweet,
            createdAt: Date.now(),
            creatorId: userObj.uid,
        })
        setNweet("")
    }
    const onChange = (event) => {
        const {
            target: { value },
        } = event
        setNweet(value)
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="What's on your mind?"
                    onChange={onChange}
                    value={nweet}
                ></input>
                <input type="submit" value="Nweet"></input>
            </form>
            <div>
                {nweets.map((nweet) => {
                    return (
                        <Nweet
                            key={nweet.id}
                            nweetObj={nweet}
                            isOwner={nweet.creatorId === userObj.uid}
                        ></Nweet>
                    )
                })}
            </div>
        </div>
    )
}

export default Home
