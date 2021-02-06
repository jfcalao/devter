import styles from "../Avatar/styles.module.css"
const Avatar = ({ src, userName }) => {
  return (
    <>
      <div className={styles.container}>
        <img className={styles.avatar} src={src} alt={userName}></img>
        {userName && <strong>{userName}</strong>}
      </div>
    </>
  )
}
export default Avatar
