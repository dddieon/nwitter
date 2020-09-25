import React, { useState } from "react"
import { dbservice } from "fbase"

const Home = () => {
    const [nweet, setNweet] = useState("")
    const onSubmit = async (event) => {
        event.preventDefault()
        await dbservice.collection("nweets").add({
            nweet: nweet,
            createdAt: Date.now(),
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
        </div>
    )
}

export default Home
