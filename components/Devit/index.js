import Avatar from "components/Avatar"

const Devit = ({ avatar, message, username }) => {
  return (
    <>
      <article>
        <div>
          <Avatar src={avatar} alt={username}></Avatar>
        </div>
        <section>{message}</section>
      </article>
      <style jsx>{`
        article {
          border: 1px solid red;
          display: flex;
        }
      `}</style>
    </>
  )
}
export default Devit
