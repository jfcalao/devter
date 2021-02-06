import AppLayout from "components/AppLayout"
import { useState, useEffect } from "react"
import Devit from "components/Devit"

const HomePage = () => {
  const [devitList, setDevitList] = useState([])
  useEffect(() => {
    fetch("http://localhost:3000/api/statuses/home_timeline")
      .then((res) => res.json())
      .then(setDevitList)
  }, [])
  return (
    <>
      <AppLayout>
        <header>
          <h2>Inicio</h2>
        </header>
        <section>
          {devitList.map((devit) => {
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
            display: flex;
            align-items: center;
            border: 1px solid #ccc;
            position: sticky;
            height: 49px;
            width: 100%;
            top: 0;
          }
          nav {
            display: flex;
            align-items: center;
            border: 1px solid #ccc;
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
            padding-top: 100px;
          }
        `}
      </style>
    </>
  )
}
export default HomePage
