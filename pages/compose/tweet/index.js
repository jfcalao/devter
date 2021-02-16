import AppLayout from "components/AppLayout"
import Avatar from "components/Avatar"
import useUser from "hooks/useUser"
import { useState } from "react"
import { addDevit } from "firebase/client"

const { default: Button } = require("components/Button")

const TweetPage = () => {
  const user = useUser()
  const [message, setMessage] = useState("")
  const handleClick = () => {
    console.log("click")
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("Submit")
    const { avatar, username, uid } = user
    addDevit({
      avatar,
      username,
      content: message,
      uid,
    })
  }
  const handleInput = (event) => {
    const inputValue = event.target.value
    setMessage(inputValue)
  }

  return (
    <>
      <AppLayout>
        {user && <Avatar src={user.avatar}></Avatar>}
        <form onSubmit={handleSubmit}>
          <textarea
            value={message}
            onChange={handleInput}
            placeholder="Que está pasando???"
          ></textarea>
          <div>
            <Button disabled={message.length === 0} onClick={handleClick}>
              Devitear
            </Button>
          </div>
        </form>
      </AppLayout>
      <style jsx>
        {`
          textarea {
            resize: none;
            padding: 20px;
            width: 100%;
            outline: 0;
            min-height: 200px;
            border: none;
            user-select: none;
          }
          div {
            padding: 15px;
          }
        `}
      </style>
    </>
  )
}

export default TweetPage
