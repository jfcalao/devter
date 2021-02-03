import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCgL_tjR-eU-xrt-pBiLfCwYuVpqeBrYBg",
  authDomain: "devter-7577b.firebaseapp.com",
  projectId: "devter-7577b",
  storageBucket: "devter-7577b.appspot.com",
  messagingSenderId: "928720443380",
  appId: "1:928720443380:web:6505d1e630fe173c1bcba1",
  measurementId: "G-H0TKLJRKLW"
};
!firebase.apps.length &&
  firebase.initializeApp(firebaseConfig)
export const loginWithGithub = () => {
  const gitHubProvider = new firebase.auth.GithubAuthProvider()
  return firebase.auth().signInWithPopup(gitHubProvider).then(user=>{
    const { additionalUserInfo } = user
      const { username, profile } = additionalUserInfo
      const { avatar_url, blog } = profile
      return {
        username,
        avatar_url,
        blog
      }
  })
}