import styles from "../Avatar/styles.module.css"
const Avatar = ({ profilePicture, userName }) => {
  return (
    <>
      <div className={styles.container}>
        <img
          className={styles.avatar}
          src={profilePicture}
          alt={userName}
        ></img>
        <strong>{userName}</strong>
      </div>
    </>
  )
}
export default Avatar
