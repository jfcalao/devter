import AppLayout from "components/AppLayout"
import Avatar from "components/Avatar"
import useUser from "hooks/useUser"
import { useState } from "react"
import { addDevit } from "firebase/client"
import { useRouter } from "next/router"

const { default: Button } = require("components/Button")

const TweetPage = () => {
  const router = useRouter()
  const user = useUser()
  const COMPOSE_STATES = {
    LOADING: 1,
    SUCCESS: 2,
    NOT_KNOW: 3,
    ERROR: -1,
  }
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState(COMPOSE_STATES.NOT_KNOW)
  const handleClick = () => {
    console.log("click")
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    setStatus(COMPOSE_STATES.LOADING)
    console.log("Submit")
    const { avatar, username, uid } = user
    addDevit({
      avatar,
      username,
      content: message,
      uid,
      likesCount: 0,
      sharedCount: 0,
    })
      .then((docRef) => {
        console.log("devit added", docRef)
        router.push("/home")
      })
      .catch((err) => console.error("Error adding devit ", err))
  }
  const handleInput = (event) => {
    const inputValue = event.target.value
    setMessage(inputValue)
  }
  const buttonIsDisabled =
    status === COMPOSE_STATES.LOADING || message.length === 0
  console.log("Boton desabilitado??? ", buttonIsDisabled)
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
            <Button disabled={buttonIsDisabled} onClick={handleClick}>
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
