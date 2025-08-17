import { NavLink } from "react-router";

const Navbar = () => {
    return (
        <nav style={{ background: "#333", padding: "1rem" }}>
            <ul style={{ display: "flex", gap: "1rem", listStyle: "none", margin: 0, padding: 0 }}>
                <li>
                    <NavLink to="/" style={{ color: "white", textDecoration: "none" }}>
                        Главная
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" style={{ color: "white", textDecoration: "none" }}>
                        О нас
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" style={{ color: "white", textDecoration: "none" }}>
                        Контакты
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
