interface Props {
    children: string;
    color?: string;
    onClick: () => void; //function with no parameters
}

const Button = ({children, onClick, color = 'primary'}: Props) => {
  return (
    <button className = {'btn btn-' + color} onClick={onClick}>{children}</button>
  )
}

export default Button