import '../styles/Header.css'
import { Link } from 'react-router-dom'


export default function Header({ menu }) {
    return (
        <div className="navbar">
            <div className="navbar-left"><h3>SufniGsm</h3> </div>
            <div className="navbar-right">
                {menu.filter(e => e.menubar === true).map(element => <Link key={element.path} to={element.path}>
                    {element.icon && <><box-icon name={element.icon} color='white'></box-icon><br /></>}
                    {element.name}

                </Link>)}
            </div>
        </div>
    )
}