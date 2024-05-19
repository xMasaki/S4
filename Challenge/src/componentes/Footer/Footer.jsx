import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div>
            <button>
                <Link to="/home">Home</Link>
            </button>
            <button>
                <Link to="/perfil">Perfil</Link>
            </button>
        </div>
    );
}
