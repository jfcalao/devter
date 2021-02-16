import { colors } from "../../styles/theme"

const Button = ({ children, onClick, disabled }) => {
  return (
    <>
      <button disabled={disabled} onClick={onClick}>
        {children}
      </button>
      <style jsx>
        {`
          button {
            border: none;
            border-radius: 9999px;
            background: ${colors.black};
            color: ${colors.white};
            padding: 8px 24px;
            font-size: 16px;
            font-weight: 800;
            cursor: pointer;
            outline: 0;
            transition: opacity 0.3s ease;
            display: flex;
            align-items: center;
            user-select: none;
          }
          button[disabled] {
            opacity: 0.2;
            pointer-events: none;
          }
          button > :global(svg) {
            margin-right: 8px;
          }
          button:hover {
            opacity: 0.7;
          }
        `}
      </style>
    </>
  )
}
export default Button
