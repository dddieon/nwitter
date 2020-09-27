import React, { useEffect, useState } from "react"
import { dbService, storageService } from "fbase"
import Nweet from "components/Nweet"
import { v4 as uuidv4 } from "uuid"

const Home = ({ userObj }) => {
    const [nweet, setNweet] = useState("")
    const [nweets, setNweets] = useState([])
    const [attachment, setAttachment] = useState("")
    useEffect(() => {
        dbService.collection("nweets").onSnapshot((snapshot) => {
            const nweetArray = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
            setNweets(nweetArray)
        })
    }, [])
    const onSubmit = async (event) => {
        event.preventDefault()
        let attachmentUrl = ""
        if (attachment !== "") {
            const attachmentRef = storageService.ref().child(`${userObj.uid}/${uuidv4()}`)
            const response = await attachmentRef.putString(attachment, "data_url")
            attachmentUrl = await response.ref.getDownloadURL()
        }
        const nweetObj = {
            text: nweet,
            createdAt: Date.now(),
            creatorId: userObj.uid,
            attachmentUrl,
        }
        await dbService.collection("nweets").add(nweetObj)
        setNweet("")
        setAttachment("")
        // 초기화시키면 input의 value에 작성되었던 텍스트가 남아있지 않겠지
    }
    const onChange = (event) => {
        const {
            target: { value },
        } = event
        setNweet(value)
    }
    const onFileChange = (event) => {
        const {
            target: { files },
        } = event
        const theFile = files[0]
        const reader = new FileReader()
        reader.onloadend = (finishedEvent) => {
            const {
                currentTarget: { result },
            } = finishedEvent
            setAttachment(result)
        }
        reader.readAsDataURL(theFile)
    }
    const onClearAttachment = () => {
        setAttachment("")
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
                <input type="file" accept="image/*" onChange={onFileChange} id="upload"></input>
                <input type="submit" value="Nweet"></input>
                {attachment && (
                    <div>
                        <img src={attachment} width="50px" height="50px" alt="thumb"></img>
                        <button onClick={onClearAttachment}>Clear</button>
                    </div>
                )}
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
