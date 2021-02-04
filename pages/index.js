import Head from 'next/head'
import { useEffect, useState } from 'react'
import AppLayout from '../components/AppLayout'
import Button from '../components/Button'
import GitHub from '../components/Icons/GitHub'
import { colors } from '../styles/theme'

import { loginWithGithub, onAuthStateChanged } from '../firebase/client'

export default function Home() {
  const [user, setUser] = useState(undefined)
  useEffect(()=>{
    onAuthStateChanged(setUser)
  }, [])
  
  const handleClick = () => {
    loginWithGithub().then(user => {
      console.log('singueado', user)
      setUser(user)
    }).catch(err=> console.error(err))
  }
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <AppLayout>
        <section>
          <img src="/devter-logo.png" alt="Logo"></img>
          <h1>
            DevTer
          </h1>
          <h2>
            Talk about development <br />with developers 👩‍💻  🧑‍💻
          </h2>
          <div>
            {user===null && 
            <Button onClick={ handleClick }><GitHub fill='#fff' width='24' height='24' /> Login with GitHub</Button>
            }
            {
              user && user.avatar_url &&
              <div>
                <img src={user.avatar_url}></img>
                <strong>{user.username}</strong>
              </div>
            }
            
          </div>
        </section>
      </AppLayout>
      <style jsx>{`
        section {
          display: grid;
          place-items: center;
          place-content: center;
          height: 100%;
        }

        img {
          width: 120px;
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
