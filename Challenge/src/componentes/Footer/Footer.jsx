import React from 'react';
import { Link } from 'react-router-dom';
import { FaHouse } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";

import '../../Style/componentes/Footer.scss';

export default function Footer() {
    return (
        <footer id='stFooter'>
            <button id='btnFooter'>
                <Link to="/home"><FaHouse id='iconFooter' /></Link>
            </button>
            <button id='btnFooter'>
                <Link to="/perfil"><FaUserAlt id='iconFooter' /></Link>
            </button>
            <p id='webFooter'>ⓒ Copyright 2024 SISSI</p>
        </footer>
    );
}

