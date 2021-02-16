import Head from "next/head"
import { useEffect } from "react"
import AppLayout from "components/AppLayout"
import Button from "components/Button"
import GitHub from "components/Icons/GitHub"
import { colors } from "styles/theme"

import { loginWithGithub } from "firebase/client"
import Avatar from "components/Avatar"
import Logo from "components/Icons/Logo"

import { useRouter } from "next/router"
import useUser, { USER_STATE } from "hooks/useUser"

export default function Home() {
  const router = useRouter()

  const user = useUser()

  useEffect(() => {
    user && router.replace("/home")
  }, [user])

  const handleClick = () => {
    loginWithGithub()
  }
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <AppLayout>
        <section>
          <Logo width="100"></Logo>
          <h1>DevTer</h1>
          <h2>
            Talk about development <br />
            with developers 👩‍💻 🧑‍💻
          </h2>
          <div>
            {user === USER_STATE.NOT_LOGGED && (
              <Button onClick={handleClick}>
                <GitHub fill="#fff" width="24" height="24" /> Login with GitHub
              </Button>
            )}
            {user === USER_STATE.NOT_KNOWN && (
              <img src="spinner.gif" alt="Loading"></img>
            )}
            {user && user.avatar && (
              <Avatar src={user.avatar} userName={user.username}></Avatar>
            )}
          </div>
        </section>
      </AppLayout>
      <style jsx>
        {`
          section {
            display: grid;
            place-items: center;
            place-content: center;
            height: 100%;
          }

          h1 {
            color: ${colors.primary};
            font-weight: 800;
            margin-bottom: 16px;
          }
          h2 {
            color: ${colors.secondary};
            font-size: 21px;
            margin: 0;
          }
          div {
            margin-top: 16px;
          }
        `}
      </style>
    </div>
  )
}
