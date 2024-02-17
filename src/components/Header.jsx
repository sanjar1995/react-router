import { NavLink,Link } from "react-router-dom"
import { router } from "../router/index"
function Header() {
  return (
    <header className="header">
        <Link to="/" className="logo">React Routers</Link>
        <ul className="list">
            {
                router.map((route)=>(
                    <li key={route.path}><NavLink className="header__link" to={route.path}>{route.name}</NavLink></li>
                ))
            }
        </ul>
    </header>
  )
}

export default Header