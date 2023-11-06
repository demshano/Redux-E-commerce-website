import { Link } from "react-router-dom"

export const Header = () => {
  return (
    <header>
            <div>
                <Link to={'/'}>Home</Link>
                <Link to={'cart'}>Cart</Link>
            </div>
    </header>
  )
}
