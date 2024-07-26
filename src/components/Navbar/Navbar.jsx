import CardWidget from "../CartWidget/CardWidget";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import "./Navbar.css"


const Navbar = () => {
    return (
        <div className="navbar">

            <div className="logo">
                <p>DoesNeakers</p>
            </div>

            <div className="navbar-links">
                
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Sneakers</a></li>
                    <li><a href="#">Men</a></li>
                    <li><a href="#">Women</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>

            </div>

            <CardWidget/>
        </div>
    )
}

export default Navbar;