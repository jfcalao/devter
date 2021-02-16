import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyCgL_tjR-eU-xrt-pBiLfCwYuVpqeBrYBg",
  authDomain: "devter-7577b.firebaseapp.com",
  projectId: "devter-7577b",
  storageBucket: "devter-7577b.appspot.com",
  messagingSenderId: "928720443380",
  appId: "1:928720443380:web:6505d1e630fe173c1bcba1",
  measurementId: "G-H0TKLJRKLW",
}
!firebase.apps.length && firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const mapFirebaseUserToUser = (user) => {
  console.log(user)
  if (user) {
    const { displayName, email, photoURL, uid } = user
    return {
      username: displayName,
      avatar: photoURL,
      email,
      uid,
    }
  } else {
    return null
  }
}

export const onAuthStateChanged = (onChange) => {
  return firebase.auth().onAuthStateChanged((user) => {
    const normalizedUser = mapFirebaseUserToUser(user)
    console.log(normalizedUser)
    onChange(normalizedUser)
  })
}

export const loginWithGithub = () => {
  const gitHubProvider = new firebase.auth.GithubAuthProvider()
  return firebase.auth().signInWithPopup(gitHubProvider)
}
export const addDevit = (devit) => {
  const newDevit = {
    ...devit,
    createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
  }
  return db.collection("devit").add(newDevit)
}
