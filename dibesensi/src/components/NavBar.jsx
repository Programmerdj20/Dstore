import React, { useState } from "react";
import { FaBars, FaSearch, FaShoppingBag } from "react-icons/fa"; // Importa los íconos que necesitas

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-[#f8e9dd] text-[#376775] p-4 flex justify-between items-center">
            <div className="flex items-center">
                {/* Logo */}
                <div className="flex items-center order-last md:order-first">
                    <img
                        className="w-24 md:w-[120px] md:ml-10 md:p-0 ml-24"
                        src="./src/assets/dstorelogo.png"
                        alt=""
                    />
                </div>
                <div className="md:hidden order-first md:order-2">
                    {/* Icono del menú hamburguesa */}
                    <FaBars
                        className="text-xl cursor-pointer"
                        onClick={toggleMenu}
                    />
                </div>
            </div>

            {/* Elementos de navegación */}
            <div className={`md:flex ${isMenuOpen ? "block" : "hidden"}`}>
                <a
                    href="#"
                    className="flex md:text-xl  mt-4 md:mt-4 mx-4 md:mx-4 font-bold"
                >
                    Inicio
                </a>
                <a
                    href="#"
                    className="flex md:text-xl  mt-4 md:mt-4 mx-4 md:mx-4 font-bold"
                >
                    Ellas
                </a>
                <a
                    href="#"
                    className="flex md:text-xl mt-4 md:mt-4 mx-4 md:mx-4 font-bold"
                >
                    Ellos
                </a>
                <a
                    href="#"
                    className="flex md:text-xl mt-4 md:mt-4 mx-4 md:mx-4 font-bold"
                >
                    Colecciones
                </a>
            </div>

            <div className="flex items-center">
                {/* Iconos de búsqueda y carrito de compras */}
                <FaSearch className="text-xl mr-4 mx-1" />
                <FaShoppingBag className="text-xl md:mr-10" />
            </div>
        </nav>
    );
};

export default NavBar;
