import AppLayout from "components/AppLayout"
import Avatar from "components/Avatar"
import useUser from "hooks/useUser"

const { default: Button } = require("components/Button")

const TweetPage = () => {
  const user = useUser()
  console.log("Este es el user", user)
  return (
    <>
      <AppLayout>
        {user && <Avatar src={user.avatar_url}></Avatar>}
        <textarea>Que está pasando???</textarea>
        <div>
          <Button>Devitear</Button>
        </div>
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
