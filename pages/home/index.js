import AppLayout from "components/AppLayout"
import { useState, useEffect } from "react"
import Devit from "components/Devit"
import { colors } from "styles/theme"
import useUser from "hooks/useUser"

const HomePage = () => {
  const [devitList, setDevitList] = useState([])
  useEffect(() => {
    fetch("http://localhost:3000/api/statuses/home_timeline")
      .then((res) => res.json())
      .then(setDevitList)
  }, [])
  const user = useUser()
  return (
    <>
      <AppLayout>
        <header>
          <h2>Inicio</h2>
        </header>
        <section>
          {user &&
            devitList.map((devit) => {
              return (
                <Devit
                  key={devit.id}
                  avatar={devit.avatar}
                  message={devit.message}
                  username={devit.username}
                ></Devit>
              )
            })}
        </section>
        <nav></nav>
      </AppLayout>
      <style jsx>
        {`
          header {
            background: ${colors.white};
            display: flex;
            align-items: center;
            border-bottom: 1px solid #ccc;
            position: sticky;
            height: 49px;
            width: 100%;
            top: 0;
          }
          nav {
            background: ${colors.white};
            display: flex;
            align-items: center;
            border-top: 1px solid #ccc;
            width: 100%;
            position: sticky;
            height: 49px;
            bottom: 0;
          }
          h2 {
            font-size: 21px;
            font-weight: 800;
          }
          section {
            padding-top: 4px;
          }
        `}
      </style>
    </>
  )
}
export default HomePage
