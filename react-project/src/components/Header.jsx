import './../css/header.css';
import { ReactComponent as Favourite } from './../img/favourite.svg';

function Header() {
    return (
        <header className="header">
            <div className="header_container">
                <div className="header_flex">
                    <div className="header_item">
                        <div className="logotype">
                            <h2>MealSearch</h2>
                        </div>
                    </div>
                    <div className="header_item">
                        <nav className="menu">
                            <ul className="menu_list">
                                <li className="menu_item"><a href="#"><Favourite/></a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
