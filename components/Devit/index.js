import Avatar from "components/Avatar"

const Devit = ({ avatar, message, username }) => {
  return (
    <>
      <article>
        <div>
          <Avatar src={avatar} alt={username}></Avatar>
        </div>
        <section>
          <strong>{username}</strong>
          <p>{message}</p>
        </section>
      </article>
      <style jsx>{`
        article {
          border-bottom: 1px solid #9eb9ca35;
          display: flex;
          padding: 10px 15px;
        }
        div {
          margin-right: 10px;
        }
        p {
          margin: 0;
          line-height: 1.3125;
        }
        strong {
          margin-bottom: 2px;
        }
      `}</style>
    </>
  )
}
export default Devit
