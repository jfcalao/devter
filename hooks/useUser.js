import { onAuthStateChanged } from "firebase/client"
import { useState, useEffect } from "react"
import { useRouter } from "next/router"

export const USER_STATE = {
  NOT_LOGGED: null,
  NOT_KNOWN: undefined,
}

export default function useUser() {
  const [user, setUser] = useState(USER_STATE.NOT_KNOWN)
  useEffect(() => {
    console.log("entra")
    onAuthStateChanged(setUser)
  }, [])
  const router = useRouter()
  useEffect(() => {
    user === USER_STATE.NOT_LOGGED && router.push("/")
  }, [user])
  return user
}
